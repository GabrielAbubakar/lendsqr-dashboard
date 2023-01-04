import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import Form from "../components/Form";
import UsersIcon from '../assets/icons/users-icon.svg';
import ActiveIcon from '../assets/icons/active-users-icon.svg';
import LoansIcon from '../assets/icons/loans-icon.svg';
import SavingsIcon from '../assets/icons/savings-icon.svg';

import Ic from '../assets/icons/ic-more-icon.svg';
import Blacklist from '../assets/icons/blacklist-icon.svg';
import Activate from '../assets/icons/activate-icon.svg';
import ViewIcon from '../assets/icons/view-more-icon.svg';

import NextIcon from '../assets/icons/next-btn-icon.svg';
import PrevIcon from '../assets/icons/prev-btn-icon.svg';
import FilterIcon from '../assets/icons/filter-results-icon.svg';
import { User } from "../components/types";


interface FilterArgs {
    data: User[],
    filterObj: FilterData
}

interface FilterData {
    org: string,
    username: string,
    email: string,
    date: string,
    number: string,
    status: string
}

const Dashboard = () => {

    const [filterOpen, setFilterOpen] = useState<boolean>(false)
    const [data, setData] = useState<User[]>()
    const [filteredData, setFilteredData] = useState<User[]>()
    const [paginatedData, setPaginatedData] = useState<User[]>()
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [totalPages, setTotalPages] = useState<number>()
    const [rows, setRows] = useState<number>(10)
    const [detailsOpen, setDetailsOpen] = useState<boolean>(false)
    const [id, setId] = useState<number>()

    const columns = ['Organization', 'Username', 'Email', 'Phone Number', 'Date Joined', 'Status']

    const [form, setForm] = useState<FilterData>({
        org: '',
        username: '',
        email: '',
        date: '',
        number: '',
        status: ''
    })

    const fetchUsers = () => {
        fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setData(data)
            })
            .catch(err => console.log(err))
    }

    const filterData = ({ data, filterObj }: FilterArgs) => {
        // for (let i = 0; i < data.length; i++) {

        // }
        setFilteredData(data.filter(user => {
            user.userName == filterObj.username
        }))
    }

    const pagination = (data: User[], rows: number, currentPage: number) => {
        const start = (currentPage - 1) * rows;
        const end = start + rows

        setPaginatedData(data.slice(start, end))
        setTotalPages(Math.ceil(data.length / rows))
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    useEffect(() => {
        if (data) {
            pagination(data, rows, currentPage)
        }
    }, [data, rows, currentPage])


    return (
        <div className="dashboard">
            <Navbar />
            <div className="dashboard__container">
                <Sidebar isProfile={false} />
                <div className="content">
                    <h1>Users</h1>

                    <div className="card__container">
                        <StatCard img={UsersIcon} title='Users' stat={data?.length} />
                        <StatCard img={ActiveIcon} title='Active Users' stat={data?.length} />
                        <StatCard img={LoansIcon} title='Users with Loans' stat={12453} />
                        <StatCard img={SavingsIcon} title='Users with Savings' stat={102453} />
                    </div>

                    <div className="dashboard__table-container">
                        <div className="dashboard__table">

                            <Form
                                filter={filterData}
                                filterOpen={filterOpen}
                                form={form}
                                setForm={setForm} />

                            <table cellSpacing={0}>

                                <thead>
                                    <tr>
                                        {
                                            columns.map((item, i) => (
                                                <th key={i}>
                                                    {item} <button onClick={() => setFilterOpen(!filterOpen)}>
                                                        <img src={FilterIcon} alt="filter icon" />
                                                    </button>
                                                </th>
                                            ))
                                        }
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        paginatedData && paginatedData.map((item: any, i) => (
                                            <tr key={i}>
                                                <td>{item.orgName}</td>
                                                <td>{item.userName}</td>
                                                <td>{item.email}</td>
                                                <td>{item.profile.phoneNumber}</td>
                                                <td>
                                                    {new Date(item?.createdAt).toLocaleDateString()} {new Date(item?.createdAt).toLocaleTimeString()}
                                                </td>
                                                <td>{item.id}</td>
                                                <td >
                                                    <button onClick={() => {
                                                        setId(item.id)
                                                        setDetailsOpen(!detailsOpen)
                                                    }}>
                                                        <img src={Ic} alt="" />
                                                    </button>
                                                    <ul id={item.id} style={{ display: detailsOpen && id == item.id ? 'flex' : 'none' }}>
                                                        <li>
                                                            <img src={ViewIcon} alt="" />
                                                            <Link to={`/user-details/${item.id}`}>
                                                                View Details
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <img src={Blacklist} alt="" />
                                                            Blacklist User
                                                        </li>
                                                        <li>
                                                            <img src={Activate} alt="" />
                                                            Activate User
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>


                            </table>

                            <div className="table__footer">
                                <div>
                                    <p>
                                        Showing <select name="rows" id="rows" onChange={(e) => setRows(+e.target.value)}>
                                            <option value="10">10</option>
                                            <option value="20">20</option>
                                            <option value="50">50</option>
                                        </select>  out of {data?.length}
                                    </p>
                                </div>
                                <div className="pagination">
                                    <span onClick={() => {
                                        if (currentPage !== 0) {
                                            setCurrentPage(currentPage - 1)
                                        }
                                    }}>
                                        <img src={PrevIcon} alt="" />
                                    </span>
                                    <ul>

                                    </ul>
                                    <span onClick={() => {
                                        if (totalPages) {
                                            if (currentPage < totalPages) {
                                                setCurrentPage(currentPage + 1)
                                            }
                                        }
                                    }}>
                                        <img src={NextIcon} alt="" />
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
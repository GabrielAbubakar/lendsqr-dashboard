import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import Form from "../components/Form";
import UsersIcon from '../assets/icons/users-icon.svg';
import ActiveIcon from '../assets/icons/active-users-icon.svg';
import LoansIcon from '../assets/icons/loans-icon.svg';
import SavingsIcon from '../assets/icons/savings-icon.svg';
import NextIcon from '../assets/icons/next-btn-icon.svg';
import PrevIcon from '../assets/icons/prev-btn-icon.svg';
import FilterIcon from '../assets/icons/filter-results-icon.svg';

const Dashboard = () => {

    const [filterOpen, setFilterOpen] = useState<boolean>(false)
    const [data, setData] = useState<[]>()

    const [form, setForm] = useState({
        org: '',
        username: '',
        email: '',
        date: '',
        number: '',
        status: ''
    })

    const columns = ['Organization', 'Username', 'Email', 'Phone Number', 'Date Joined', 'Status']

    const openFilter = () => {
        setFilterOpen(!filterOpen)
    }

    const fetchUsers = () => {
        fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setData(data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchUsers()
    }, [])


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

                            <Form filterOpen={filterOpen} form={form} setForm={setForm} />

                            <table cellSpacing={0}>

                                <thead>
                                    <tr>
                                        {
                                            columns.map((item, i) => (
                                                <th key={i}>
                                                    {item} <button onClick={openFilter}>
                                                        <img src={FilterIcon} alt="" />
                                                    </button>
                                                </th>
                                            ))
                                        }
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        data && data.map((item: any, i) => (
                                            <tr key={i}>
                                                <td>{item.orgName}</td>
                                                <td>{item.userName}</td>
                                                <td>{item.email}</td>
                                                <td>{item.profile.phoneNumber}</td>
                                                <td>
                                                    {new Date(item?.createdAt).toLocaleDateString()} {new Date(item?.createdAt).toLocaleTimeString()}
                                                </td>
                                                <td>{item.id}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>


                            </table>

                            <div className="table__footer">
                                <div>Showing 100 out of 100</div>
                                <div className="pagination">
                                    <span>
                                        <img src={PrevIcon} alt="" />
                                    </span>
                                    <ul>
                                        <li>1</li>
                                        <li>2</li>
                                        <li>3</li>
                                    </ul>
                                    <span>
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
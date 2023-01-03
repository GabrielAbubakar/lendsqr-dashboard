import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

import { User } from '../components/types';

import BackIcon from '../assets/icons/back-btn-icon.svg'
import ProfileDetails from '../components/ProfileDetails';

const UserDetails = () => {

    const user = useParams()
    const [data, setData] = useState<User>()

    const fetchUsers = () => {
        fetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${user.id}`)
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
        <div className='user__details'>
            <Navbar />
            <div className="user__details-container">
                <Sidebar isProfile={true} />
                <div className='user__details-content'>

                    <span className="back-btn">
                        <Link to='/dashboard'>
                            <span>
                                <img src={BackIcon} alt="back icon" />
                            </span>
                            Back to Users
                        </Link>
                    </span>
                    <header>
                        <h1>User Details</h1>
                        <div>
                            <button>Blacklist User</button>
                            <button>Activate User</button>
                        </div>
                    </header>

                    <div className='user__details-profileTop'>
                        {
                            data && (
                                <div className="profile__overview">
                                    <div className='profile__img-box'>
                                        <img src={data.profile.avatar} alt="" />
                                    </div>
                                    <div className="profile__name">
                                        <h2>{data.profile.firstName} {data.profile.lastName}</h2>
                                        <p>{data.accountNumber}</p>
                                    </div>
                                    {/* <div className="profile__tier">

                                    </div> */}
                                    <div className="profile__balance">
                                        <h2>N{data.accountBalance}</h2>
                                        <p>{data.profile.bvn}</p>
                                    </div>
                                </div>
                            )
                        }

                        <ul className="profile__nav">
                            <li className='active'>General Details</li>
                            <li>Documents</li>
                            <li>Bank Details</li>
                            <li>Loans</li>
                            <li>Savings</li>
                            <li>App and System</li>
                        </ul>
                    </div>
                    {
                        data && (
                            <ProfileDetails
                                profile={data.profile}
                                email={data.email}
                                education={data.education}
                                guarantor={data.guarantor}
                                socials={data.socials}
                            />
                        )
                    }
                </div>

            </div>
        </div>
    )
}

export default UserDetails
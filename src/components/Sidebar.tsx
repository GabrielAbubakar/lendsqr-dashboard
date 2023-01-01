import '../styles/_Sidebar.scss';

import CaseBoldIcon from '../assets/icons/briefcase-bold-icon.svg';
import ArrowIcon from '../assets/icons/arrow-down-icon.svg';
import HomeIcon from '../assets/icons/home-icon.svg';


import UsersIcon from '../assets/icons/user-friends-icon.svg';
import UserIcon from '../assets/icons/users2-icon.svg';
import SackIcon from '../assets/icons/sack-icon.svg';
import HandShakeIcon from '../assets/icons/handshake-regular-icon.svg';
import PiggyIcon from '../assets/icons/piggy-bank-icon.svg';
import HoldIcon from '../assets/icons/holding-icon.svg';
import CheckIcon from '../assets/icons/user-check-icon.svg';
import KarmaIcon from '../assets/icons/user-times-icon.svg';
import CaseIcon from '../assets/icons/briefcase-icon.svg';
import BankIcon from '../assets/icons/bank-icon.svg';
import SolidIcon from '../assets/icons/coins-solid-icon.svg';
import TransIcon from '../assets/icons/transactions-icon.svg';
import GalaxyIcon from '../assets/icons/galaxy-icon.svg';
import CogIcon from '../assets/icons/user-cog-icon.svg';
import ScrollIcon from '../assets/icons/scroll-icon.svg';
import ChartIcon from '../assets/icons/chart-bar-icon.svg';
import SliderIcon from '../assets/icons/sliders-h-icon.svg';
import PerIcon from '../assets/icons/badge-percent-icon.svg';
import ClipIcon from '../assets/icons/clipboard-list-icon.svg';



const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>
                <span>
                    <img src={CaseBoldIcon} alt="home icon" />
                </span>
                Switch Organisation
                <span>
                    <img src={ArrowIcon} alt="home icon" />
                </span>
            </h2>
            <h3>
                <span>
                    <img src={HomeIcon} alt="home icon" />
                </span>
                Dashboard
            </h3>

            <h4>Customers</h4>
            <ul>
                <li className="active">
                    <span>
                        <img src={UsersIcon} alt="users logo" />
                    </span>
                    Users
                </li>
                <li>
                    <span>
                        <img src={UserIcon} alt="user logo" />
                    </span>
                    Guarantors
                </li>
                <li>
                    <span>
                        <img src={SackIcon} alt="user logo" />
                    </span>
                    Loans
                </li>
                <li>
                    <span>
                        <img src={HandShakeIcon} alt="user logo" />
                    </span>
                    Descision Models
                </li>
                <li>
                    <span>
                        <img src={PiggyIcon} alt="user logo" />
                    </span>
                    Savings
                </li>
                <li>
                    <span>
                        <img src={HoldIcon} alt="user logo" />
                    </span>
                    Loan Requests
                </li>
                <li>
                    <span>
                        <img src={CheckIcon} alt="user logo" />
                    </span>
                    Whitelist
                </li>
                <li>
                    <span>
                        <img src={KarmaIcon} alt="user logo" />
                    </span>
                    Karma
                </li>
            </ul>

            <h4>Businesses</h4>
            <ul>
                <li>
                    <span>
                        <img src={CaseIcon} alt="user logo" />
                    </span>
                    Organisation
                </li>
                <li>
                    <span>
                        <img src={HoldIcon} alt="user logo" />
                    </span>
                    Loan Products
                </li>
                <li>
                    <span>
                        <img src={BankIcon} alt="user logo" />
                    </span>
                    Savings Products
                </li>
                <li>
                    <span>
                        <img src={SolidIcon} alt="user logo" />
                    </span>
                    Fees and Charges
                </li>
                <li>
                    <span>
                        <img src={TransIcon} alt="user logo" />
                    </span>
                    Transactions
                </li>
                <li>
                    <span>
                        <img src={GalaxyIcon} alt="user logo" />
                    </span>
                    Services
                </li>
                <li>
                    <span>
                        <img src={CogIcon} alt="user logo" />
                    </span>
                    Service Account
                </li>
                <li>
                    <span>
                        <img src={ScrollIcon} alt="user logo" />
                    </span>
                    Settlements
                </li>
                <li>
                    <span>
                        <img src={ChartIcon} alt="user logo" />
                    </span>
                    Reports
                </li>
            </ul>

            <h4>Settings</h4>
            <ul>
                <li>
                    <span>
                        <img src={SliderIcon} alt="user logo" />
                    </span>
                    Preferences
                </li>
                <li>
                    <span>
                        <img src={PerIcon} alt="user logo" />
                    </span>
                    Fees and Pricing
                </li>
                <li>
                    <span>
                        <img src={ClipIcon} alt="user logo" />
                    </span>
                    Audit Logs
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;
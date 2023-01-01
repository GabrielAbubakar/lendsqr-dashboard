import Logo from '../assets/lendsqr-nav-logo.svg'
import Profile from '../assets/profile-image.png'
import SearchIcon from '../assets/icons/search-icon.svg'
import NotificationIcon from '../assets/icons/notification-icon.svg'
import DropdownIcon from '../assets/icons/dropdown-icon.svg'

const Navbar = () => {
    return (
        <nav className='navigation'>

            <div className='navigation__logo-box'>
                <img src={Logo} alt="lendsqr logo" title='lendsqr logo' />
            </div>

            <div className='navigation__input-group'>
                <input
                    type="text"
                    placeholder="Search for anything" />
                <button>
                    <img src={SearchIcon} alt="search" title='search' />
                </button>
            </div>

            <ul className='navigation__links'>
                <li>Docs</li>
                <li>
                    <img src={NotificationIcon} alt="notification bell" />
                </li>
                <li className='navigation__links-profileBox'>
                    <div>
                        <img src={Profile} alt="profile image" />
                    </div>
                    <p>
                        Adedeji
                        <img src={DropdownIcon} alt="dropdown icon" />
                    </p>
                </li>
            </ul>

            <div className="profile__mobile">
                <div>
                    <img src={Profile} alt="profile image" />
                </div>
                <img src={DropdownIcon} alt="dropdown icon" />
            </div>
        </nav>
    )
}

export default Navbar
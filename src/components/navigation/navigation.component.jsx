import {NavLink, useNavigate} from 'react-router';
import './navigation.css'

const navList = [
    {link: '/', label: "Home"},
    {link: '/shows', label: "Shows"},
    {link: '/movies', label: "Movies"},
    {link: '/games', label: "Games"},
    {link: '/account', label: "My Netflix"},
    {link: '/login', label: "Logout"},

]

// link: string, label: string, isActive: boolean
const NavigationButton = ({link, label})=>{
    const navigate = useNavigate();
    const handleLogout = ()=>{
            localStorage.removeItem('credentials');
            navigate("/login")
    }
    return  label === 'Logout' ? 
        <div 
            onClick={handleLogout} 
            className='nav-btn nav-btn-inactive' 
            style={{cursor: 'pointer'}}>
                {label}
        </div> 
    : 
    <NavLink
        to={link}
        className={({ isActive }) =>
        `nav-btn ${isActive ? 'nav-btn-active' : 'nav-btn-inactive'}`
        }
        >
        {label}
    </NavLink>
}


export const Navigation = ()=>{
    return <div className='nav-container'> 
        {navList.map((item)=>
            <NavigationButton 
                key={item.label}
                link={item.link} 
                label={item.label}/>
                
        )}
    </div>
}
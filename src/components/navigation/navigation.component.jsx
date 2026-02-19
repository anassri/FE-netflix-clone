import {useLocation} from 'react-router';

const navList = [
    {link: '/', label: "Home"},
    {link: '/shows', label: "Shows"},
    {link: '/movies', label: "Movies"},
    {link: '/games', label: "Games"},
    {link: '/account', label: "My Netflix"}
]

// link: string, label: string, isActive: boolean
const NavigationButton = ({link, label, isActive})=>{
    return<a href={link} style={{fontWeight: 'bold', textDecoration: 'none', color: isActive ? 'red' : 'black'}}>{label}</a>
}


export const Navigation = ()=>{
    const {pathname} = useLocation();
    return navList.map((item)=>
        <NavigationButton 
            key={item.label}
            link={item.link} 
            label={item.label} 
            isActive={pathname === item.link}/>
    )
}
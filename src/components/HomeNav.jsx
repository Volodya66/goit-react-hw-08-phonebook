import { useSelector } from "react-redux"
import ContactList from "./ListContact/ContactList "

export default function HomeNav() {
    
const isLoggedIn = useSelector(state  => state.users.isLoggedIn)
    return ( 
        <>
        {isLoggedIn ? (<ContactList/>):(<p>Пройдіть авторизацію🙄</p> )}
        
        
        </>
)

}

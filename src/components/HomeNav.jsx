import { useSelector } from "react-redux"
// import ContactList from "./ListContact/ContactList "
import ContactsList from "../pages/ListContact"

export default function HomeNav() {
    
const isLoggedIn = useSelector(state  => state.users.isLoggedIn)
    return ( 
        <>
        {isLoggedIn ? (<ContactsList/>):(<p>Пройдіть авторизацію🙄</p> )}
        
        
        </>
)

}

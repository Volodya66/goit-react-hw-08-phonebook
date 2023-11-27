import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { logOut } from "redux/connectionsAPI/auth-operations";


export default function UserNav ()  {
const dispatch = useDispatch();
const userName = useSelector(state  => state.users.user.name)
;

return (
    <>
    <li className='listNavigateItem'>
            <NavLink className='pageNavigate' to='/login'> Velcome : {userName}  </NavLink>
            <button type="button" onClick={()=>{dispatch(logOut())}}>LogOut</button>
    </li> 
    </>
)

}

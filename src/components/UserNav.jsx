// import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { logOut } from "redux/connectionsAPI/auth-operations";
import Button from "./Button/Button";

export default function UserNav ()  {
const dispatch = useDispatch();
const userName = useSelector(state  => state.users.user.name)
;

return (
    <>
    <li className='NavigateName'>
          <p className="NavigateText">   User : {userName} </p>
      {/* <button type="button" onClick={() => { dispatch(logOut()) }}>LogOut</button> */}
      <Button  styles1={"btnLogout"} type="button" onClick={() => { dispatch(logOut()) }} text={"LogOut"} />
    </li> 
    </>
)

}

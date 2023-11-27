import { NavLink } from "react-router-dom";



export default function AuthNav ()  {
  

return(
    

    <>
    <li className='listNavigateItem'>
        <NavLink className='pageNavigate' to='/register'> Register </NavLink> 
    </li>
    <li className='listNavigateItem'>
           <NavLink className='pageNavigate' to='/login'> Login♨ </NavLink>
    </li> 
    </>
)

}

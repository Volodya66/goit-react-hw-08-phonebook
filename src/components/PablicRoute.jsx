import { useSelector } from "react-redux/es/hooks/useSelector";
import { Navigate } from "react-router-dom";




export default function RegisterRoute ({component: Component, redirectTo="/"}) {
const isLoggedIn = useSelector(state  => state.users.isLoggedIn);


    return isLoggedIn ? <Navigate to={redirectTo} /> : Component

//   <Route {...routeProps}>
//    {isLoggedIn? <Navigate to="/" /> : children} 
//   </Route>
    



}
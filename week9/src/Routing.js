import { Link, Route, Routes, useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";


const Home = () => <h1>Home</h1> 
const Projects = ()  => <h1>Projects</h1>
const NotFound = () => <p>404</p>


const Orders = () => {
    const { id } = useParams();

    const location = useLocation();


    return (
        <div>
        <p>Orders</p>
        <p>ID: {id}</p>
        <p>Current Location: {location.pathname}</p>
        <p>Query paeremetor: {location.search}</p>
        </div>
    )
}


const DashBord = () => {

    const isSignedIn = false;
    const navigate = useNavigate();

    useEffect(() => {
        if (!isSignedIn) {
            navigate('/Login')
        }

    });

    return (
        <p>DashBoard</p>
    );
}

const LogIn = () => {
    return (
        <p>LogIn</p>
    )
}
 
const Routing = () => {
    return (
        <div>
            <div>
                <Link to = "/">Home</Link>
                <br/>
                <Link to = "/projects">Projects</Link>
                <br/>
                <Link to = "/DashBoard">DashBoard</Link>
            </div>
        <Routes>
            <Route path = "/" element = {<Home/>} />
            <Route path = "/projects" element = {<Projects/>}/>
            <Route path = "*" element = {<NotFound/>}/>
            <Route path = '/orders/:id' element = {<Orders/>}/>

            <Route path = "DashBoard" element = {<DashBord/>} />
            <Route path = "Login" element = {<logIn/>} />

        </Routes>
        </div>
    )
}

export default Routing;
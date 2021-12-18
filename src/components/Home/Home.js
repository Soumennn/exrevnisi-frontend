import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import People from "../People/People"
import Product from "../Products/Product"
import {BrowserRouter as Router, Switch as Routes, Route, Redirect} from "react-router-dom";


const Home = () => {
    return (
        <Router>
            <div className="Home">
            
            <Routes>
                <Route exact path="/">
                    <Redirect to="/people"/>
                </Route>

                <Route exact path="/people">
                    <Navbar/>
                    <People/>
                    <Footer/> 
                </Route>

                <Route exact path="/product">
                    <Navbar/>
                    <Product/>
                    <Footer/> 
                </Route>
                
            </Routes>
            
            </div>
        </Router>
    )
}

export default Home

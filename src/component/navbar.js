import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class Navbar extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-md navbar-light fixed-top py-4">
                    <div className="container">
                       
                        <a href="index.html" class="navbar-brand">
                            <img src="http://logok.org/wp-content/uploads/2017/01/Juventus-logo-2017.png" width="50" height="50" alt="" /><h3 class="d-inline align-middle">Just Food</h3>
                        </a>
                        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav"><span class="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a href="#home" className="nav-link">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="#about" className="nav-link">History</a>
                            </li>
                            <li className="nav-item">
                                <a href="#authors" className="nav-link">Add Restaurants</a>
                            </li>
                            <li className="nav-item">
                                <a href="#contact" className="nav-link">Contact</a>
                            </li>
                            </ul>
                        </div>
                      </div>
                </nav>
            </div>
        );
    }
}
export default Navbar;
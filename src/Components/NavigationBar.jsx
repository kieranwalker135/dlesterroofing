import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import logo from "./../../src/logo.svg";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactDetails from './contactDetails';

class Navigation extends Component {

    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (<header >
            <div className="siteNavigation" >
                <div className="container" >
                    <div className="row align-items-center">
                        <div className="col-6 col-sm-6 col-md-3 col-lg-3  logo" > <a href="/" className="navbar-logo"> <img src={logo} alt="D Lester Roofing, Maintenance and Repairs" class="img-fluid" /></a>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4 text-center" >
                            <nav className="NavbarItems" >
                                <div className="menu-icon"
                                    onClick={this.handleClick} >
                                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}> </i> </div> <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}> {
                                        MenuItems.map((item, index) => {
                                            return (<li key={index} >
                                                <a className={item.cName}
                                                    href={item.url}>
                                                    {item.title} </a>
                                            </li>
                                            )
                                        })
                                    }
                                </ul>
                            </nav>
                        </div>
                        <div className="col-12 col-sm-12 col-md-5 headerContact">
                            <ContactDetails />
                        </div>
                    </div>
                </div>

            </div>
        </header>
        )
    }
}

export default Navigation;
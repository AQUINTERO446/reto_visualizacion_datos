import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a className="navbar-brand" href="#">Reto visualizacion datos</a>
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <Link to="/security" className="nav-link">Seguridad</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/supplying" className="nav-link">Abastecimiento</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/traffic" className="nav-link">Trafico</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/water" className="nav-link">Agua</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header

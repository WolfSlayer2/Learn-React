import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    const changered = () => {
        props.colorchange('#b20a2c', 'danger');
    }
    const changegreen = () => {
        props.colorchange('#71B280', 'success');
    }
    const changeblue = () => {
        props.colorchange('#457fca', 'primary');
    }
    const revert = () => {
        props.colorchange('white', 'primary');
    }
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>
                    {props.title}
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to='/'>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/about'>
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="dropdown mx-3">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Colors
                    </button>
                    <ul className="dropdown-menu">
                        <li><button className="dropdown-item" type="button" onClick={changered}>Red</button></li>
                        <li><button className="dropdown-item" type="button" onClick={changegreen}>Green</button></li>
                        <li><button className="dropdown-item" type="button" onClick={changeblue}>Blue</button></li>
                        <li><button className="dropdown-item" type="button" onClick={revert}>Revert</button></li>
                    </ul>
                </div>
                {/* ternary operator used */}
                <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                        onClick={props.toggle}
                    />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                        Dark Mode
                    </label>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    search: PropTypes.string
}

Navbar.defaultProps = {
    title: "Set Title",
    search: "Change Button name"
}


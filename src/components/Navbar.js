import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from './Container';

export default class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <Container>
                <div className="brand">
                    CALIN BOGDAN
                </div>
                {/* links */}
                <div>
                    <NavLink to="/contact">
                    JOB HISTORY & EDUCATION
                    </NavLink>
                    <NavLink to="/contact">
                    CONTACT
                    </NavLink>
                </div>              
                </Container>
            </div>
        );
    }
}
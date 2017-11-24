import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from './Container';
import NavigationItem from './NavigationItem';

export default class NavigationBar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <Container>
                <div className="brand">
                    CALIN BOGDAN
                </div>
                {/* links */}
                <div>
                    <NavigationItem route="/contact">
                        JOB HISTORY & EDUCATION
                    </NavigationItem>
                    <NavLink to="/contact">
                        CONTACT
                    </NavLink>
                </div>              
                </Container>
            </div>
        );
    }
}
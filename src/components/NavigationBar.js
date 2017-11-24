import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from './Container';
import NavigationItem from './NavigationItem';
import styles from './NavigationBar.css';

export default class NavigationBar extends React.Component {
    render() {
        return (
            <div className={styles.navbar}>
                <Container>
                    <div className={styles.navcontainer}>
                        <div className={styles.navbrand}>
                            CALIN BOGDAN
                        </div>
                        {/* links */}
                        <div className={styles.linkscontainer}>
                            <NavigationItem route="/contact">
                                JOB HISTORY & EDUCATION
                            </NavigationItem>
                            <NavigationItem route="/contact">
                                CONTACT
                            </NavigationItem>
                        </div>  
                    </div>            
                </Container>
            </div>
        );
    }
}
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './NavigationItem.css';

class NavigationItem extends React.Component {
    render() {
        return (
            <NavLink className={styles.navlink} to={this.props.route}>
                {this.props.children}
            </NavLink>
        )
    }
}

NavigationItem.propTypes = {
    route: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
}

export default NavigationItem;

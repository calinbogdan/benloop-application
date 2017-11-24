import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

class NavigationItem extends React.Component {
    render() {
        return (
            <div>
                <NavLink to={this.props.route}>
                    {this.props.children}
                </NavLink>
            </div>
        )
    }
}

NavigationItem.propTypes = {
    route: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
}

export default NavigationItem;

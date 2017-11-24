import React from 'react';
import styles from './Picture.css';
import picture from './../images/image.jpg';

export default class Picture extends React.Component {
    render() {
        return (
            <img src={picture} className={styles.picture} alt="Picture of me"/>
        )
    }
}
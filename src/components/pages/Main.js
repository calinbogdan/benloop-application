import React from 'react';
import Container from './../Container';
import styles from './../Text.css';

export default class Main extends React.Component {
    render() {
        return (
            <Container>
                <p className={styles.headline}>I'm a young developer from Romania creating first class web and mobile applications.</p>
                <p className={styles.lead}>For more than 4 years I've been coding as a hobby using mostly C#, JavaScript and SQL. I've even managed to sell some software.</p>
            </Container>
        )
    }
}
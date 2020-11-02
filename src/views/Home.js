import React, { Fragment } from 'react';
import '../styles/Home.css';
import { Button } from 'antd';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {};
    };

    render() {
        return (
            <Fragment>
                <Button type="primary">Primary Button</Button>
                <Button>Default Button</Button>
                <Button type="dashed">Dashed Button</Button>
                <br />
                <Button type="text">Text Button</Button>
                <Button type="link">Link Button</Button>
            </Fragment>
        )
    }
}

export default Home;
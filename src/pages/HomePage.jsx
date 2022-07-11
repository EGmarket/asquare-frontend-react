import React, {Component, Fragment} from 'react';
import {Container} from "react-bootstrap";
import FeaturedProducts from "../components/home/FeaturedProducts";

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <FeaturedProducts/>
                </Container>


            </Fragment>
        );
    }
}

export default HomePage;

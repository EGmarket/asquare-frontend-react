import React, {Component, Fragment} from 'react';
import {Container} from "react-bootstrap";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Categories from "../components/home/Categories";
import Collection from "../components/home/Collection";
import NewArrival from "../components/home/NewArrival";

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <NewArrival/>
                    <FeaturedProducts/>
                     <Collection/>
                    <Categories/>
            </Fragment>
        );
    }
}

export default HomePage;

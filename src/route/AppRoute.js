import React, {Component, Fragment} from 'react';
import {Route, Routes} from "react-router";
import HomePage from "../pages/HomePage";
import UserLoginPage from "../pages/UserLoginPage";
import ContactPage from "../pages/ContactPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/login" element={<UserLoginPage/>}/>
                    <Route path="/contact" element={<ContactPage/>}/>
                    <Route path="/productdetails" element={<ProductDetailsPage/>}/>
                </Routes>

            </Fragment>
        );
    }
}

export default AppRoute;

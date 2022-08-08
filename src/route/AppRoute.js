import React, {Component, Fragment} from 'react';
import {Route, Routes} from "react-router";
import HomePage from "../pages/HomePage";
import UserLoginPage from "../pages/UserLoginPage";
import ContactPage from "../pages/ContactPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import NotificationPage from "../pages/NotificationPage";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/login" element={<UserLoginPage/>}/>
                    <Route path="/contact" element={<ContactPage/>}/>
                    <Route path="/productdetails" element={<ProductDetailsPage/>}/>
                    <Route path="/notification" element={<NotificationPage/>}/>
                </Routes>

            </Fragment>
        );
    }
}

export default AppRoute;

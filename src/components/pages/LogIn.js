import React from "react";

import Header from "../Header";
import MainLogin from "../MainLogin";
import Footer from "../Footer";

export default class LogIn extends React.Component {
    render() {
        return(
            <>
                <Header />
                <MainLogin />
                <Footer />
            </>
        );
    }
}
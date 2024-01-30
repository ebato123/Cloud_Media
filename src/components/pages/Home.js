import React from "react";

import Header from '../Header.js';
import Main from '../Main.js';
import Footer from '../Footer.js';

export default class Home extends React.Component {
    render() {
        return(
            <>
                <Header />
                <Main />
                <Footer />
            </>
        );
    }
}
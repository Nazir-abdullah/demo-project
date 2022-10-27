import Footer from "components/shared/footer/Footer";
import Nav from "components/shared/navBar/Nav";
import React from "react";

function Layout({ children }) {
    return (
        <div>
            <Nav />
            <main>{children}</main>
            <Footer />
        </div>
    );
}

export default Layout;

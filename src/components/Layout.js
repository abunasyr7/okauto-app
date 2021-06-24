import React from "react";
import Footer from "./footer";
import {Link} from "gatsby";

export default function Layout ({ children }) {
    return(
        <div>
            <Footer />
            <div>
                {children}
            </div>
        </div>
    )
}
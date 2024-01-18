import Proptypes from "prop-types"
import { Outlet } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Footer from "../footer/footer"

export default function Layout() {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

Layout.propTypes = {
    children: Proptypes.node.isRequired,
}
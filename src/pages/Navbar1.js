import { Link } from "react-router-dom"

export const NavBar = () => {
    return (
        <div>
            <Link to="/">Menu</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/menu">Menu</Link>
        </div>
    )
}
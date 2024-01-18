import './Navbar.css'

export default function Navbar() {
    return (
        <div className="topnav">
           
            <a href="/about">About</a>
            {/* <a href="/Todo">ToDos</a> */}
            <a href="/profile">Contact</a>
            <a href="/news">Promotion</a>
            <a className="active" href="/">Home</a>
        
        </div>
    )
}
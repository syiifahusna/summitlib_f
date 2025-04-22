
const Footer = () =>{
    return <div className="container">
        <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">Home</a></li>
                <li className="nav-item"><a href="/categories" className="nav-link px-2 text-body-secondary">Categories</a></li>
                <li className="nav-item"><a href="/search" className="nav-link px-2 text-body-secondary">Search</a></li>
                <li className="nav-item"><a href="/register" className="nav-link px-2 text-body-secondary">Register</a></li>
                <li className="nav-item"><a href="/login" className="nav-link px-2 text-body-secondary">Login</a></li>
                </ul>
            <p className="text-center text-body-secondary">© 2025 Summit Lib</p>
        </footer>
    </div>

}

export default Footer;
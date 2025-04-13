const Login = () => {
    return <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="card col-6 mt-5" id="registration-page">
                    <div className="card-body">
                        <h2 className="card-title text-center">Login to Your Account</h2>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="login-username" className="form-label">Username</label>
                                <input type="text" className="form-control" id="login-username" required=""></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="login-password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="login-password" required=""></input>
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="remember-me"></input>
                                <label className="form-check-label" htmlFor="remember-me">Remember me</label>
                            </div>
                            <button type="submit" className="btn btn-primary w-100 mb-3">Login</button>
                            <p className="text-center">Don't have an account? <a href="/register">Register here</a></p>
                        </form>
                    </div>
                </div>
            </div>
    
    }
    
    export default Login;
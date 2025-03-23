const Login = () => {
    return <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="card col-6 mt-5" id="registration-page">
                    <div className="card-body">
                        <h2 class="card-title">Login to Your Account</h2>
                        <form>
                            <div class="mb-3">
                                <label for="login-username" class="form-label">Username</label>
                                <input type="text" class="form-control" id="login-username" required=""></input>
                            </div>
                            <div class="mb-3">
                                <label for="login-password" class="form-label">Password</label>
                                <input type="password" class="form-control" id="login-password" required=""></input>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="remember-me"></input>
                                <label class="form-check-label" for="remember-me">Remember me</label>
                            </div>
                            <button type="submit" class="btn btn-primary w-100 mb-3">Login</button>
                            <p class="text-center">Don't have an account? <a href="#" onclick="showRegistrationPage()">Register here</a></p>
                        </form>
                    </div>
                </div>
            </div>
    
    }
    
    export default Login;
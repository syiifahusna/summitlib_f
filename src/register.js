const Register = () => {
return <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card col-6 mt-5" id="registration-page">
                <div className="card-body">
                    <h2 class="card-title">Create an Account</h2>
                    <form>
                        <div className="mb-3">
                            <label for="username" className="form-label">Username</label>
                            <input type="text" className="form-control" id="username" required=""></input>
                        </div>
                        <div className="mb-3">
                            <label for="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" required=""></input>
                        </div>
                        <div className="mb-3">
                            <label for="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" required=""></input>
                        </div>
                        <div className="mb-3">
                            <label for="confirm-password" className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" id="confirm-password" required=""></input>
                        </div>
                        <button type="submit" className="btn btn-primary w-100 mb-3">Register</button>
                        <p className="text-center">Already have an account?<a>Login here</a></p>
                    </form>
                </div>
            </div>
        </div>

}

export default Register;
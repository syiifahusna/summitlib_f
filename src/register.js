import React, { useState } from "react";

const Register = () => {

    const [formData, setFormData] = useState({
        email: "",
        username: "",
        password: "",
        confirmPassword: ""
    });
    
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        const requestBody = {
            email: formData.email,
            username: formData.username,
            password: formData.password,
        };

        try {
            const response = await fetch("http://127.0.0.1:8080/summitlib/api/public/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(requestBody),
            });

            const data = await response.json();
            
            if (response.status === 201) {
                setSuccess(data.message);
                setFormData({ email: "", username: "", password: "", confirmPassword: "" });
            } else {
                if (response.status === 409) {
                    setError(data.data);
                } else if (response.status === 400) {
                    setError(Object.values(data.data).join("\n"));
                } else {
                    setError("An unexpected error occurred");
                }
            }
        } catch (error) {
            setError("Failed to connect to the server");
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center container">
            <div className="card col-12 col-sm-10 col-md-8 col-lg-6 mt-5" id="registration-page">
                <div className="card-body">
                    <h2 className="card-header text-center">Create an Account</h2>
                    <div className="card-body">
                        {error && <div className="alert alert-danger" role="alert">{error}</div>}
                        {success && <div className="alert alert-success" role="alert">{success}</div>}
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input type="text" className="form-control" id="username" value={formData.username} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" value={formData.password} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" id="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                            </div>
                            <button type="submit" className="btn btn-primary w-100 mb-3">Register</button>
                            <p className="text-center">Already have an account? <a href="/login">Login here</a></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Register;
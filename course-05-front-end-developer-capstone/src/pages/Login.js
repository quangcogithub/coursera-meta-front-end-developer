function Login() {
    return (
        <section>
            <form className="login-form">
                <div className="form-group">
                    <label className="form-label" htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        className="form-input"
                    />
                    <span className="form-message"></span>
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="form-input"
                    />
                    <span className="form-message"></span>
                </div>
                <div>
                    <input
                        type="submit"
                        className="submit-button"
                        value="Login"
                    />
                </div>
            </form>
        </section>
    )
}

export default Login;
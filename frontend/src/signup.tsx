
import { Link } from "react-router-dom";
import "./app.css"

export default function Signup() {
    /* avoid refreshing */
    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return(
        <div className="login-container">
            <div className="login-card">
                <h2>Join us today and explore products!</h2>
                <form className="login-form" onSubmit={handleSignup}>
                    <input type="text"
                           placeholder="Username"
                           required />

                    <input type="email"
                           placeholder="Email"
                           required />

                    <input type="password"
                           placeholder="Password"
                           required />

                    <button type="submit">Sign Up</button>
                </form>
                <p className="register">
                    Already have an account? <Link to= "/login" >Login here!</Link>
                </p>

                <p className= "register"
                   style={{marginTop: "10px"}}>
                    <Link to= "/catalog" >use as a guest</Link>
                </p>

            </div>
            <div className= "herotext" >
                <h1>
                    Epic finds near you
                </h1>

                <p>
                    Discover millions of products at unbeatable prices.
                </p>
            </div>
        </div>
    )
}
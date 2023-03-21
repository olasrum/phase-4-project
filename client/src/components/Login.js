import {useState} from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

function Login({onLogin}) {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <div className="login">
            <h1 id="login-header">For the love of Birds</h1>
            {showLogin ? (
            <>
                <LoginForm onLogin={onLogin} />
                 <p id="dont-account">
                    Don't have an account? &nbsp;
                    <button id="signup-button" onClick={() => setShowLogin(false)}>
                    Sign Up
                    </button>
                </p>
            </>
         ) : (
            <>
            <SignUpForm onLogin={onLogin} />
            <p id="have-account">
                Already have an account? &nbsp;
                <button id="login-button2" onClick={() => setShowLogin(true)}>
                Log In
                </button>
            </p>
            </>
            )}
        </div>
    );
}

export default Login;
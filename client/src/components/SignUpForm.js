import React, { useState } from "react";

function SignUpForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
        <label id="signup-username" htmlFor="username">Username</label>
        <input
          type="text"
          id="input-username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label id="signup-password" htmlFor="password">Password</label>
        <input
          type="password"
          id="input-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <label id="signup-confirm-password" htmlFor="password">Confirm password</label>
        <input
          type="password"
          id="input-password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
        <button id="signup-button2" type="submit">
          {isLoading ? "Loading..." : "Sign Up"}
        </button>
        {/* {errors.map((err) => (
          <p key={err}>{err}</p>
        ))} */}
    </form>
  );
}

export default SignUpForm;
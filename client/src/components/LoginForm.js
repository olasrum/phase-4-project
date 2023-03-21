import React, { useState } from "react";


function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
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
        <label id="login-username" htmlFor="username">Username</label>
        <input
          type="text"
          id="input-username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label id ="login-password" htmlFor="password">Password</label>
        <input
          type="password"
          id="input-password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button id="login-button" type="submit">
          {isLoading ? "Loading..." : "Log In"}
        </button>
      {/* <div>
        {errors.map((err) => (
          <p key={err}>{err}</p>
        ))}
      </div> */}
    </form>
  );
}

export default LoginForm;
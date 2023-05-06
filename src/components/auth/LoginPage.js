import { useState } from "react";
import Button from "../shared/Button";
import { login } from "./service";
import "./LoginPage.css";

function LoginPage({ onLogin }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    await login(credentials);

    onLogin();
  };

  const handleChange = event => {
    setCredentials({...credentials, [event.target.name] : event.target.value})
  };

  const buttonDisabled = !credentials.email || !credentials.password;

  return (
    <div className="login-container">
      <h1 className="login-title">Log in to Nodepop</h1>
      <form onSubmit={handleSubmit}>
        <input className="login-input" type="email" name="email" onChange={handleChange} value={credentials.email} placeholder="Email" />
        <input className="login-input" type="password" name="password" onChange={handleChange} value={credentials.password} placeholder="Password" />
        <Button type="submit" variant="primary" disabled={buttonDisabled} className="login-button">
          Log in
        </Button>
      </form>
    </div>
  );
}

export default LoginPage;

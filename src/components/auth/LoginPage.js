import { useState } from "react";
import Button from "../shared/Button";
import { login } from "./service";

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
    <div>
      <h1>Log in to Nodepop</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" onChange={handleChange} value={credentials.email} />
        <input type="password" name="password" onChange={handleChange} value={credentials.password} />
        <Button type="submit" variant="primary" disabled={buttonDisabled}>
          Log in
        </Button>
      </form>
    </div>
  );
}

export default LoginPage;

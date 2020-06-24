import React from "react";
import Title from "../Title";
import LoginForm from "./LoginForm";

const Login = () => (
  <main data-testid="login-div">
    <Title value="Sign In" />
    <LoginForm />
  </main>
);
export default Login;

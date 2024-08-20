"use client"
import { login } from "@/actions";
import { useFormState } from "react-dom";
const LoginForm = () => {

  const [state, formActions] = useFormState<any,FormData>(login, undefined);
  return (
    <form action = {formActions} method="POST" className="login-form" id="login-form">
      <input
        type="text"
        placeholder="Enter your Username"
        required
        name="username"
      />
      <br />
      <input
        type="password"
        placeholder="Enter your Password"
        required
        name="password"
      />
      <br /><button className="btn">Login</button>
{state?.error && (
  <p style={{ marginTop: "10px"}}>{state.error}</p>
)}

    </form>
  );
};
export default LoginForm;

import { login } from "@/actions";
import '@/app/globals.css';
const LoginForm = () => {
  return (
    <form action={login} method="POST" className="login-form" id="login-form">
      <input
        type="text"
        placeholder="Enter your Username"
        required
        name="username"
      />
      <input
        type="password"
        placeholder="Enter your Password"
        required
        name="password"
      />
      <button>Login</button>
    </form>
  );
};
export default LoginForm;

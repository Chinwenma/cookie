import Link from "next/link";
import LogoutForm from "./logoutForm";
import { getSession } from "../actions";

const Navbar = () => {
  const session =getSession()
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/premium">Premium</Link>
      <Link href="/login">Login</Link>
      <LogoutForm/>

    </nav>
  );
};

export default Navbar;

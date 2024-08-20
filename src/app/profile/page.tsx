import { getSession } from "@/actions";
import { redirect } from "next/navigation";

const ProfilePage = async () => {
  const session = await getSession();

  if (!session.isLoggedIn) {
    return (
redirect("/login")
        
      
    );
    
  }

  return (
    <div className="profile">
      <h1>Hello user</h1>
      <p>
        welcome,
        <b>{session.username}</b>
      </p>
      <span>You are a <b>{session.isPro ? "Pro" : "Free"} user</b></span>
    </div>
  );
};
export default ProfilePage;

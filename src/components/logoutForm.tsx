import { logout } from "@/actions"

const LogoutForm = () => {
  return (
    <div className="logout-form">
      <form  action={logout}>
        <button>Logout</button>
      </form>
    </div>
  )
}

export default LogoutForm
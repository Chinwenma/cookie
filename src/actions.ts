import { getIronSession } from "iron-session"
import { sessionOptions,sessionData } from "./libs"
import { cookies } from "next/headers"

export  const getSession = async () => {
    "use server";
    const session  = await getIronSession<sessionData> (cookies(), sessionOptions);
    return session;
    
}
export  const login = async () => {
    "use server"

}
export  const logout = async () => {
    "use server"

}
"use server";
import { getIronSession } from "iron-session";
import { sessionOptions, SessionData, defaultSession } from "@/libs";
import { cookies } from "next/headers";
import { Session } from "inspector";
import { redirect } from "next/navigation";
let username = "Chinwenma";
let isPro = true;

export const getSession = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);
  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }

  return session;
};

export const login = async (formData: FormData) => {
  const session = await getSession();
  const formUsername = formData.get("username") as string;
  const formPassword = formData.get("password") as string;
  //TODO: check if user exists and password is correct
  // const user = await db.getUser({username,password})
  if (formUsername !== username ) 
  {
   return{ error: "Invalid username or password" }
  }
  session.userId = "1";
  session.username = formUsername;
  session.isPro = isPro;
  session.isLoggedIn =true;

  await session.save()
  redirect("/")
  };
  export const logout = async () => {
    
  };
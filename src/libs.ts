import { SessionOptions } from "iron-session";

export interface sessionData{
    userId?: string;
    username?: string;
    isPro?: Boolean;
    avatar?: string;
 
}
export const sessionOptions: SessionOptions = {
   password:process.env.SECRET_KEY!,
   cookieName:"matrix-session",
   cookieOptions:{
    httpOnly:true,
    secure: process.env.NODE_ENV === "production"
   }
}
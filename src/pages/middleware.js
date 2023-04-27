import { NextResponse } from "next/server";
import { verify } from "jsonwebtoken";

const secret = process.env.JWT_SECRET;

export default function middleware(req) {
  const {cookies} = req;

  const jwt = cookies.OursiteJWT;

  const url = req.url;

  if (url.inclues('/users')) {
    if (jwt === undefined) {
      return NextResponse.redirect('/login');
    }

    try {
      const user = verify(jwt, secret);
      console.log(user)
      return NextResponse.next();
    } catch (error) {
      return NextResponse.redirect('/login');
    }
  }

  return NextResponse.next();
}
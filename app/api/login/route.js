import { NextResponse } from "next/server";
import { createToken } from "@/lib/auth";

export async function POST(request) {
  const { email, password } = await request.json();

  // Demo user
  if (email !== "admin@gmail.com" || password !== "123456") {
    return NextResponse.json(
      { message: "Invalid email or password" },
      { status: 401 }
    );
  }

  const token = await createToken({
    id: 1,
    email,
  });

  const response = NextResponse.json({
    message: "Login successful",
  });

  response.cookies.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60,
    path: "/",
  });

  return response;
}
"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  const handleLogin = async () => {
    await signIn("github", {
      callbackUrl: "/dashboard",
    });
  };

  return (
    <div>
      <h1>Login</h1>

      <button onClick={handleLogin}>
        Login with GitHub
      </button>
    </div>
  );
}
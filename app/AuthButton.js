"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthButton() {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(null);

  useEffect(() => {
    const cookies = document.cookie.split("; ");

    const isLoggedIn = cookies.some(
      (cookie) =>
        cookie.split("=")[0] === "loggedIn" &&
        cookie.split("=")[1] === "true"
    );

    setLoggedIn(isLoggedIn);
  }, []);

  const handleLogout = () => {
    document.cookie =
      "loggedIn=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";

    setLoggedIn(false);
    router.push("/login");
    router.refresh();
  };

  if (loggedIn === null) {
    return null;
  }

  if (loggedIn) {
    return (
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    );
  }

  return (
    <button
      className="login-btn"
      onClick={() => router.push("/login")}
    >
      Login
    </button>
  );
}
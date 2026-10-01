"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthButton() {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(document.cookie.includes("loggedIn=true"));
  }, []);

  const handleLogout = () => {
    document.cookie =
      "loggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    setLoggedIn(false);
    router.push("/login");
    router.refresh();
  };

  if (loggedIn) {
    return <button onClick={handleLogout}>Logout</button>;
  }

  return (
    <button onClick={() => router.push("/login")}>
      Login
    </button>
  );
}
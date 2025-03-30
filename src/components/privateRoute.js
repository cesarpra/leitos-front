"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const privateRoute = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/rotas/login");
    }
  }, [router]);

  return <>{children}</>;
};

export default privateRoute;

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const withPrivateRoute = (Component) => {
  const ProtectedRoute = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem("token");

      if (!token) {
        // redireciona para login
        router.replace("/rotas/login");
      } else {
        setIsLoading(false);
      }
    }, [router]);

    if (isLoading) {
      // Loading
      return <div>Carregando...</div>;
    }

    return <Component {...props} />;
  };

  return ProtectedRoute;
};

export default withPrivateRoute;

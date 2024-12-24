"use client";

import { useAuthStore } from "@/store/use-auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const withAuth = <P extends object>(Component: React.ComponentType<P>) => {
  return function AuthenticatedComponent(props: P) {
    const { isLoggedIn, checkAuth } = useAuthStore();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true); // Add a loading state

    useEffect(() => {
      const authenticate = async () => {
        const authenticated = await checkAuth();
        if (!authenticated) {
          router.push("/auth/login"); // Redirect unauthenticated users
        }
        setIsLoading(false); // Authentication complete
      };

      authenticate();
    }, [checkAuth, router]);

    if (isLoading) {
      return <p>Loading...</p>; // Loading UI while checking auth
    }

    if (!isLoggedIn()) {
      return null; // Prevent rendering unauthorized content
    }

    return <Component {...props} />;
  };
};

export default withAuth;

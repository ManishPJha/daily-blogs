import React, { useEffect, useState } from "react";
import { withRouter, NextRouter } from "next/router";

import { isClient } from "@/utils/checkEnvironments";

const isClientWindow = isClient();

const Page = ({
  children,
  router,
  ...rest
}: {
  children: React.ReactNode;
  router: NextRouter;
}) => {
  const [token, setToken] = useState(
    isClientWindow ? window.localStorage.getItem("token") : null
  );

  const checkIsAuthenticated = () => {
    if (!token) return false;
    return true;
  };

  const PUBLIC_ROUTES = ["login", "register"];

  useEffect(() => {
    const isAuthenticated = checkIsAuthenticated();
    const isPublicRoute = PUBLIC_ROUTES.some((routes) =>
      router.route.includes(routes)
    );

    if (!isAuthenticated && !isPublicRoute) router.push("/login");
  }, []);

  return <>{children}</>;
};

export default withRouter(Page);

// ** React Imports
import { useEffect } from "react";

// ** Next Import
import { useRouter } from "next/router";

// ** Hooks Import
import { useAuth } from "hooks/useAuth";
import Payment from "pages/payment";

const AuthGuard = (props) => {
  const { children, fallback } = props;
  const auth = useAuth();
  const router = useRouter();
  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (auth.user === null && !window.localStorage.getItem("userData")) {
        if (router.asPath !== "/") {
          router.replace("/heroSite");
        }
        if (router.asPath == "/payment") {
          router.replace("/payment");
        } else {
          router.replace("/heroSite");
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.route]
  );
  // if (auth.loading || auth.user === null) {
  //   return fallback
  // }
  if (auth.loading) {
    return fallback;
  }

  return <>{children}</>;
};

export default AuthGuard;

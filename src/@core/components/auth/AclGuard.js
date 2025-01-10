// ** React Imports
import { useEffect } from "react";

// ** Next Import
import { useRouter } from "next/router";

// ** Context Imports
import { AbilityContext } from "layouts/components/acl/Can";

// ** Config Import
import { buildAbilityFor } from "configs/acl";

// ** Component Import
import NotAuthorized from "pages/401";
import HeroSite from "pages/heroSite";
import Spinner from "@core/components/spinner";
import BlankLayout from "@core/layouts/BlankLayout";

// ** Hooks
import { useAuth } from "hooks/useAuth";

// ** Util Import
import getHomeRoute from "layouts/components/acl/getHomeRoute";
import Payment from "pages/payment";

const AclGuard = (props) => {
  // ** Props
  const {
    aclAbilities,
    children,
    guestGuard = false,
    authGuard = true,
  } = props;

  // ** Hooks
  const auth = useAuth();
  const router = useRouter();

  // ** Vars
  let ability;
  useEffect(() => {
    if (auth.user && auth.user.role && !guestGuard && router.route === "/") {
      const homeRoute = getHomeRoute(auth.user.role);
      router.replace(homeRoute);
    }
  }, [auth.user, guestGuard, router]);

  // User is logged in, build ability for the user based on his role
  if (auth.user && !ability) {
    ability = buildAbilityFor(auth.user.role, aclAbilities.subject);
    if (router.route === "/") {
      return <Spinner />;
    }
  }

  // if user not login send to heroSite
  // if (guestGuard || router.route === '/404' || router.route === '/500' || !authGuard) {
  //   // If user is logged in and his ability is built
  //   if (auth.user && ability) {
  //     return <AbilityContext.Provider value={ability}>{children}</AbilityContext.Provider>
  //   } else {
  //     // If user is not logged in (render pages like login, register etc..)
  //     return <>{children}</>
  //   }
  // }

  // If guest guard or no guard is true or any error page
  if (
    guestGuard ||
    router.route === "/404" ||
    router.route === "/500" ||
    !authGuard
  ) {
    // If user is logged in and his ability is built
    if (auth.user && ability) {
      return (
        <AbilityContext.Provider value={ability}>
          {children}
        </AbilityContext.Provider>
      );
    } else {
      // If user is not logged in (render pages like login, register etc..)
      return <>{children}</>;
    }
  }

  // Check the access of current user and render pages
  if (
    ability &&
    auth.user &&
    ability.can(aclAbilities.action, aclAbilities.subject)
  ) {
    if (router.route === "/") {
      return <Spinner />;
    }

    return (
      <AbilityContext.Provider value={ability}>
        {children}
      </AbilityContext.Provider>
    );
  }

  // Render Not Authorized component if the current user has limited access
  console.log("HeroSite-->");
  if (router.route == '/payment') {
    console.log('payment page rendered')
    return <Payment/>
  }
  return <HeroSite />;
};

export default AclGuard;

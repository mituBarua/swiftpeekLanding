// ** React Imports
import { useEffect } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Hooks Import
import { useAuth } from 'hooks/useAuth'
import Payment from 'pages/payment'

const GuestGuard = props => {
  const { children, fallback } = props
  const auth = useAuth()
  const router = useRouter()
  useEffect(() => {
   console.log("Guest guard loaded")
    if (!router.isReady) {
      return
    }
    if (router.route == '/payment'){
     console.log("payment route");
    }
    if (window.localStorage.getItem('userData')) {
      router.replace('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.route])
  if (auth.loading || (!auth.loading && auth.user !== null)) {
    return fallback
  }

  return <>{children}</>
}

export default GuestGuard

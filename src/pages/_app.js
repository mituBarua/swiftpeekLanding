// dashboard

// ** Next Imports
import Head from 'next/head'
import { Router } from 'next/router'





// ** Loader Import
import NProgress from 'nprogress'

// ** Emotion Imports
import { CacheProvider } from '@emotion/react'

// ** Config Imports

import { defaultACLObj } from 'configs/acl'
import themeConfig from 'configs/themeConfig'

// ** Fake-DB Import
import '@fake-db'

// ** Third Party Import
import { Toaster } from 'react-hot-toast'

// ** Component Imports
import UserLayout from 'layouts/UserLayout'
import AclGuard from '@core/components/auth/AclGuard'
import ThemeComponent from '@core/theme/ThemeComponent'
import AuthGuard from '@core/components/auth/AuthGuard'
import GuestGuard from '@core/components/auth/GuestGuard'

// ** Spinner Import
import Spinner from '@core/components/spinner'

// ** Contexts
import { AuthProvider } from 'context/AuthContext'
import { SettingsConsumer, SettingsProvider } from '@core/context/settingsContext'

// ** Styled Components
import ReactHotToast from '@core/styles/libs/react-hot-toast'

// ** Utils Imports
import { createEmotionCache } from '@core/utils/create-emotion-cache'

// ** Prismjs Styles
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'

// ** React Perfect Scrollbar Style
import 'react-perfect-scrollbar/dist/css/styles.css'
import 'iconify-bundle/icons-bundle-react'

// ** Global css styles
import 'styles/globals.css'

const clientSideEmotionCache = createEmotionCache()

// ** Pace Loader
if (themeConfig.routingLoader) {
  Router.events.on('routeChangeStart', () => {
    NProgress.start()
  })
  Router.events.on('routeChangeError', () => {
    NProgress.done()
  })
  Router.events.on('routeChangeComplete', () => {
    NProgress.done()
  })
 
}

const Guard = ({ children, authGuard, guestGuard }) => {

  
  // if (!guestGuard && authGuard){
  //   return children
  // }
  if (guestGuard) {
    
    return <GuestGuard fallback={<Spinner />}>{children}</GuestGuard>
  } else if (!guestGuard && !authGuard) {
    return <>{children}</>
  } else {
    return <AuthGuard fallback={<Spinner />}>{children}</AuthGuard>
  }
}

// dashboard
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { Modal } from '@redq/reuse-modal';
import { store } from 'store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@redq/reuse-modal/es/index.css';
import 'common/assets/css/flaticon.css';
// import '../containers/CryptoModern/CountDown/timer.css';
import 'common/assets/css/icon-example-page.css';
// swiper bundle styles

import 'swiper/css/bundle';
import 'common/assets/css/react-slick.css';
import 'common/assets/css/rc-collapse.css';
import 'rc-collapse/assets/index.css';
import 'common/assets/css/rc-drawer.css';
const persistor = persistStore(store)
console.log('store', store)
export default function CustomApp(props) {


  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
// console.log(Component.authGuard,'component')
  // Variables
  const contentHeightFixed = Component.contentHeightFixed ?? false

  const getLayout =
    Component.getLayout ?? (page => <UserLayout contentHeightFixed={contentHeightFixed}>{page}</UserLayout>)
  const setConfig = Component.setConfig ?? undefined
  const authGuard = Component.authGuard ?? true
  const guestGuard = Component.guestGuard ?? false
  const aclAbilities = Component.acl ?? defaultACLObj

  return (
    <>
      <Modal>
        <Provider store={ store }>
          <PersistGate loading={null} persistor={persistor}>
          {/* dashboard */}

          <CacheProvider value={emotionCache}>
        

        <AuthProvider>
          <SettingsProvider {...(setConfig ? { pageSettings: setConfig() } : {})}>
            <SettingsConsumer>
              {({ settings }) => {
                return (
                  <ThemeComponent settings={settings}>
                    <Guard authGuard={authGuard} guestGuard={guestGuard}>
                      <AclGuard aclAbilities={aclAbilities} guestGuard={guestGuard} authGuard={authGuard}>
                        {getLayout(<Component {...pageProps} />)}
                      </AclGuard>
                    </Guard>
                    <ReactHotToast>
                      <Toaster position={settings.toastPosition} toastOptions={{ className: 'react-hot-toast' }} />
                    </ReactHotToast>
                  </ThemeComponent>
                )
              }}
            </SettingsConsumer>
          </SettingsProvider>
        </AuthProvider>
      </CacheProvider>


          {/* dashboard */}

          </PersistGate>
        </Provider>
      </Modal>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        hideProgressBar
        toastClassName=" bg-gray-100"        
      />
    </>
  );
}

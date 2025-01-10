import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import popupReducer from './popup/popup.reducer';
import { api } from './api';

// ** Reducers
import chat from 'store/apps/chat'
import user from 'store/apps/user'
import email from 'store/apps/email'
import invoice from 'store/apps/invoice'
import calendar from 'store/apps/calendar'
import permissions from 'store/apps/permissions'

const rootReducer = combineReducers({
  userNow: persistReducer(
    {
      key: 'userNow',
      storage,
      version: 1,
    },
    userReducer
  ),
  popup: persistReducer(
    {
      key: 'popup',
      storage,
      version:1 
    },
    popupReducer
  ),
  user,
  chat,
  email,
  invoice,
  calendar,
  permissions,
  [api.reducerPath]: api.reducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware),
});

export * from './ssoApi'

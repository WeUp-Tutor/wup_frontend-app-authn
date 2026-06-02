import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React, { StrictMode } from 'react';

import {
  APP_INIT_ERROR, APP_READY, initialize, mergeConfig, subscribe,
} from '@edx/frontend-platform';
import { ErrorPage } from '@edx/frontend-platform/react';
import { createRoot } from 'react-dom/client';

import configuration from './config';
import messages from './i18n';
import MainApp from './MainApp';

subscribe(APP_READY, () => {
  const root = createRoot(document.getElementById('root'));

  root.render(
    <StrictMode>
      <MainApp />
    </StrictMode>,
  );
});

subscribe(APP_INIT_ERROR, (error) => {
  const root = createRoot(document.getElementById('root'));

  root.render(
    <StrictMode>
      <ErrorPage message={error.message} />
    </StrictMode>,
  );
});



const DEFAULT_LOCALE = 'fr'; // or 'en', 'ar', 'es-419', etc.
const LANGUAGE_COOKIE_NAME = 'openedx-language-preference';

// Enforce language before frontend-platform initializes i18n
document.cookie = `${LANGUAGE_COOKIE_NAME}=${DEFAULT_LOCALE}; path=/; max-age=31536000; SameSite=Lax`;

initialize({
  handlers: {
    config: () => {
      mergeConfig(configuration);
    },
  },
  messages,
});

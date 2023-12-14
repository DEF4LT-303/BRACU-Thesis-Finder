'use client';

import { ChakraProvider } from "@chakra-ui/react";
import { NextUIProvider } from '@nextui-org/react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './api/redux/store';

function ProviderWrapper({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider>
          <NextUIProvider>{children}</NextUIProvider>
        </ChakraProvider>
      </PersistGate>
    </Provider>
  );
}

export default ProviderWrapper;

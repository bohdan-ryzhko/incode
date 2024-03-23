import React from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { HeroesScreen } from './screens';
import { PersistGate } from 'redux-persist/integration/react';
import { Text } from 'react-native';

export default function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<Text>Initialize store.</Text>}
        persistor={persistor}
      >
        <HeroesScreen />
      </PersistGate>
    </Provider>
  );
}

import React from "react";
import { Container, StatusBar } from './src/styles'
import { Provider } from 'react-redux'
import { store } from './src/store'
import Navigator from './src/navigator/Navigator';

console.disableYellowBox = true;

function App() {
  return (
    <Provider store={store}>
      <Container>
        <StatusBar />
        <Navigator />
      </Container>
    </Provider>
  );
}

export default App;
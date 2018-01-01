import React, { Component } from 'react';
import { Router, Scene, Stack, Modal } from 'react-native-router-flux';
import { observer } from 'mobx-react/native';
import { Landing, SignIn } from './Onboard';
import { Home } from './Home';

const App = () => (
  <Router wrapBy={observer}>
    <Modal>
      <Stack key="root">
        <Scene key="Landing" component={Landing} hideNavBar />
        <Scene key="Home" component={Home} hideNavBar />
      </Stack>
      <Scene key="SignIn" component={SignIn} hideNavBar />
    </Modal>
  </Router>
);

export default App;

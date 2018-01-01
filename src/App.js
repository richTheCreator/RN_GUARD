import React, { Component } from 'react';
import { Router, Scene, Stack, Modal } from 'react-native-router-flux';
import { observer } from 'mobx-react/native';
import { Landing, SignIn } from './Onboard';

const App = () => (
  <Router wrapBy={observer}>
    <Modal>
      <Stack key="root">
        <Scene key="Landing" component={Landing} hideNavBar />
      </Stack>
      <Scene key="SignIn" component={SignIn} hideNavBar />
    </Modal>
  </Router>
);

export default App;

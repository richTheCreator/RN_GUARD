import React, { Component } from 'react';
import { Router, Scene, Stack, Modal } from 'react-native-router-flux';
import { observer } from 'mobx-react/native';
import { Landing, SignIn, SignUp } from './Onboard';
import { Home } from './Home';
import { Launch } from './Launch';
import UserStore from './stores/userStore';

const App = () => (
  <Router wrapBy={observer}>
    <Modal>
      <Scene key="root">
        <Scene key="Launch" initial component={Launch} hideNavBar on={UserStore.load} success="App" failure="onBoard" />
        <Scene key="onBoard" hideNavBar>
          <Scene key="Landing" panHandlers={null} initial component={Landing} />
        </Scene>
        <Scene key="App" hideNavBar>
          <Scene key="Home" panHandlers={null} component={Home} />
        </Scene>
      </Scene>
      {/*  Modals have to be outside of main stack */}
      <Scene
        key="SignIn"
        component={SignIn}
        hideNavBar
        onSignIn="doAuth"
      />
      <Scene
        key="SignUp"
        component={SignUp}
        hideNavBar
        onSignUp="doSignUp"
      />
    </Modal>
  </Router>
);

export default App;

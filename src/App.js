import React from 'react';
import { View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Router, Scene, Modal } from 'react-native-router-flux';
import { observer } from 'mobx-react/native';
import { Colors } from '@theme/';
import { Landing, SignIn, SignUp } from './Onboard';
import { Home } from './Home';
import { Secret } from './Secret';
import { Launch } from './Launch';
import UserStore from './stores/userStore';

const HomeIcon = ({ focused }) =>
  (<Icon
    name="home"
    size={30}
    style={[{ opacity: focused ? 1 : 0.7 }, { alignSelf: 'center' }]}
    color={Colors.Green}
  />);

const ShieldIcon = ({ focused }) =>
  (<Icon
    name="shield"
    size={30}
    style={[{ opacity: focused ? 1 : 0.7 }, { alignSelf: 'center' }]}
    color={Colors.Orange}
  />);


const App = () => (
  <Router wrapBy={observer}>
    <Modal>
      <Scene key="root">
        <Scene key="Launch" initial component={Launch} hideNavBar on={UserStore.load} success="App" failure="onBoard" />
        <Scene key="onBoard" hideNavBar>
          <Scene key="Landing" panHandlers={null} initial component={Landing} />
        </Scene>
        <Scene key="App" tabs hideNavBar showLabel={false} tabBarStyle={{ backgroundColor: Colors.Dark }} >
          <Scene
            key="Home"
            icon={HomeIcon}
          >
            <Scene
              key="xHome"
              initial
              panHandlers={null}
              hideNavBar
              component={Home}
            />
          </Scene>
          <Scene
            key="Secret"
            // title="Secret"
            showLabel={false}
            icon={ShieldIcon}
          >
            <Scene
              key="xSecret"
              initial
              panHandlers={null}
              hideNavBar
              component={Secret}
              // title="Secret"
            />
          </Scene>
        </Scene>
      </Scene>
      {/*  Modals have to be outside of main stack */}
      <Scene
        key="SignIn"
        component={SignIn}
        hideNavBar
      />
      <Scene
        key="SignUp"
        component={SignUp}
        hideNavBar
      />
    </Modal>
  </Router>
);

export default App;

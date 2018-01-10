import React from 'react';
import { Router, Scene, Modal } from 'react-native-router-flux';
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
        <Scene key="App" tabs hideNavBar>
          {/* <Scene key="Home" panHandlers={null} component={Home} /> */}
          <Scene
            key="Home"
            title="Home"
            // icon={HomeIcon}
          >
            <Scene
              key="xHome"
              initial
              panHandlers={null}
              hideNavBar
              component={Home}
              title="Home"
            />
          </Scene>
          <Scene
            key="Bar"
            title="Bar"
            // icon={HomeIcon}
          >
            <Scene
              key="tab2"
              initial
              panHandlers={null}
              hideNavBar
              component={Home}
              title="Home"
            />
          </Scene>
          <Scene
            key="Foo"
            title="Foo"
            // icon={HomeIcon}
          >
            <Scene
              key="tab3"
              initial
              panHandlers={null}
              hideNavBar
              component={Home}
              title="Home"
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

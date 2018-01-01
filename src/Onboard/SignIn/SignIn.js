import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';
import { observer, inject } from 'mobx-react/native';
import FBSDK from 'react-native-fbsdk';
import Styles from './Styles';
import UserStore from '../../stores/userStore';

const { LoginManager } = FBSDK;
const window = Dimensions.get('window');

@observer
class SignIn extends Component {
  componentDidMount() {
    console.warn('userStore', UserStore);
  }

  submitLogin = () => {
    LoginManager.logInWithReadPermissions(['public_profile']).then(
      (result) => {
        if (result.isCancelled) {
          alert('Login cancelled');
        } else {
          alert(`Login success with permissions: ${
            result.grantedPermissions.toString()}`);
        }
      },
      (error) => {
        alert(`Login fail with error: ${error}`);
      }
    );
  }

  render() {
    return (
      <Grid style={Styles.container}>
        <Row
          style={[Styles.wrapper, { width: window.width, height: window.height }]}
        >
          <Col style={{ alignItems: 'center' }}>
            <TouchableWithoutFeedback
              onPress={Actions.pop}
              styles={{ marginBottom: 40 }}
            >
              <Text style={Styles.fonts.tagline}>
                  Close Modal.
              </Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={this.submitLogin}
            >
              <Text style={[Styles.fonts.tagline, { color: '#4392F1' }]}>
                  Sign In with Facebook.
              </Text>
            </TouchableWithoutFeedback>
            <Text style={Styles.fonts.tagline}>
              {UserStore.authorized ? 'true' : 'false'}
            </Text>
          </Col>
          <View style={Styles.triangle} />
        </Row>
      </Grid>

    );
  }
}

export default SignIn;

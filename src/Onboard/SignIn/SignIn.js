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
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import Styles from './Styles';
import UserStore from '../../stores/userStore';


const window = Dimensions.get('window');

@observer class SignIn extends Component {
  componentWillUpdate() {
    // waiting for access token to be set
    if (UserStore.authorized) {
      Actions.Home();
    }
  }

  fbLogin = () => {
    LoginManager.logInWithReadPermissions(['public_profile']).then(
      (result) => {
        if (result.isCancelled) {
          alert('Login cancelled');
        } else {
          AccessToken.getCurrentAccessToken().then((data) => {
            UserStore.signIn(data.accessToken);

            // alert(`FB_TOKEN: ${data.accessToken}
            //   FB_ID:${data.userID}`);
          });
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
              onPress={this.fbLogin}
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

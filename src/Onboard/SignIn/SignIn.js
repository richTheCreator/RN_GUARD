import React, { Component } from 'react';
import {
  Text,
  Image,
} from 'react-native';
import { Col, Row } from 'react-native-easy-grid';
import { observer } from 'mobx-react/native';
import { Modal, Button } from '@common';
import { Colors } from '@theme/';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import Logo from '../../assets/images/KEY_SHIELD.png';
import Styles from './Styles';
import UserStore from '../../stores/userStore';

@observer class SignIn extends Component {
  fbLogin = () => {
    LoginManager.logInWithReadPermissions(['public_profile']).then(
      (result) => {
        if (result.isCancelled) {
          alert('Login cancelled');
        } else {
          AccessToken.getCurrentAccessToken().then((data) => {
            UserStore.signIn(data.accessToken);
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
      <Modal>
        <Row
          style={Styles.ui.wrapper}
        >
          <Col style={{ alignItems: 'center' }}>
            <Image
              style={Styles.ui.lgIcon}
              source={Logo}
              imageResizeMode="contain"
            />
            <Text style={Styles.fonts.title}>
              SIGN IN
            </Text>
            <Button BGcolor={Colors.FBblue} onPress={this.fbLogin}>
              W/ FACEBOOK
            </Button>
          </Col>
        </Row>
      </Modal>
    );
  }
}

export default SignIn;

import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  Image
} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';
import { observer } from 'mobx-react/native';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import Logo from '../../assets/images/KEY_SHIELD.png';
import { Button } from '../../components/Common';
import Styles from '../Landing/Styles';
import UserStore from '../../stores/userStore';
import Colors from '../../assets/Globals';
import Icon from 'react-native-vector-icons/Feather';

const window = Dimensions.get('window');

@observer class SignIn extends Component {
  componentWillUpdate() {
    // waiting for access token to be set
    if (UserStore.authorized) {
      Actions.reset();
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
        <Row style={Styles.modalHeader}>
          <Icon
            name="x"
            color="#333845"
            size={40}
            onPress={Actions.pop}
          />
        </Row>
        <Row
          style={[Styles.wrapper, { width: window.width, height: window.height }]}
        >
          <Col style={{ alignItems: 'center' }}>
            <Image
              style={{ height: 220, width: 200, marginBottom: 25 }}
              source={Logo}
              imageResizeMode="contain"
            />
            <Text style={Styles.fonts.appName}>
            SIGN IN
            </Text>
            <Button BGcolor="#3b5998" onPress={this.fbLogin}>
              W/ FACEBOOK
            </Button>
            <Text style={Styles.fonts.appName}>
              {UserStore.authorized}
            </Text>
          </Col>
        </Row>
      </Grid>

    );
  }
}

export default SignIn;

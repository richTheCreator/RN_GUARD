import React, { Component } from 'react';
import {
  Text,
  Dimensions,
  AsyncStorage,
  ActivityIndicator
} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { create } from 'mobx-persist';
import { observer } from 'mobx-react/native';
import UserStore from '../stores/userStore';
import Styles from './Styles';
import { Colors } from '@theme/';
import { Avatar, Button } from '../components/Common';

const window = Dimensions.get('window');
const hydrate = create({ storage: AsyncStorage });
hydrate('userData', UserStore);
// hydrate('authorized', UserStore);

@observer class Home extends Component {
 handleSignOut = () => {
   UserStore.logout();
 }

 handleApiCall = () => {
   UserStore.callSecretRoute();
 }

 render() {
   return (
     <Grid style={Styles.container}>
       <Row
         style={[Styles.wrapper, { width: window.width, height: window.height }]}
       >
         <Col style={Styles.alignCenter}>
           {UserStore.userData !== undefined ?
             <Col style={[Styles.alignCenter, { marginBottom: 50 }]}>
               <Avatar source={UserStore.userData.avatar} size={100} />
               <Text style={Styles.fonts.tagline}>
                 Welcome {'\n'} {UserStore.userData.fullname}!
               </Text>
             </Col> :
             <Col style={[Styles.alignCenter, { marginBottom: 50 }]}>
               <ActivityIndicator />
             </Col>
           }
           <Button
             BGcolor={Colors.Green}
             onPress={this.handleSignOut}
           >
             Sign Out
           </Button>
           <Button
             BGcolor={Colors.Purple}
             onPress={this.handleApiCall}
           >
             Super Secret!
           </Button>
         </Col>
       </Row>
     </Grid>

   );
 }
}

export default Home;

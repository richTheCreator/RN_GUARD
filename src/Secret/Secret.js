import React, { Component } from 'react';
import {
  Image,
  Dimensions,
  AsyncStorage,
  SafeAreaView
} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { create } from 'mobx-persist';
import { observer } from 'mobx-react/native';
import { Colors } from '@theme/';
import giphy from './../assets/images/secret.gif';
import UserStore from '../stores/userStore';
import Styles from './Styles';
import { Avatar, Button } from '../components/Common';

const window = Dimensions.get('window');
const hydrate = create({ storage: AsyncStorage });
hydrate('userData', UserStore);

@observer class Secret extends Component {
 handleApiCall = () => {
   UserStore.callSecretRoute();
 }

 render() {
   return (
     <Grid style={Styles.container}>
       <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
         <Row
           style={Styles.ui.wrapper}
         >
           <Col style={Styles.ui.alignCenter}>
             <Image
               style={Styles.ui.giphy}
               source={giphy}
               imageResizeMode="contain"
             />
             <Button
               BGcolor={Colors.Orange}
               onPress={this.handleApiCall}
             >
               Super Secret!
             </Button>
           </Col>
         </Row>
       </SafeAreaView>
     </Grid>
   );
 }
}

export default Secret;

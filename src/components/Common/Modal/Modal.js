import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Row, Grid } from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/Feather';
import { Actions } from 'react-native-router-flux';
import Styles from './Styles';

const Modal = (props) => {
  const {
    children, onPress
  } = props;

  return (
    <Grid style={Styles.container}>
      <SafeAreaView style={Styles.ui.safeArea}>
        <StatusBar
          barStyle="dark-content"
        />
        <Row style={Styles.ui.header}>
          <Icon
            name="x"
            color="#333845"
            size={40}
            onPress={onPress || Actions.pop}
          />
        </Row>
        { children }
      </SafeAreaView>
    </Grid>
  );
};

export default Modal;

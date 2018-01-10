import { Dimensions } from 'react-native';
import { Colors, Fonts } from '@theme/';

const window = Dimensions.get('window');

const body = {
  ...Fonts.body,
  textAlign: 'center',
  marginTop: 40
};

const btn = {
  ...Fonts.btn,
  paddingRight: 16,
  textAlign: 'right'
};

const Styles = {
  ui: {
    wrapper: {
      alignItems: 'center',
      backgroundColor: Colors.white,
      justifyContent: 'center',
      width: window.width
    },
    container: {
      flex: 1
    },
    alignCenter: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: -1
    },
    giphy: {
      flex: -1,
      height: 220,
      // width: 200,
      marginBottom: 25
    }
  },
  fonts: {
    body,
    btn
  }
};

export default Styles;

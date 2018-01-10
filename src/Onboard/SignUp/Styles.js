import { Dimensions } from 'react-native';
import { Colors, Fonts } from '@theme/';

const window = Dimensions.get('window');

const title = {
  ...Fonts.title
};

const btn = {
  ...Fonts.btn,
  paddingRight: 16,
  textAlign: 'right'
};

const Styles = {
  ui: {
    container: {
      flex: 1
    },
    wrapper: {
      alignItems: 'center',
      backgroundColor: Colors.white,
      justifyContent: 'center',
      width: window.width,
    },
    lgIcon: {
      height: 220,
      width: 200,
      marginBottom: 25
    }
  },
  fonts: {
    title,
    btn
  }
};

export default Styles;

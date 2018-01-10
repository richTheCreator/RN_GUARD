import { Dimensions } from 'react-native';
import { Colors, Fonts } from '@theme/';

const window = Dimensions.get('window');

const title = {
  ...Fonts.title,
  color: Colors.offWhite
};

const Styles = {
  ui: {
    container: {
      flex: 1
    },
    wrapper: {
      alignItems: 'center',
      justifyContent: 'center',
      width: window.width,
      height: window.height,
      backgroundColor: Colors.Dark
    },
    lgIcon: {
      height: 220,
      width: 200,
      marginBottom: 25
    }
  },
  fonts: {
    title
  }
};

export default Styles;

import { Dimensions } from 'react-native';
import { Colors, Fonts } from '@theme/';

const window = Dimensions.get('window');

const Styles = {
  ui: {
    container: {
      flex: 1
    },
    wrapper: {
      alignItems: 'center',
      backgroundColor: Colors.Dark,
      justifyContent: 'center',
      width: window.width
    },
    smIcon: {
      height: 156,
      width: 142,
      marginBottom: 25
    }
  },
};

export default Styles;

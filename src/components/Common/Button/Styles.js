import { Fonts, Colors } from '../../../assets/Globals';

const BTNlight = {
  ...Fonts.buttonWhite,
  paddingTop: 10,
  paddingBottom: 10,
  alignSelf: 'center',
};
const BTNaccent = {
  ...Fonts.buttonGreen,
  paddingTop: 10,
  paddingBottom: 10,
  alignSelf: 'center',
};
const Styles = {
  btnType: {
    main: {
      borderRadius: 5,
      height: 45,
      width: 150,
      alignSelf: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
    },
    ghostButton: {
      backgroundColor: Colors.offWhite,
    },
    buttonFill: {
      backgroundColor: Colors.accent,
    },
  },
  fonts: {
    BTNlight,
    BTNaccent
  }
};

export default Styles;

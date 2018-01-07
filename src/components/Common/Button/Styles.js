import { Fonts, Colors } from '@theme/';

const btn = {
  ...Fonts.btn,
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 15,
  paddingRight: 15,
  color: Colors.offWhite,
  alignSelf: 'center',
};

const Styles = {
  btnMain: {
    borderRadius: 5,
    marginBottom: 25,
    flex: -1,
    width: 300,
    height: 55,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  fonts: {
    btn,
  }
};

export default Styles;

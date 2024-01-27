const { StyleSheet } = require('react-native');
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {
  Scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import colour from '../../styles/colour';

const styles = StyleSheet.create({
  SafeAreaMain: {
    flex: 1,
    backgroundColor: 'white',
  },
  Viewmain: {
    flex: 1,
    backgroundColor: 'white',
  },
  container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconView: {
    height: moderateScale(200),
    width: moderateScale(200),
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  container3: {
    flex: 0.7,
  },
  fbGoogleAppleContainer:
  {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: moderateVerticalScale(10),
  },
  signupToContStyle: {
    fontSize: responsiveFontSize(2.5),
    color: colour.black,
  },
  signupLine: {
    width: moderateScale(90),
    borderBottomWidth: scale(1),
    borderColor: colour.theme_Colour_Grey,
  },
  FbGoogleApple: {
    height: moderateScale(55),
    width: moderateScale(55),
    backgroundColor: colour.white,
    borderWidth: scale(1),
    marginHorizontal: moderateScale(5),
  },
  termsAndPolicy: {
    color: '#E94057',
  },
  signupLineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container4: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: .20,
  }
});
export default styles;

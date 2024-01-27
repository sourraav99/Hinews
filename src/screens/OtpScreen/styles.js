const { StyleSheet } = require('react-native');
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
    
      counter: {
        fontSize: scale(40),
        fontWeight: 'bold',
        color: colour.black,
      },
      text1: {
        alignItems: 'center',
        textAlign: 'center',
        color: 'black',
        marginTop: moderateVerticalScale(10),
      },
      inputView: {
        height: scale(55),
        width: scale(55),
        borderWidth: scale(1),
        marginLeft: moderateVerticalScale(10),
        borderRadius: scale(10),
        textAlign: 'center',
        fontSize: scale(18),
        fontWeight: '700',
      },
      TextinputView: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: moderateVerticalScale(25),
      },
      VerifyText: {
        color: 'white',
        fontSize: 20,
      },
      resendOtpView: {
        alignSelf: 'center',
        marginTop: moderateVerticalScale(20)
      },
      resendOtpText: {
        fontSize: scale(13),
        color: colour.theme_Colour_red
      },
      timerAndTextContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: moderateVerticalScale(45),
        width: moderateScale(200),
        alignSelf: 'center'
      }
    
});

export default styles
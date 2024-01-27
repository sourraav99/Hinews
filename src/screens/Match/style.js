import { StyleSheet,  Dimensions } from 'react-native'
import { moderateScale,scale,verticalScale,moderateVerticalScale } from 'react-native-size-matters';
const{height,width}=Dimensions.get('window')


const styles = StyleSheet.create({
    SafeAreaMain: {
      flex: 1,
      backgroundColor: 'white',
    },
    Viewmain: {
      flex: 1,
      backgroundColor: 'white',
    },
    Header: {
      flexDirection: 'row',
          justifyContent: 'space-between',
    },
    MatchesText: {
      fontSize: scale(30),
      fontWeight: '700',
      color: 'black',
    },
    flatlistStyle: {
      width: '100%'
    },
    flatlistHeaderComponentStyle: {
      width: '100%',
      bottom: moderateVerticalScale(10)
    },
    DiscriptiveTextViewStyle: {
      width: '93%',
      alignSelf: 'center',
      marginTop: moderateVerticalScale(12)
    },
    discriptiveTextStyle: {
      color: 'black',
      fontSize: scale(18)
    },
    todayTextContainer: {
      alignItems: 'center',
      width: '93%',
      alignSelf: 'center',
      borderBottomWidth: .5,
      borderColor: '#ADAFBB',
      marginTop: verticalScale(10)
    },
    todayTextStyle: {
      top: moderateVerticalScale(8),
      backgroundColor: 'white',
      color: '#ADAFBB'
    },
    matchesImageStyle: {
      height:height*0.27 ,
      width: width*0.40,
      margin: moderateVerticalScale(10),
      borderRadius: 18,
    },
    nameAndAgeViewStyle: {
      position: 'absolute',
      bottom: moderateVerticalScale(55),
      left: moderateVerticalScale(12),
    },
    nameAndAgeTextStyle: {
      fontSize: scale(20),
      color: '#FFFFFF',
      fontWeight: '500',
      width:width*0.40,
    },
    closeAndCheckBtnContainer: {
      bottom: moderateVerticalScale(10),
      position: 'absolute',
      width: width*0.40,
      alignSelf: 'center',
      height: height*0.053,
      borderBottomLeftRadius: 18,
      borderBottomRightRadius: 18,
      flexDirection: 'row',
      overflow: 'hidden'
    },
    closeBtnBlurViewStyle: {
      flex: 1
    },
    closeBtnViewStyle: {
      flex: 1,
      alignItems: "center",
      justifyContent: 'center',
    },
    checkAndCloseBtnCenteredView: {
      width: 1,
      backgroundColor: 'black'
    },
    checkBtnBlurViewStyle: {
      flex: 1
    },
    checkBtnViewStyle: {
      flex: 1,
      alignItems: "center",
      justifyContent: 'center',
    },
    flatlistContentContainerStyle: {
      alignItems: 'center',
    },
    i_M_FooterTextStyle: {
      marginBottom: moderateVerticalScale(50)
    }
  })
  export default styles
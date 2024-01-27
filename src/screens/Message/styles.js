import {  StyleSheet,  Dimensions} from 'react-native'
import { moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';
import colour from '../../styles/colour';
const { height, width } = Dimensions.get('window')
const borderRadius = Math.min(height * 0.065, width * 0.85) / 3;

const styles = StyleSheet.create({
    safeAreaMain: {
      flex: 1,
      backgroundColor: 'white',
    },
    viewMain: {
      flex: 1,
      backgroundColor: 'white',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '93%',
      justifyContent: 'space-between',
      alignSelf: 'center',
    },
    messagesTextStyle: {
      color: 'black',
      fontSize: 30,
      fontWeight: 'bold',
      marginTop: 8
    },
    searchInputContainerViewStyle: {
      height: height * 0.065,
      width: width * 0.85,
      borderWidth: 1,
      borderRadius: borderRadius,
      alignSelf: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: moderateVerticalScale(10),
      borderColor: 'grey'
    },
    textInputStyle: {
      paddingLeft: moderateVerticalScale(10),
      fontSize: scale(18),
      width: '80%'
    },
    activitiesTextViewStyle: {
      marginTop: moderateVerticalScale(8),
      marginBottom: moderateVerticalScale(5),
    },
    activitiesTextStyle: {
      fontSize: scale(20),
      fontWeight: '700',
      paddingLeft: moderateVerticalScale(20),
      color: colour.black,
    },
    selfStoryImageContainerView: {
      height: height * 0.11,
      width: height * 0.11,
      borderRadius: height * 0.11 / 2,
      borderWidth: scale(2),
      borderColor: 'red',
      marginRight: moderateVerticalScale(10),
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: moderateVerticalScale(15)
    },
    selfStoryImageStyle: {
      height: '90%',
      width: '90%',
      borderRadius: scale(36),
      resizeMode: 'cover'
    },
    storyAddButtonView: {
      backgroundColor: '#047BBB',
      position: 'absolute',
      bottom: moderateVerticalScale(19),
      right: moderateVerticalScale(15),
      height: 25,
      width: 25,
      borderRadius: 12.5,
      alignItems: 'center',
      justifyContent: 'center'
    },
    peopleActivity: {
      height: height * 0.11,
      width: height * 0.11,
      borderRadius: height * 0.11 / 2,
      borderWidth: scale(2),
      borderColor: 'black',
      marginRight: moderateVerticalScale(10),
      alignItems: 'center',
      justifyContent: 'center'
    },
    peopleActivityImageStyle: {
      height: '90%',
      width: '90%',
      borderRadius: 36,
      resizeMode: 'cover'
    },
    smallMessagesTextStyle: {
      fontSize: scale(19),
      fontWeight: '700',
      paddingLeft: moderateVerticalScale(20),
      color: 'black',
      padding: moderateVerticalScale(8),
    },
    chatContainer: {
      width: width * .95,
      alignSelf: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: verticalScale(10)
    },
    chatImageView: {
      height: height * .08,
      width: height * .08,
      borderRadius: height * .08 / 2,
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    },
    chatImageStyle: {
      height: '100%',
      width: '100%',
      resizeMode: 'cover'
    },
    chatpeopleView: {
      bottom: moderateVerticalScale(15),
      left: moderateVerticalScale(6),
    },
    chatPeopleText: {
      fontSize: scale(17),
      fontWeight: '500',
      color: 'black'
    },
    BottomSheetStyle: {
      width: width,
      marginLeft: 0,
      marginBottom: height * 0.0,
    },
    bottomSheet_InnerViewStyle: {
      flex: 1,
      backgroundColor: 'white',
      bottom: 0,
      width: width,
      height: height * 0.9,
      position: 'absolute',
      borderRadius: 25,
    }
  })



  export default styles
import { StyleSheet,Dimensions } from "react-native";
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';
const {height,width}=Dimensions.get('window')

const styles = StyleSheet.create({
    SafeAreaMain: {
      flex: 1,
      backgroundColor: 'white',
    },
    Viewmain: {
      flex: 1,
      backgroundColor: 'white',
    },
    BackSkipView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
     
    },
    TextView: {
      width: width,
      justifyContent: 'center',
      marginLeft:width*0.04,
      flex:0.6
    },
    text1: {
      fontSize: scale(30),
      fontWeight: 'bold',
      color: 'black',
    },
    text2: {
      color: 'black',
    },
    item: {
      width: width*0.4,
      borderRadius: 10,
      marginVertical: verticalScale(6),
      marginHorizontal: moderateVerticalScale(10),
      borderWidth: scale(1),
      // paddingHorizontal: moderateVerticalScale(5),
      paddingVertical: verticalScale(10),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: '#E8E6EA',
    },
    title: {
      fontSize: 16,
    },
    ImageIcon: {
      height: moderateScale(20),
      width: moderateScale(20),
      resizeMode: 'cover',
      right: moderateScale(3),
    },
  });
  export default styles
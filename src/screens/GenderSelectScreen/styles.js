import { StyleSheet } from "react-native";
import { moderateScale,moderateVerticalScale,scale } from "react-native-size-matters";
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
    BackSkipView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginRight: moderateVerticalScale(20)
    },
    GenderSelectBtn: {
      width: '85%',
      height: moderateScale(55),
      borderWidth: moderateScale(1),
      alignSelf: 'center',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderColor: colour.theme_Colour_Grey,
      borderRadius: moderateScale(15),
      flexDirection: 'row',
      paddingHorizontal:moderateVerticalScale(10)
    },
    GenderText: {
      fontSize: scale(23),
    },
    i_Am_A_Text_Container:{
      flex:0.5,
      justifyContent: 'center',
    },
    i_Am_A_Text_style: {
      color: 'black',
      fontSize: scale(39),
      fontWeight: '600',
      marginLeft:moderateVerticalScale(20),
      marginTop:moderateVerticalScale(20)
    },
  });
  export default styles
const {StyleSheet, Dimensions} = require('react-native');
import {
  moderateScale,
  scale,
  moderateVerticalScale,
  verticalScale,
} from 'react-native-size-matters';
import colour from '../../styles/colour';

const styles = StyleSheet.create({
  SafeAreaMain: {
    flex: 1,
    backgroundColor: 'white',
  },
  Viewmain: {
   flex:1,
    backgroundColor: 'white',
  },
  photo: {
    height: moderateScale(100),
    width: moderateScale(100),
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: moderateScale(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  InputView: {
    alignSelf: 'center',
    //  marginTop:moderateVerticalScale(10)
  },
  InputStyle: {
    borderWidth: scale(1),
    width: moderateScale(300),
    height: moderateVerticalScale(50),
    fontSize: scale(15),
    padding: moderateScale(15),
    borderRadius: moderateScale(15),
    // marginBottom: 30,
    color: 'black',
    borderColor: '#E8E6EA',
  },
  FnameContainer: {
    position: 'absolute',
    padding: moderateVerticalScale(15),
    // marginBottom: moderateVerticalScale(10),
  },
  CalendarView: {
    flexDirection: 'row',
    width: moderateScale(300),
    height: moderateVerticalScale(50),
    borderRadius: moderateScale(15),
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#FBA9AC',
  },
  CalendarImage: {
    height: moderateScale(30),
    width: moderateScale(27),
    marginLeft: moderateVerticalScale(10),
  },
  CalendarText: {
    marginLeft: 10,
    color: '#E94957',
    fontWeight: '500',
  },
  container1: {
    flex: 0.8,
    justifyContent: 'space-evenly',
  },
  container2: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  container3: {
    flex: 0.5,
    justifyContent: 'flex-end',
  },
  profileDetailTextStyle: {
    fontSize: scale(33),
    fontWeight: '500',
    color: 'black',
    marginLeft: moderateVerticalScale(20),
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: moderateVerticalScale(100),
  },
});
export default styles;

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Dimensions
} from 'react-native';
import React from 'react';
import styles from './styles';
import CustomeButton from '../../Components/CustomeButton';
import { moderateScale, scale, verticalScale, moderateVerticalScale } from 'react-native-size-matters'
import colour from '../../styles/colour';
import NumberScreen from '../NumberInput';
const { height, width } = Dimensions.get('window')


const LoginScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.SafeAreaMain}>
      <View style={styles.Viewmain}>
        <View style={styles.container1}>
          <View style={styles.iconView}>
            <Image
              resizeMode='contain'
              style={{ height: moderateScale(150), width: moderateScale(170) }}
              source={require('../../pictures/trademark.png')} />
          </View>
        </View>
        <View style={styles.container2}>
          <Text style={styles.signupToContStyle}>
            Sign up to continue
          </Text>
          <CustomeButton
          btnstyle={{width: '80%',}}
            btnText={'Continue with Email'}
            btnTextStyle={{fontSize: scale(14),fontWeight: 'bold',}} />
          <CustomeButton
            btnstyle={{
              backgroundColor: colour.white,
              borderWidth: scale(1),
              width: '80%',
            }}
            btnText={'Use Phone Number'}
            btnTextStyle={{ color: colour.theme_Colour_red ,fontSize: scale(14),fontWeight: 'bold',}}
            onpress={() => navigation.navigate('Number')}
          />
        </View>
        <View style={styles.container3}>
          <View
            style={styles.signupLineContainer}>
            <View style={styles.signupLine}></View>
            <Text style={{ color: '#000000', margin: moderateScale(10) }}>Or sign up with</Text>
            <View style={styles.signupLine}></View>
          </View>
          <View
            style={styles.fbGoogleAppleContainer}>
            <CustomeButton 
              btnstyle={styles.FbGoogleApple}
              img={require('../../pictures/facebook.png')} />
            <CustomeButton
              btnstyle={styles.FbGoogleApple}
              img={require('../../pictures/google.png')} />
            <CustomeButton
              btnstyle={styles.FbGoogleApple}
              img={require('../../pictures/Icon.png')} />
          </View>
        </View>
        <View
          style={styles.container4}>
          <TouchableOpacity style={{ marginRight: 10 }}>
            <Text style={styles.termsAndPolicy}>Terms of use</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.termsAndPolicy}>Privacy and Policy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;


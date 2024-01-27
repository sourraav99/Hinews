import {
  View,
  Text,
  SafeAreaView,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import styles from './styles';
import { moderateScale, scale, moderateVerticalScale, verticalScale } from 'react-native-size-matters';
import CustomeButton from '../../Components/CustomeButton';

const NumberScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.SafeAreaMain}>
      <View style={styles.Viewmain}>

        <View style={styles.titleAndSubtitleContainer}>
          <Text style={styles.title}>My mobile</Text>
          <Text style={styles.subtitle}>
            Please enter your valid phone number. We will send you 4-digit code
            to verify your account.
          </Text>
        </View>
        <View
          style={styles.phoneInputViewStyle}>
          <PhoneInput />
        </View>
        <CustomeButton
        btnstyle={styles.ContinueBtn}
        btnText={'Continue'} 
        btnTextStyle={{fontSize: scale(18),fontWeight: 'bold',}}
        onpress={()=>navigation.navigate('Otp')}/>
      </View>
    </SafeAreaView>
  );
};

export default NumberScreen;

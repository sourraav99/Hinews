import {View, Text, SafeAreaView, Alert} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import styles from './styles';
import {
  moderateScale,
  scale,
  moderateVerticalScale,
  verticalScale,
} from 'react-native-size-matters';
import CustomeButton from '../../Components/CustomeButton';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import OtpScreen from '../OtpScreen';
import colour from '../../styles/colour';

const NumberScreen = ({navigation}) => {
  // const navigation = useNavigation();
  const [input, setInput] = useState('');

  const handle = () => {
    if (input.length === 10) {
      navigation.navigate('Otp');
    } else {
      Alert.alert('Plz Enter valid mobile number');
    }
  };
  const isButtonDisabled = input.length !== 10;
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
        <View style={styles.phoneInputViewStyle}>
          <PhoneInput
            value={input}
            onChangeText={val => {
              setInput(val);
            }}
          />
        </View>
        <CustomeButton
          btnstyle={{
            ...styles.ContinueBtn,
            backgroundColor:
              input.length === 10 ? colour.theme_Colour_red : 'grey',
          }}
          disabled={isButtonDisabled}
          btnText={'Continue'}
          btnTextStyle={{fontSize: scale(18), fontWeight: 'bold'}}
          onpress={handle}
        />
      </View>
    </SafeAreaView>
  );
};

export default NumberScreen;

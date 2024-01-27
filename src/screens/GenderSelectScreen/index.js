import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Test from '../InterestSelection';
import HeaderComp from '../../Components/HeaderComp';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import CustomeButton from '../../Components/CustomeButton';
import styles from './styles';

const GenderScreen = ({ navigation }) => {
  const [gender, setgender] = useState(null)

  const onPressGender = (value) => {
    setgender(value)
  }
  return (
    <SafeAreaView style={styles.SafeAreaMain}>
      <View style={styles.Viewmain}>
        <View style={styles.BackSkipView}>
          <HeaderComp
            img={require('../../pictures/right.png')} />
          <HeaderComp
            headerText={'Skip'}
            headerTextStyle={{fontSize: scale(18),}}
             />
        </View>
        <View style={styles.i_Am_A_Text_Container}>
          <Text style={styles.i_Am_A_Text_style}>
            I am a
          </Text>
        </View>
        <View style={{flex:1,justifyContent: 'space-evenly',}}>
          <TouchableOpacity onPress={() => onPressGender('WOMEN')} style={[[styles.GenderSelectBtn, {backgroundColor: gender === 'WOMEN' ? '#E94957' : 'white' }]]}>
            <Text style={[styles.GenderText, { color: gender === 'WOMEN' ? 'white' : 'black' },]}>Women</Text>
            <Image source={gender === 'WOMEN' ? require('../../pictures/check1.png') : require('../../pictures/check.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onPressGender('MEN')} style={[[styles.GenderSelectBtn, {  backgroundColor: gender === 'MEN' ? '#E94957' : 'white' }]]}>
            <Text style={[styles.GenderText, { color: gender === 'MEN' ? 'white' : 'black' }, ]}>Men</Text>
            <Image source={gender === 'MEN' ? require('../../pictures/check1.png') : require('../../pictures/check.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onPressGender('OTHER')} style={[[styles.GenderSelectBtn, { backgroundColor: gender === 'OTHER' ? '#E94957' : 'white' }]]}>
            <Text style={[styles.GenderText, { color: gender === 'OTHER' ? 'white' : 'black' },]}>Other</Text>
            <Image source={gender === 'OTHER' ? require('../../pictures/check1.png') : require('../../pictures/check.png')} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-end',}}>
          <CustomeButton
          btnText={'Continue'}
          btnTextStyle={{fontWeight: 'bold',fontSize: scale(25),}}
          btnstyle={{bottom:moderateVerticalScale(50)}}
          onpress={()=>navigation.navigate(Test)}/>
        </View>
      </View>
    </SafeAreaView>
  );
};


export default GenderScreen;

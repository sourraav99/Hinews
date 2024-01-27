import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import React from 'react';
import NotifiEnable from '../NotifiEnable';
import Main from '../../Navigation/BottomTab';
import HeaderComp from '../../Components/HeaderComp';
import { moderateVerticalScale, scale } from 'react-native-size-matters';
import CustomeButton from '../../Components/CustomeButton';
import styles from './styles';
const {height,width}=Dimensions.get('window')
styles

const EnableContact = ({navigation}) => {
  return (
    <SafeAreaView style={styles.SafeAreaMain}>
      <View style={styles.Viewmain}>
        <HeaderComp
        headerText={'Skip'}
        headerContainerStyle={{justifyContent: 'flex-end',}}
        headerTextStyle={{marginRight: moderateVerticalScale(20),fontSize:scale(18)}}/>
        <View style={styles.peopleView}>
          <Image source={require('../../pictures/people.png')} />
        </View>
        <View style={styles.textsView}>
          <Text style={styles.text1}>Search Friend's</Text>
          <Text style={styles.text2}>
            You can find friends from your contact lists to be connected
          </Text>
        </View>
        <View style={{flex: 1, justifyContent: 'flex-end', }}>
          {/* <TouchableOpacity
            style={styles.ConfirmBtnView}
            onPress={() => navigation.navigate(NotifiEnable)}>
            <Text style={styles.confirmBtnTxt}>Access to a contact list</Text>
          </TouchableOpacity> */}
          <CustomeButton
          btnText={'Continue'}
          btnTextStyle={{fontSize: scale(25),fontWeight:'bold',}}
          btnstyle={{bottom:moderateVerticalScale(50)}}
          onpress={()=>navigation.navigate(NotifiEnable)}/>
        </View>
      </View>
    </SafeAreaView>
  );
};


export default EnableContact;

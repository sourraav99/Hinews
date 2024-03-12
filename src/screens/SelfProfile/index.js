import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import HeaderComp from '../../Components/HeaderComp'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import colour from '../../styles/colour'
import Carousel from '../../Components/Carousel';
import styles from './style';
import EditProfileScreen from '../EditProfileScreen';
import ShowProfileDetail from '../ShowProfileDetail';
import database from '@react-native-firebase/database';

const { height, width } = Dimensions.get('window')
const SelfProfile = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.mainView}>
        <View style={styles.Header}>
          <HeaderComp
            headerText={'Profile'}
            headerTextStyle={styles.headerTextStyle}
            headerContainerStyle={{ height: moderateScale(35), }} />
          <TouchableOpacity style={styles.settingIconContainer}>
            <AntDesign
              name="setting"
              size={35}
              color={colour.theme_Colour_red} />
          </TouchableOpacity>
        </View>
        <View style={styles.screenContainer1}>
          <View style={styles.profileAnimation}>
            <TouchableOpacity onPress={() => navigation.navigate(ShowProfileDetail)} style={styles.profilePicSpace}>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("EditProfile")} style={styles.profileEditIconContainer}>
              <MaterialCommunityIcons name="lead-pencil"
                size={25}
                color="grey" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.profilePercentComplete}>
              <Text style={{ fontWeight: '700', fontSize: scale(14) }}>10%COMPLETE</Text>
            </TouchableOpacity>
          </View>
          <Text style={{ fontSize: scale(30), fontWeight: '500' }}>name,age</Text>
        </View>
        <View style={styles.screenContainer2}>
          <View style={styles.likeBoostSubsContainer}>
            <View style={styles.likeBoostSubsView}>
              <TouchableOpacity style={styles.plusIconView}>
                <Feather name="plus" size={scale(20)} color='#737373' />
              </TouchableOpacity>
              <Entypo name="star" size={scale(32)} color="#0066E8" />
              <Text style={{ color: '#737373' }}>Super Like</Text>
            </View>
            <View style={styles.likeBoostSubsView}>
              <TouchableOpacity style={styles.plusIconView}>
                <Feather name="plus" size={scale(20)} color='#737373' />
              </TouchableOpacity>
              <Octicons name="zap" size={scale(32)} color="#2516E3" />
              <Text style={{ color: '#737373' }}>Boosts</Text>
            </View>
            <View style={styles.likeBoostSubsView}>
              <TouchableOpacity style={styles.plusIconView}>
                <Feather name="plus" size={scale(20)} color='#737373' />
              </TouchableOpacity>
              <Fontisto name="tinder" size={scale(32)} color={colour.theme_Colour_red} />
              <Text style={{ color: '#737373' }}>Super Like</Text>
            </View>

          </View>
          <Carousel />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SelfProfile
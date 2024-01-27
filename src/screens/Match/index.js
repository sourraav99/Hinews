import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, FlatList, Dimensions } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { BlurView } from '@react-native-community/blur';
import HeaderComp from '../../Components/HeaderComp';
import { moderateScale,scale,verticalScale,moderateVerticalScale } from 'react-native-size-matters';
import styles from './style';


const Cards = [{ Image: require('../../pictures/virat.jpeg'), id: 1, title: 'Virat kohli', age: '33', },
{ Image: require('../../pictures/sp.jpeg'), id: 2, title: 'spider man', age: '25' },
{ Image: require('../../pictures/anadearmas.jpeg'), id: 3, title: 'Ana de armas', age: '33', },
{ Image: require('../../pictures/sourabh.jpeg'), id: 4, title: 'Sourabh singh', age: '20', },
{ Image: require('../../pictures/ronaldo.jpeg'), id: 5, title: 'ronaldo', age: '35' },
{ Image: require('../../pictures/prinka.jpeg'), id: 6, title: 'Priyanka', age: '35' },
{ Image: require('../../pictures/modiji.jpeg'), id: 7, title: 'modi ji', age: '68' },
{ Image: require('../../pictures/hulk.jpeg'), id: 8, title: 'Hulk', age: '40' },
{ Image: require('../../pictures/dr.strange.jpeg'), id: 9, title: 'Dr.Strang', age: '45', },
{ Image: require('../../pictures/thor.jpeg'), id: 10, title: 'Thor', age: '40' },]
const Match = ({}) => {
  return (
    <SafeAreaView style={styles.SafeAreaMain}>
      <View style={styles.Viewmain}>
      <View style={styles.Header}>
          <HeaderComp
            headerText={'Matches'}
            headerTextStyle={{ color: 'black', fontSize: scale(30), fontWeight: '700', marginLeft: moderateVerticalScale(20) }}
            headerContainerStyle={{ height: moderateScale(35) }} />
          <HeaderComp
            resizee={'contain'}
            img={require('../../pictures/UpDown.png')}
            imgStyle={{ marginRight: moderateVerticalScale(20), height: moderateScale(45) }}
            headerContainerStyle={{ height: moderateScale(45) }}
            backbtnstyles={{ borderWidth: 0 }} />
        </View>
        <View>
          <FlatList
            data={Cards}
            bounces={false}
            numColumns={2}
            style={styles.flatlistStyle}
            showsVerticalScrollIndicator={false}
            ListHeaderComponentStyle={styles.flatlistHeaderComponentStyle}
            ListHeaderComponent={() => {
              return (
                <>
                  <View style={styles.DiscriptiveTextViewStyle}>
                    <Text style={styles.discriptiveTextStyle}>
                      This is the list people who have liked you and your matches.
                    </Text>
                  </View>
                  <View style={styles.todayTextContainer} >
                    <Text style={styles.todayTextStyle}>
                      Today
                    </Text>
                  </View>
                  </>
              )
            }}
            renderItem={({ item, index }) => {
              return (
                <View style={{}}>
                  <View>
                    <Image source={item.Image} style={styles.matchesImageStyle} />
                  </View>
                  <View style={styles.nameAndAgeViewStyle}>
                    <Text numberOfLines={1} style={styles.nameAndAgeTextStyle}>{item.title},{item.age}</Text>
                  </View>
                  <View style={styles.closeAndCheckBtnContainer}>
                    <BlurView
                      style={styles.closeBtnBlurViewStyle}
                      blurType="light"
                      blurAmount={5}
                      reducedTransparencyFallbackColor="black">
                      <TouchableOpacity style={styles.closeBtnViewStyle}>
                        <AntDesign name="close" color='white' size={25} />
                      </TouchableOpacity>
                    </BlurView>
                    <View style={styles.checkAndCloseBtnCenteredView}></View>
                    <BlurView
                      style={styles.checkBtnBlurViewStyle}
                      blurType="light"
                      blurAmount={5}
                      reducedTransparencyFallbackColor="black">
                      <TouchableOpacity style={styles.checkBtnViewStyle}>
                        <AntDesign name="check" color='white' size={25} />
                      </TouchableOpacity>
                    </BlurView>
                  </View>
                </View>
              )
            }}
            contentContainerStyle={styles.flatlistContentContainerStyle}
            ListFooterComponent={() => {
              return (
                <Text style={styles.i_M_FooterTextStyle}>i m footer</Text>
              )
            }} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Match


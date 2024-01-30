import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colour from '../../styles/colour';
const height=Dimensions.get('window').height;
const width=Dimensions.get('window').width;
const font=Dimensions.get('window').height;

const ShowProfileDetail = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'white',flex:1}}>
      <View style={{flex:1,backgroundColor:colour.backGroudColour}}>

      </View>
    </SafeAreaView>
  )
}

export default ShowProfileDetail

const styles = StyleSheet.create({})
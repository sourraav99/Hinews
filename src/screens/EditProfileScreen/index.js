import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

const EditProfileScreen = ({navigation}) => {
  const refrence=useRef()
  const [name, setName] = useState(0);
  const [data, setData] = useState(100);
  const handleOnpress=()=>{
    refrence.current.focus();
    refrence.current.setNativeProps({
      fontSize:25,
      color:"red"
    })
  }
  // const date= new Date();
  // const age= date.getFullYear();
  // console.log(age);
  // const handle=()=>{
  //   setDisplayedName(name)
  // }
  // useEffect(()=>{
  //   console.warn('do some animation ');
  // },[name])
  // useEffect(()=>{
  //   console.warn('call some api');
  // },[data])
  return (
    <SafeAreaView style={{alignItems: 'center'}}>
      <TextInput ref={refrence} style={styles.input} placeholder="Enter Name" />
      <TextInput style={styles.input} placeholder="Enter Password" />
      <Button title='touch me' onPress={handleOnpress}/>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 50,
    width: '90%',
    borderWidth: 1,
    marginBottom: 20,
    fontSize: 18,
    paddingLeft: 10,
  },
});
export default EditProfileScreen;

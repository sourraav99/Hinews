import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import colour from '../../styles/colour';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import firestore from '@react-native-firebase/firestore';
import database from '@react-native-firebase/database'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const font = Dimensions.get('window').fontScale;

const ShowProfileDetail = ({navigation}) => {
  const [myData, setMyData] = useState(null);
  const [current, setCurrent] = useState(0);
  const [content, setContent] = useState([
    {
      content: require('../../pictures/sourabh.jpeg'),
      type: 'image',
      finish: 0,
      key: 1,
    },
    {
      content: require('../../pictures/anadearmas.jpeg'),
      type: 'image',
      finish: 0,
      key: 2,
    },
    {
      content: require('../../pictures/modiji.jpeg'),
      type: 'image',
      finish: 0,
      key: 3,
    },
    {
      content: require('../../pictures/anadearmas.jpeg'),
      type: 'image',
      finish: 0,
      key: 4,
    },
    {
      content: require('../../pictures/modiji.jpeg'),
      type: 'image',
      finish: 0,
    },
    {
      content: require('../../pictures/sourabh.jpeg'),
      type: 'image',
      finish: 0,
    },
  ]);

  useEffect(() => {
    getDataBase();
  }, []);

  const getDataBase = async () => {
    try {
      const data = await database().ref('users/1').once('value');
      console.log(data);
      setMyData(data.val())
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SafeAreaView style={{backgroundColor: colour.backGroudColour, flex: 1}}>
      <View style={{flex: 1, backgroundColor: colour.backGroudColour}}>
        <View
          style={{
            flexDirection: 'row',
            height: height * 0.08,
            backgroundColor: colour.white,
            alignItems: 'center',
            justifyContent:'space-between'
          }}>
          <View  style={{flexDirection: 'row', marginLeft: 15,width:'80%'}}>
            <Text numberOfLines={1} style={{fontSize: font * 30, color: colour.black}}>
            {myData ? myData.name : 'Loading.....'},
            </Text>
            <Text numberOfLines={1} style={{fontSize: font * 30, color: colour.black}}>{myData ? myData.age : 'Loading....'}</Text>
          </View>
          <View style={{}}></View>
          <TouchableOpacity
            style={{height: height * 0.06, width: height * 0.06,marginRight:10}}
            activeOpacity={0.5}
            onPress={() => navigation.navigate('Profile')}>
            <Image
              style={{height: height * 0.06, width: height * 0.06}}
              source={require('../../pictures/dropdown1.png')}
            />
          </TouchableOpacity>
        </View>

        <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
          <View
            style={{
              width: width,
              height: height * 0.5,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            }}>
            <Image
              source={content[current].content}
              style={{
                width: width,
                height: height * 0.5,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              }}
              resizeMode="cover"
            />
            <View
              style={{
                width: width,
                position: 'absolute',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                flexDirection: 'row',
                marginTop: 2,
              }}>
              {content.map((item, index) => {
                return (
                  <View
                    style={[
                      styles.story,
                      {
                        backgroundColor:
                          current == index ? 'white' : 'rgba(255,255,255,.5)',
                      },
                    ]}></View>
                );
              })}
            </View>
            <View
              style={{
                height: height * 0.5,
                width: width,
                position: 'absolute',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                style={{width: '35%', height: '100%'}}
                onPress={() => {
                  if (current > 0) {
                    setCurrent(current - 1);
                  }
                }}></TouchableOpacity>
              <TouchableOpacity
                style={{width: '35%', height: '100%'}}
                onPress={() => {
                  if (current < content.length - 1) {
                    setCurrent(current + 1);
                  }
                }}></TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              backgroundColor: colour.white,
              width: width,
              marginTop: 5,
              borderRadius: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: '95%',
                alignSelf: 'center',
                alignItems: 'center',
              }}>
              <Fontisto name="quote-a-right" color="grey" size={13} />
              <Text
                style={{fontSize: font * 15, color: 'grey', fontWeight: '700'}}>
                About me
              </Text>
            </View>
            <Text
              style={{
                width: '92%',
                alignSelf: 'center',
                color: colour.black,
                fontSize: font * 15,
              }}>
              "Passionate explorer 🌍 | Creative soul 🎨 | Fitness enthusiast 💪
              | Love meaningful conversations and a good laugh 😄 | Seeking
              genuine connections and shared adventures! 🚀"
            </Text>
          </View>
          <View
            style={{
              backgroundColor: colour.white,
              width: width,
              marginTop: 5,
              borderRadius: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: '95%',
                alignSelf: 'center',
                alignItems: 'center',
              }}>
              <Fontisto name="quote-a-right" color="grey" size={13} />
              <Text
                style={{fontSize: font * 15, color: 'grey', fontWeight: '700'}}>
                About me
              </Text>
            </View>
            <Text
              style={{
                width: '92%',
                alignSelf: 'center',
                color: colour.black,
                fontSize: font * 15,
              }}>
              name: {myData ? myData.name : 'Loading.....'} , Age:
              {myData ? myData.age : 'Loading.....'}
            </Text>
            <Text
              style={{
                width: '92%',
                alignSelf: 'center',
                color: colour.black,
                fontSize: font * 15,
              }}> 
              Hobby: 
              {/* {myData?myData.hobby.map((list)=> `  ${list}`):'Loading....'} */}
              </Text>
          </View>
        </ScrollView>
        <TouchableOpacity
          style={{
            position: 'absolute',
            right: 20,
            bottom: height * 0.045,
            height: height * 0.085,
            width: height * 0.085,
            backgroundColor: colour.theme_Colour_red,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 100,
          }}
          onPress={() => navigation.navigate('EditProfile')}>
          <MaterialCommunityIcons name="lead-pencil" color="white" size={35} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ShowProfileDetail;

const styles = StyleSheet.create({
  story: {
    height: 3.5,
    flex: 1,
    // backgroundColor: 'rgba(255,255,255,.5)',
    margin: 2,
  },
});

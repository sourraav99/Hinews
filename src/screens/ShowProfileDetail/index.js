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
import React, {useState} from 'react';
import colour from '../../styles/colour';
import HeaderComp from '../../Components/HeaderComp';
import SelfProfile from '../SelfProfile';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EditProfileScreen from '../EditProfileScreen';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const font = Dimensions.get('window').fontScale;

const ShowProfileDetail = ({navigation}) => {
  const [current, setCurrent] = useState(0);
  const [content, setContent] = useState([
    {
      content: require('../../pictures/sourabh.jpeg'),
      type: 'image',
      finish: 0,
    },
    {
      content: require('../../pictures/anadearmas.jpeg'),
      type: 'image',
      finish: 0,
    },
    {
      content: require('../../pictures/modiji.jpeg'),
      type: 'image',
      finish: 0,
    },
    {
      content: require('../../pictures/anadearmas.jpeg'),
      type: 'image',
      finish: 0,
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

  return (
    <SafeAreaView style={{backgroundColor: colour.backGroudColour, flex: 1}}>
      <View style={{flex: 1, backgroundColor: colour.backGroudColour}}>
        <View
          style={{
            flexDirection: 'row',
            height: height * 0.08,
            backgroundColor: colour.white,
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row', marginLeft: 15}}>
            <Text style={{fontSize: font * 30, color: colour.black}}>
              Name,
            </Text>
            <Text style={{fontSize: font * 30, color: colour.black}}>Age</Text>
          </View>
          <View style={{width: width * 0.44}}></View>
          <TouchableOpacity
            style={{height: height * 0.06, width: height * 0.06}}
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
              height: height * 0.08,
              backgroundColor: colour.white,
              width: width,
              marginTop: 5,
            }}>
            <Text style={{fontSize: 40}}>hiiiii</Text>
          </View>
          <View
            style={{
              height: height * 0.08,
              backgroundColor: colour.white,
              width: width,
              marginTop: 5,
            }}>
            <Text style={{fontSize: 40}}>hiiiii</Text>
          </View>
          <View
            style={{
              height: height * 0.08,
              backgroundColor: colour.white,
              width: width,
              marginTop: 5,
            }}>
            <Text style={{fontSize: 40}}>hiiiii</Text>
          </View>
          <View
            style={{
              height: height * 0.08,
              backgroundColor: colour.white,
              width: width,
              marginTop: 5,
            }}>
            <Text style={{fontSize: 40}}>hiiiii</Text>
          </View>
          <View
            style={{
              height: height * 0.08,
              backgroundColor: colour.white,
              width: width,
              marginTop: 5,
            }}>
            <Text style={{fontSize: 40}}>hiiiii</Text>
          </View>
          <View
            style={{
              height: height * 0.08,
              backgroundColor: colour.white,
              width: width,
              marginTop: 5,
            }}>
            <Text style={{fontSize: 40}}>hiiiii</Text>
          </View>
          <View
            style={{
              height: height * 0.08,
              backgroundColor: colour.white,
              width: width,
              marginTop: 5,
            }}>
            <Text style={{fontSize: 40}}>hiiiii</Text>
          </View>
          <View
            style={{
              height: height * 0.08,
              backgroundColor: colour.white,
              width: width,
              marginTop: 5,
            }}>
            <Text style={{fontSize: 40}}>hiiiii</Text>
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
          onPress={()=>navigation.navigate('EditProfile')}>
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

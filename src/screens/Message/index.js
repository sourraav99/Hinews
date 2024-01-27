import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput, FlatList, Dimensions, } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import BottomSheet from 'react-native-modal';
import {  scale } from 'react-native-size-matters';
import styles from './styles';
const { height, width } = Dimensions.get('window')





const Cards = [{ Image: require('../../pictures/virat.jpeg'), id: 1, title: 'Virat kohli', age: '33', uri: "https://e1.pxfuel.com/desktop-wallpaper/594/679/desktop-wallpaper-virat-kohli-2019-for-android-virat-kohli-black.jpg" },
{ Image: require('../../pictures/sp.jpeg'), id: 2, title: 'spider man', age: '25', uri: "https://i.pinimg.com/736x/2d/09/5a/2d095a824d174e23fc380bf834f6b34a.jpg" },
{ Image: require('../../pictures/anadearmas.jpeg'), id: 3, title: 'Ana de armas', age: '33', uri: "https://media1.popsugar-assets.com/files/thumbor/Zb7A6uiJZD230Il86Rhl7wv4XJ4=/fit-in/792x1119/filters:format_auto():upscale()/2020/01/05/045/n/1922398/tmp_AvvDvj_e8e6a4c0679b5a83_GettyImages-1197390293.jpg" },
{ Image: require('../../pictures/sourabh.jpeg'), id: 4, title: 'Sourabh singh', age: '20', uri: "https://i.pinimg.com/736x/85/80/c9/8580c9b5c3cee1a4f3a183922ab85aa8.jpg" },
{ Image: require('../../pictures/ronaldo.jpeg'), id: 5, title: 'ronaldo', age: '35', uri: "https://media.newyorker.com/photos/63826120196c8ef692b4eba5/1:1/w_1707,h_1707,c_limit/Ronaldo_WC22.png" },
{ Image: require('../../pictures/prinka.jpeg'), id: 6, title: 'Priyanka', age: '35', uri: "https://cdn.britannica.com/82/220482-050-17843B41/Priyanka-Chopra-2020.jpg" },
{ Image: require('../../pictures/modiji.jpeg'), id: 7, title: 'modi ji', age: '68', uri: "https://rukminim2.flixcart.com/image/850/1000/k8t3jbk0/poster/6/f/w/medium-poster-narendra-modi-ji-poster-poster-for-wall-decoration-original-imafqqrru7x2hjbw.jpeg?q=20" },
{ Image: require('../../pictures/hulk.jpeg'), id: 8, title: 'Hulk', age: '40', uri: "https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/3/l/1/medium-poster-design-no-3019-hulk-poster-hulk-posters-for-room-original-imaggbybvwbygz8y.jpeg?q=90" },
{ Image: require('../../pictures/dr.strange.jpeg'), id: 9, title: 'Dr.Strang', age: '45', uri: "https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/7/m/l/small-dr-strange-poster-for-room-wall-decoration-hd-300-gsm-original-imagsjqmgwezc5nq.jpeg?q=20" },
{ Image: require('../../pictures/thor.jpeg'), id: 10, title: 'Thor', age: '40', uri: "https://clipartix.com/wp-content/uploads/2018/03/thor-clipart-2018-18.jpg" },]

const Messages = ({ }) => {
  const [visible, setVisible] = useState(false);
  const [chatData, setchatData] = useState({})
  // console.log(chatData, '----- item')

  const Activities = ({ item, index }) => {
    return (
      <View>
        <View style={styles.searchInputContainerViewStyle}>
          <AntDesign style={{ paddingLeft: 10 }} name="search1" color='grey' size={25} />
          <TextInput style={styles.textInputStyle} placeholder='Search' placeholderTextColor="grey" />
        </View>
        <View style={styles.activitiesTextViewStyle}>
          <Text style={styles.activitiesTextStyle}>Activities</Text>
        </View>
        <View style={{}}>
          <FlatList
            data={Cards}
            bounces={false}
            horizontal={true}
            // contentContainerStyle={{backgroundColor: 'red',}}
            showsHorizontalScrollIndicator={false}
            ListHeaderComponent={({ item, index }) => {
              return (
                <>
                  <View style={{}}>
                    <TouchableOpacity style={styles.selfStoryImageContainerView}>
                      <Image style={styles.selfStoryImageStyle} source={require('../../pictures/sourabh.jpeg')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.storyAddButtonView}>
                      <AntDesign name="plus" color='white' size={18} />
                    </TouchableOpacity>
                    <View style={{ alignItems: 'center', }}>
                      <Text style={{ fontSize: scale(14.7) }}>You</Text>
                    </View>
                  </View>
                </>
              )
            }}
            renderItem={({ item, index }) => {
              return (
                <>
                  <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity style={styles.peopleActivity}>
                      <Image style={styles.peopleActivityImageStyle} source={item.Image} />
                    </TouchableOpacity>
                    <Text numberOfLines={1} style={{ width: width * .18, textAlign: 'center' }}>{item.title}</Text>
                  </View>
                </>
              )
            }}
          />

        </View>
        <View style={{}}>
          <Text style={styles.smallMessagesTextStyle}>Messages</Text>
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.safeAreaMain}>
      <View style={styles.viewMain}>
        <View style={styles.header}>
          <Text style={styles.messagesTextStyle}>Messages</Text>
          <TouchableOpacity>
            <Image source={require('../../pictures/filterbtn.png')} />
          </TouchableOpacity>

        </View>

        <FlatList
          data={Cards}
          bounces={false}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={Activities}
          renderItem={({ item, index }) => {
            return (
              <>
                <View>
                  <TouchableOpacity onPress={() => {
                    setVisible(true)
                    setchatData(item)
                  }}
                    activeOpacity={1}
                    touchSoundDisabled={true}
                    style={styles.chatContainer}>
                    <TouchableOpacity style={styles.chatImageView}>
                      <Image style={styles.chatImageStyle} source={item.Image} />
                    </TouchableOpacity>
                    <View style={styles.chatpeopleView}>
                      <Text
                        style={styles.chatPeopleText}>
                        {item.title}
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <View style={{ height: height * 0.001, backgroundColor: 'grey' }} />
                </View>
              </>
            )
          }} />
        <View>
          <BottomSheet

            isVisible={visible}
            onBackdropPress={() => {
              setVisible(false);
            }}
            onBackButtonPress={() => {
              setVisible(false);
            }}
            style={styles.BottomSheetStyle}>
            <View style={styles.bottomSheet_InnerViewStyle}>
              <View style={{ height: 100, width: 100 }}>
                <Text>{chatData?.title}</Text>
              </View>
            </View>

          </BottomSheet>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Messages
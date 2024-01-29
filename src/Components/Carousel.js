import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const scale = Dimensions.get('window').fontScale
//'#F3F3F3'
const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const flatlistRef = useRef()

  useEffect(() => {
    let interval = setInterval(() => {
      if (activeIndex === CarouselData.length - 1) {
        flatlistRef.current.scrollToIndex({
          index: 0,
          animation: true,
        })
      }
      else {
        flatlistRef.current.scrollToIndex({
          index: activeIndex + 1,
          animation: true,
        })
      }
    }, 1500)
    return () => clearInterval(interval)
  })
  const getItemLayout = (data, index) => ({
    length: width,
    offset: width * index,
    index: index,
  })
  const CarouselData = [
    {
      id: '1',
      titile: 'Get Platinum Subscription',
      subTitle: 'level up every action you take on the app',
      color:'red',
      btnText:"Get Platinum ",
    },
    {
      id: '2',
      titile: 'Get gold Subscription',
      subTitle: 'See who Likes you & more',
      color:'green',
      btnText:"Get Gold ",
    },
    {
      id: '3',
      titile: 'Get plus Subscription',
      subTitle: 'Get unlimited likes and more!',
      color:'yellow',
      btnText:"Get Plus",
    },
  ]
  const renderItem = ({ item, index }) => {
    return (
      <View style={{
        height: height * 0.10,
        backgroundColor: '#F3F3F3',
        width: width,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: height * 0.025,
        // backgroundColor:'red'
      }}>
        <Text style={{color:item.color, fontSize: scale * 22, fontWeight: '500' }}> {item.titile} </Text>
        <Text style={{ fontSize: scale * 15 }} > {item.subTitle} </Text>
      </View>
    )
  }
  const renderDotIndicator = () => {
    return (
      CarouselData.map((dot, index) => {
        if (activeIndex === index) {
          return (
            <View
              key={index}
              style={{
                height: height * 0.010,
                width: height * 0.010,
                borderRadius: 100,
                backgroundColor: 'black',
                marginHorizontal: width * 0.010,
              }}>
            </View>
          )
        }
        else {
          return (
            <View
              key={index}
              style={{
                height: height * 0.010,
                width: height * 0.010,
                borderRadius: 100,
                backgroundColor: 'grey',
                marginHorizontal: width * 0.010,
              }}>
            </View>
          )
        }

      })
    )
  }
  const handleScroll = (event) => {
    const ScrollPosition = event.nativeEvent.contentOffset.x;
    // console.log({ ScrollPosition })
    const index = ScrollPosition / width;
    // console.log(index);
    setActiveIndex(index)

  }

  return (
    <View  >
      <FlatList
        ref={flatlistRef}
        data={CarouselData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal={true}
        pagingEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        getItemLayout={getItemLayout} />

      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {
          renderDotIndicator()
        }
      </View>
      
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({

})
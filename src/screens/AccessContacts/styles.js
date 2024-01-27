import {StyleSheet, Dimensions,} from 'react-native';
import { moderateVerticalScale, scale } from 'react-native-size-matters';
const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
    SafeAreaMain: {
        flex: 1,
        backgroundColor: 'white',
    },
    Viewmain: {
        flex: 1,
        backgroundColor: 'white',
    },
    peopleView: {
        height: height * 0.5,
        width: width,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    textsView: {
        width: width,
        alignItems: 'center',
        alignSelf: 'center',
        //  backgroundColor: 'blue',
        flex: 0.6,
        justifyContent: 'center',
    },
    text1: {
        fontSize: scale(30),
        fontWeight: '700',
        color: 'black',
    },
    text2: {
        textAlign: 'center',
        color: 'black',
        width: width * 0.8,
    },
});
export default styles;
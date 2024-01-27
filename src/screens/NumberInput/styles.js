const { StyleSheet } = require('react-native');
import {
    Scale,
    verticalScale,
    moderateScale,
    moderateVerticalScale,
    scale,
} from 'react-native-size-matters';
import colour from '../../styles/colour';

const styles = StyleSheet.create({
    SafeAreaMain: {
        flex: 1,
        backgroundColor: 'white',
    },
    Viewmain: {
        flex: 1,
        backgroundColor: 'white',
    },
    title: {
        fontSize: scale(40),
        fontWeight: 'bold',
        color: 'black'
    },
    subtitle: {
        color: 'black',
        fontSize: scale(14),
    },
    ContinueBtn: {
        width: '90%',
        alignSelf: 'center',
        marginTop: moderateVerticalScale(30),
    },
    titleAndSubtitleContainer: {
        width: '90%',
        alignSelf: 'center',
        marginTop: moderateVerticalScale(40),
    },
    phoneInputViewStyle: {
        marginTop: verticalScale(20),
        margin: moderateScale(20),
        borderWidth: 1,
        borderColor: colour.theme_Colour_Grey,
    }
});

export default styles
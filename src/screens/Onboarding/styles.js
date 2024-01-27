const { StyleSheet, Dimensions } = require("react-native");
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import colour from '../../styles/colour';

const { width, height } = Dimensions.get('screen');
const COLORS = { primary: '#282534', white: '#fff' };


const styles = StyleSheet.create({

    indicator: {
        height: responsiveHeight(0.4),
        width: responsiveWidth(2.5),
        backgroundColor: 'white',
        marginHorizontal: responsiveWidth(0.8),
        borderRadius: responsiveWidth(1.5),
        marginBottom: 40,
    },
    btn: {
        flex: 1,
        borderRadius: responsiveWidth(2),
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
        height: responsiveHeight(7.2),
    },
    backgroundImageStyle: {
        height: height,
        width: width
    },
    textsContainer: {
        flex: 1,
        justifyContent: 'center'
        , alignItems: 'center',
    },
    titleTextStyle: {
        color: colour.white,
        fontSize: responsiveFontSize(6),
        fontWeight: 'bold',
    },
    subtitleTextStyle: {
        color: colour.white,
        fontSize: responsiveFontSize(3.5)
    },
    btnsContainer: {
        justifyContent: 'space-between',
        paddingHorizontal: responsiveWidth(4),
        top: height * .72,
        // bottom:-650
        flex: .2,
    },
    indicatorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: responsiveHeight(3),
    },
    getStartedTextStyle: {
        fontWeight: 'bold',
        fontSize: responsiveFontSize(2.7),
        color: colour.black
    },
    skipBtnTextStyle: {
        fontWeight: 'bold',
        fontSize: responsiveFontSize(2.7),
        color: colour.white,
    },
    nextBtnTextStyle: {
        fontWeight: 'bold', fontSize: responsiveFontSize(2.7), color: colour.black
    }
});
export default styles  
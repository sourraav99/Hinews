import * as React from 'react';
import Routes from './src/Navigation/Routes';
import SplashScreen from 'react-native-splash-screen';
import { Platform } from 'react-native';

function App() {
  React.useEffect(()=>{
if(Platform.OS==="android")SplashScreen.hide();
  },[])
  return (
    <Routes />
  );
}

export default App;

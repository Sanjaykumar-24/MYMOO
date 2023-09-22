import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  ImageBackground,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';
import image from "./frontpage.png"
function App(){
  return (
    <View style={{flex:1}}>
    <StatusBar backgroundColor={"#4BC9F1"}/>
    <ImageBackground source={image} style={{flex:1}}>
    <View style={{width:"100%",height:"40%",backgroundColor:'white',flexDirection:'col',marginTop:"100%"}}>
    <View style={{flex:1,backgroundColor:'red'}}>
    <Text>Welcome to the world</Text>
    </View>
    </View>
    </ImageBackground>    
    </View>
  );
}
export default App;
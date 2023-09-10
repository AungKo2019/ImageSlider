import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';

// https://www.youtube.com/watch?v=5jCV9AKo5H0
export default function App() {
  const images=[
    require('./assets/modal1.png'),
    require('./assets/model2.jpg'),
    require('./assets/model3.webp'),
    require('./assets/model4.jpeg'),
    require('./assets/model5.jpg'),
  ]
  return (
    <View style={styles.container}>
      <SliderBox
        images={images}
        dotColor="red"
        inactiveDotColor="white"
        dotStyle={{height:20,width:20,borderRadius:50}}
        imageLoadingColor='green' 
        autoplay={true} 
        autoplayInterval={5000}
        circleLoop={true}
        onCurrentImagePressed={(index)=>alert(index+1)}
        firstItem={1}
        paginationBoxVerticalPadding={10}
        style={styles.imagebox}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:40,
    borderColor:'green',
    borderWidth:10
  },
  imagebox:{
    height:400,
    width:'95%',
    // margin:10
  }
});

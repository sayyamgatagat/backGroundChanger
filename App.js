import React,{useState} from "react";
import {Text,View,StyleSheet,TouchableOpacity,StatusBar} from "react-native";

const App = () => {
  const [randomColor,setRandomColor] = useState("#000000");

  const randomColorHandler = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const color = `rgb(${red},${green},${blue})`;
    setRandomColor(color);
  } 
  
  return (
    <>
      <StatusBar backgroundColor={randomColor} />
      <View style={[styles.container,{backgroundColor: randomColor}]}>
        <TouchableOpacity onPress={()=>randomColorHandler()}>
          <Text style={styles.Text}>Click Me</Text>
        </TouchableOpacity>
      </View>
    </>)
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000'
  },
  Text: {
    fontSize: 30,
    color: '#F5f5f5',
    paddingVertical: 20,
    paddingHorizontal: 40,
    backgroundColor: '#BB2CD9',
    borderRadius: 10,
  }

});
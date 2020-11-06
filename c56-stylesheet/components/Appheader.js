import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Appheader extends React.Component{

render(){
  return(
<View style={styles.textContainer}>
<Text style={styles.text}>Quiz buzzer app</Text>
</View>

  );
}

}

const styles = StyleSheet.create({
  text:{
    color:"white",
    padding:20,
    fontSize:22,
    fontFamily:"italics",
    fontWeight:"bold",
    textAlign:"center"
  },
  textContainer:{
    backgroundColor:"blue"
  }
}
)
export default Appheader;
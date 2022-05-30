import * as React from 'react';
import {Images} from '../../images';

import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Button,
  Alert,
} from 'react-native';
const Details = () => {
  return (
    <View style={styles.createMain}>
        <View style={{flex:0.4,backgroundColor:'#d2e0d9'}}>
          <Image style={styles.Image} source={Images.bitcoin} />
          <Text style={styles.Amt}>$6,532.00</Text>
          <Text style={styles.Text1}>Updated on May29 2022</Text>
          </View>
          <View style={{flex:0.5}} >
                      <Image style={styles.ImageGraph} source={Images.graph} />

          </View>
           <View style={styles.buttonViewMain}>
      <View style={styles.buttonView}>       
          <Button
            style={styles.Button1}
            onPress={() => Alert.alert('Button with adjusted color pressed')}
            title="BUY"
            color="#4b9c25"
          />
          <View style={styles.space}/>
          <Button
            onPress={() => Alert.alert('Button with adjusted color pressed')}
            title="SELL"
            color="#d80000"
          />
          </View>  
        </View>
        </View>
       
  
  );
};
export default Details;

const styles = StyleSheet.create({
  Image: {
    width: 90,
    height: 90,
    marginLeft: 150,
    marginTop: 20,
  },
  Text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#000000',
  },
  Amt: {
    fontSize: 30,
    textAlign: 'center',
    color: '#000000',
  },
  Text1: {
    textAlign: 'center',
    margin: 10,
  },
  Button1: {
    color: '#000000',
    height: 20,
  },
  Button2: {
    height: 60,
  },
  buttonViewMain:{
    //   flex:1,

    //   flexDirection: "row",
      backgroundColor: "gray",
      
      width:"90%"
  },
    buttonView:{
    //   flex:0.1,
      justifyContent:'center',
      marginLeft:20,
    

      flexDirection: "row",
      backgroundColor: "gray"
      
      
  },
  createMain:{
      flex:1,
      backgroundColor:"gray"
  },
  ImageGraph:{
      
      width: '100%',
    height: undefined,
    aspectRatio: 1.5,
  },
  space:{
        width: 180, 
    height: 40,
  }
});

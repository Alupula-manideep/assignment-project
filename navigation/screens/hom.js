import React, {Component} from 'react';
import HomeScreen from "./navigation/screens/home";
import Route from '../MyAssignment/route';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";


import {Image, StyleSheet, Text, View, FlatList, TouchableOpacity,navigation} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default class App extends Component {


  render() {
    return (
      <View>
        <View>
          <Image
            style={styles.Image}
            source={require('./assets/images/icons/samplepic2.png')}
          />
          <Text style={styles.Text}>My Balance</Text>
          <Text style={styles.Amt}>₹1000000</Text>
          <Text style={styles.Text1}>Updated on May22 2022</Text>
          <Image
            style={styles.bell}
            source={require('./assets/images/icons/bell.webp')}
          />
        </View>
        
        <TouchableOpacity

          style={{width: 335, height: 200, flexDirection: 'row', margin: 24}}>
          
        
          <View
            style={{
              flex: 1,
              backgroundColor: '#f5deb3',
              alignSelf: 'flex-end',
            }}>
           
            <Text style={{color: 'black', fontSize: 20, margin: 6}}>
              {'Bitcoin'}
            </Text>
           
            <Text style={{color: 'black', margin: 6}}>{'BTC'}</Text>
           
            </View>
            
          </TouchableOpacity>


             <TouchableOpacity

          style={{width: 335, height: 50, flexDirection: 'row', margin: 24}}>
          
        
          <View
            style={{
              flex: 1,
              backgroundColor: '#f5deb3',
              alignSelf: 'flex-end',
            }}>
           
            <Text style={{color: 'black', fontSize: 20, margin: 6}}>
              {'Ethereum'}
            </Text>
            <Text style={{color: 'black', margin: 6}}>{'ETH'}</Text>
            </View>
          </TouchableOpacity>




             <TouchableOpacity

          style={{width: 335, height: 50, flexDirection: 'row', margin: 24}}>
          
        
          <View
            style={{
              flex: 1,
              backgroundColor: '#f5deb3',
              alignSelf: 'flex-end',
            }}>
           
            <Text style={{color: 'black', fontSize: 20, margin: 6}}>
              {'Peercoin'}
            </Text>
            <Text style={{color: 'black', margin: 6}}>{'PPC'}</Text>
            </View>
          </TouchableOpacity>


             <TouchableOpacity  
             

          style={{width: 335, height: 50, flexDirection: 'row', margin: 24}} onPress={()=>navigation.navigate("HomeScreen")} >
          
        
          <View
            style={{
              flex: 1,
              backgroundColor: '#f5deb3',
              alignSelf: 'flex-end',
            }}>
           
            <Text style={{color: 'black', fontSize: 20, margin: 6}}>
              {'Binance'}
            </Text>
            <Text style={{color: 'black', margin: 6}}>{'BNB'}</Text>
            </View>
            
          </TouchableOpacity>


             <TouchableOpacity

          style={{width: 335, height: 50, flexDirection: 'row', margin: 24}}>
          
        
          <View
            style={{
              flex: 1,
              backgroundColor: '#f5deb3',
              alignSelf: 'flex-end',
            }}>
           
            <Text style={{color: 'black', fontSize: 20, margin: 6}}>
              {'Tether'}
            </Text>
            <Text style={{color: 'black', margin: 6}}>{'USDT'}</Text>
            </View>
          </TouchableOpacity>
       
      </View>

      
    );
  }
}

const styles = StyleSheet.create({
  Image: {
    width: 90,
    height: 90,
    
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
  bell: {
    ...StyleSheet.absoluteFillObject,
    alignSelf: 'flex-end',
    marginTop: -195,
    width: 30,
    height: 40,
    position: 'relative',
  },
});

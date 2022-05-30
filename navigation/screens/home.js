

import React, {Component} from 'react';
import DetailsScreen from './display';
// import Images from '/assets/images/icons'

import {
  Image,
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  navigation,
  ScrollView,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import { Images } from '../../images';

const Home = ({navigation}) => {
  return (
    <View>
      <ScrollView>
        <View>
          <Image
            style={styles.Image}
            source={Images.profile}
        
          />
          <Text style={styles.Text}>My Balance</Text>
          <Text style={styles.Amt}>₹1000000</Text>
          <Text style={styles.Text1}>Updated on May29 2022</Text>
          <Image
            style={styles.bell}
            source={Images.bell}
          />
        </View>

        <TouchableOpacity
          style={{width: 335, height: 200, flexDirection: 'row', margin: 24}}
          onPress={() => navigation.navigate('Details')}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#f5deb3',
              alignSelf: 'flex-end',
            }}>

            <Text style={{color: 'black', fontSize: 20, margin: 6}}>
              {'Bitcoin'}
            </Text>

            <Text style={{color: 'black', margin: 6}}>{'BTC'}                                                              {'$6,532.00'}</Text>
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
            <Text style={{color: 'black', margin: 6}}>{'ETH'}                                                              {'$1,728.00'}</Text>
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
            <Text style={{color: 'black', margin: 6}}>{'PPC'}                                                              {'$0,172.10'}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{width: 335, height: 50, flexDirection: 'row', margin: 24}}
          >
          <View
            style={{
              flex: 1,
              backgroundColor: '#f5deb3',
              alignSelf: 'flex-end',
            }}>
            <Text style={{color: 'black', fontSize: 20, margin: 6}}>
              {'Binance'}
            </Text>
            <Text style={{color: 'black', margin: 6}}>{'BNB'}                                                              {'$0,011.43'}</Text>
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
            <Text style={{color: 'black', margin: 6}}>{'USDT'}                                                           {'$0,001.00'}</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Home;

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
    marginRight: 10,
    width: 30,
    height: 40,
    position: 'relative',
  },
});

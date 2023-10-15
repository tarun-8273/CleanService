import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const SplashScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for a few seconds (e.g., 3 seconds)
    setTimeout(() => {
      setIsLoading(false);
      // Navigate to the HomeScreen after loading
      navigation.navigate('Home');
    }, 10000);
  }, [navigation]);

  function getStarted(){
    navigation.navigate('Home');
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6A73FB',
      }}>
      {isLoading ? (
        <View>
          <Text
            style={{
              color: 'white',
              fontSize: 24,
              alignItems: 'center',
              textAlign: 'center',
            }}>
            Clean Room
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 24,
              alignItems: 'center',
              textAlign: 'center',
            }}>
            Clean Life
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              textAlign: 'center',
              margin: 10,
              padding: 10,
            }}>
            Book cleaners at the comfort of your room
          </Text>
        </View>
      ) : (
        <Text>Loading complete...</Text>
      )}

      <Image
        source={require('../assets/images/favorite.png')}
        resizeMode="contain"
        style={{width:200, height:200}}
      />

      <TouchableOpacity onPress={getStarted}>
        <View
          style={{
            backgroundColor: 'white',
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 50,
            paddingRight: 50,
            borderRadius: 10,
          }}>
          <Text style={{color: 'blue', fontSize: 24}}>Get Started</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SplashScreen;

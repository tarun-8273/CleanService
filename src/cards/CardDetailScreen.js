import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const CardDetailScreen = ({navigation, route}) => {
  const {title, showNotification, setShowNotification} = route.params;

  const handleDiscard = () => {
    setShowNotification(false); // Hide the notification icon
    navigation.goBack();
  };

  const handleSubmit = () => {
    setShowNotification(true); // Show the notification icon
    navigation.goBack();
  };

  return (
    <View>
      <View style={{backgroundColor: 'blue'}}>
        <Text
          style={{
            color: 'white',
            fontSize: 24,
            textAlign: 'center',
            padding: 20,
          }}>
          {title} Calendar
        </Text>
        <Text style={{color: 'white', textAlign: 'center'}}> 15-21 April </Text>
        <Text style={{color: 'white', textAlign: 'center', marginTop: 10}}>
          S M T W T F S
        </Text>
        <Text style={{color: 'white', textAlign: 'center', marginTop: 10}}>
          S M T W T F S
        </Text>
      </View>

      <View style={{alignItems: 'center', padding: 10, margin: 10}}>
        <Text style={{color: 'black', fontWeight: '600', fontSize: 18}}>
          {title} ticket will be Raised for
        </Text>
        <Text style={{color: 'black', fontWeight: '800', fontSize: 24}}>
          18 April
        </Text>
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <TouchableOpacity onPress={handleDiscard}>
          <View
            style={{
              margin: 10,
              borderRadius: 10,
              paddingTop: 10,
              paddingBottom: 10,
              paddingLeft: 20,
              paddingRight: 20,
              borderColor:'blue',
              borderWidth:1
            }}>
            <Text style={{color: 'blue', fontSize: 24}}>Discard</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSubmit}>
          <View
            style={{
              backgroundColor: '#8E44AD',
              margin: 10,
              borderRadius: 10,
              paddingTop: 10,
              paddingBottom: 10,
              paddingLeft: 20,
              paddingRight: 20,
              borderWidth:1
            }}>
            <Text style={{color: 'white', fontSize: 24}}>Accept</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CardDetailScreen;

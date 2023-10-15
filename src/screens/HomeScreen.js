import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation}) => {
  const [activeCard, setActiveCard] = useState(null);
  const [showNotification, setShowNotification] = useState(false);

  const handleCardPress = cardTitle => {
    setActiveCard(cardTitle);
    navigation.navigate('CardDetail', {
      title: cardTitle,
      showNotification,
      setShowNotification,
    });
  };

  return (
    <View>
      <Text
        style={{
          backgroundColor: 'blue',
          color: 'white',
          fontSize: 24,
          textAlign: 'center',
          padding: 20,
        }}>
        Your Plan
      </Text>
      <Text style={{margin: 10, color: 'black', fontWeight: 800, fontSize:20}}>
        Hey Tarun
      </Text>

      {/* For Card Layout */}
      <View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>

          <View style={{display: 'flex', flexDirection: 'column'}}>
            <TouchableOpacity onPress={() => handleCardPress('Cleaning')}>
              <View
                style={{
                  padding: 70,
                  backgroundColor: 'lightblue',
                  margin: 10,
                  position: 'relative',
                  borderRadius: 20,
                }}></View>
              <View>
                <Text style={{textAlign: 'center'}}>Cleaning</Text>
              </View>
              {activeCard === 'Cleaning' && showNotification && (
              <View
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 10,
                  backgroundColor: 'yellow',
                  padding: 10,
                  borderRadius: 15,
                }}>
                <View style={{color: 'white'}}></View>
              </View>
            )}
            </TouchableOpacity>
          </View>

           <View style={{display: 'flex', flexDirection: 'column'}}>
            <TouchableOpacity onPress={() => handleCardPress('Room Maintenance')}>
              <View
                style={{
                  padding: 70,
                  backgroundColor: 'lightblue',
                  margin: 10,
                  position: 'relative',
                  borderRadius: 20,
                }}></View>
              <View>
                <Text style={{textAlign: 'center'}}>Room Maintenance</Text>
              </View>
              {activeCard === 'Room Maintenance' && showNotification && (
              <View
              style={{
                position: 'absolute',
                top: 0,
                right: 10,
                backgroundColor: 'yellow',
                padding: 10,
                borderRadius: 15,
              }}>
              <View style={{color: 'white'}}></View>
            </View>
            )}
            </TouchableOpacity>
          </View>     
          
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop:10
          }}>
            
          <View style={{display: 'flex', flexDirection: 'column'}}>
            <TouchableOpacity onPress={() => handleCardPress('General Maintenance')}>
              <View
                style={{
                  padding: 70,
                  backgroundColor: 'lightblue',
                  margin: 10,
                  position: 'relative',
                  borderRadius: 20,
                }}></View>
              <View>
                <Text style={{textAlign: 'center'}}>General Maintenance</Text>
              </View>
              {activeCard === 'General Maintenance' && showNotification && (
              <View
              style={{
                position: 'absolute',
                top: 0,
                right: 10,
                backgroundColor: 'yellow',
                padding: 10,
                borderRadius: 15,
              }}>
              <View style={{color: 'white'}}></View>
            </View>
            )}
            </TouchableOpacity>
          </View>

           <View style={{display: 'flex', flexDirection: 'column',}}>
            <TouchableOpacity onPress={() => handleCardPress('Home Service')}>
              <View
                style={{
                  padding: 70,
                  backgroundColor: 'lightblue',
                  margin: 10,
                  position: 'relative',
                  borderRadius: 20,
                }}></View>
              <View>
                <Text style={{textAlign: 'center'}}>Mess Complaints</Text>
              </View>
              {activeCard === 'Home Service' && showNotification && (
              <View
              style={{
                position: 'absolute',
                top: 0,
                right: 10,
                backgroundColor: 'yellow',
                padding: 10,
                borderRadius: 15,
              }}>
              <View style={{color: 'white'}}></View>
            </View>
            )}
            </TouchableOpacity>
          </View>     
          
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

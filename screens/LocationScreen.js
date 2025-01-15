
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, PermissionsAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MapView, { Marker } from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation'

const LocationScreen = () => {
  const [location, setLocation] = useState("")
  const [region, setRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [coordinates] = useState([
    {
      latitude: 12.9716,
      longitude: 77.5946,
    },
    {
      latitude: 13.0451,
      longitude: 77.6269,
    },
  ])
  useEffect(() => {
    getCurrentLoaction();
  }, [])

  const getCurrentLoaction = async () => {
    const isGranted= await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
    if(isGranted)
    {
      Geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        setRegion({ ...region, latitude, longitude });
        fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyA13oPu2cTwnb1keuURXnWrOvYvV-n9cJs`,
        ).then(response => response.json()).then(data => {
          console.log(data);
          if (data.results.length > 0) {
            setLocation(data.results[0].formatted_address);
          }
        }).catch((error) => console.log("Error fetching the location", error));
      })
    }
    else
    {
      const req= await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
      if(req===PermissionsAndroid.RESULTS.GRANTED)
      {
        getCurrentLoaction();
      }
      else
      {
        Alert.alert('Permission Denied', 'Location access is denied');
      }

    }
    
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ marginTop: 90, marginHorizontal: 20 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{
            width: 44,
            height: 44,
            borderRadius: 22,
            borderWidth: 2,
            borderColor: "black",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <MaterialIcons
              name="share-location"
              size={26}
              color="black" />

          </View>
          <Image
            style={{
              width: 100,
              height: 40
            }}
            source={{ uri: "https://cdn-icons-png.flaticon.com/128/10613/10613685.png" }} />
        </View>
        <Text style={{
          fontSize: 25,
          fontWeight: "bold",
          fontFamily: "GeezaPro-Bold",
          marginTop: 15
        }}>where do you live?</Text>
        <MapView
          style={{
            width: "100%",
            height: 500,
            marginTop: 20,
            borderRadius: 5
          }}
          initialRegion={{
            latitude: 13.0451,
            longitude: 77.6269,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }} >
          <Marker draggable coordinate={coordinates[1]}>
            <View>
              <Text style={{ textAlign: "center", fontSize: 14, fontWeight: "500" }}>{location}</Text>
            </View>
          </Marker>
        </MapView>
      </View>
    </SafeAreaView>
  )
}

export default LocationScreen

const styles = StyleSheet.create({})
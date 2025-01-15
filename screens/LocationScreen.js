
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MapView, { Marker } from 'react-native-maps'

const LocationScreen = () => {
  const [location,setLocation]=useState("")
  const [coordinates]=useState([
    {
      latitude: 12.9716,
      longitude: 77.5946,
    },
    {
      latitude: 13.0451,
      longitude: 77.6269,
    },
  ])
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
              <Text style={{textAlign:"center",fontSize:14,fontWeight:"500"}}>{location}</Text>
            </View>
          </Marker>
        </MapView>
      </View>
    </SafeAreaView>
  )
}

export default LocationScreen

const styles = StyleSheet.create({})
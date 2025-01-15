
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'

const EmailScreen = () => {
  const [email, setEmail] = useState("");
  const navigation = useNavigation();
  const handleNext = () => {
    navigation.navigate("Password");
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
            <Fontisto name="email" size={26} color="black" />

          </View>
          <Image
            style={{ width: 100, height: 40 }}
            source={{ uri: "https://cdn-icons-png.flaticon.com/128/10613/10613685.png" }} />
        </View>
        <Text style={{
          fontSize: 25,
          fontWeight: "bold",
          fontFamily: "GeezaPro-Bold",
          marginTop: 15
        }}
        >Please provide a valid email</Text>
        <Text style={{
          marginTop: 10,
          fontSize: 15, color: "gray"
        }}
        >Email verification helps us keep account secure</Text>
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Enter your email"
          placeholderTextColor="#BEBEBE"
          style={{
            width: 340,
            marginVertical: 10,
            marginTop: 20,
            borderBottomColor: "black",
            borderBottomWidth: 1,
            paddingBottom: 10,
            fontFamily: "GeezaPro-Bold",
            fontSize: 22
          }} />
        <Text style={{ color: "gray", marginTop: 7, fontSize: 15 }}>Not: You will be asked to verify your email</Text>
        <TouchableOpacity
          onPress={handleNext}
          activeOpacity={0.8}
          style={{
            marginTop: 30,
            marginLeft: "auto"
          }}>
          <MaterialCommunityIcons
            style={{ alignSelf: "center", marginTop: 20 }}
            name="arrow-right-circle"
            size={45}
            color="#581845" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default EmailScreen

const styles = StyleSheet.create({})
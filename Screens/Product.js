import React from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";

export default function Product({oyaMove,bgImage,title,price,title1}) {
  return (
    <TouchableOpacity
    onPress= {oyaMove}
      style={{
        backgroundColor: "#f5f5fa",
        height: 280,
        width: 160,
        borderRadius: 20,
        marginTop:20,
        marginRight: 10,
      }}

    >
        <ImageBackground
        style={{...StyleSheet.absoluteFillObject,backgroundColor:"#f5f5fa"}}
        source={bgImage}
        resizeMode="contain"
        imageStyle={{borderRadius:20}}
        >
        <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          alignSelf: "center",
          marginTop: 10,
         
        }}
      >
        <Image
       
          source={require("../assets/fire.png")}
          style={{ height: 25, width: 20 }}
        />
        <Text style={{fontWeight:"bold"}}>{title}</Text>
        <Text style={{marginLeft:3 ,fontWeight:"bold"}}>{price}</Text>
      </View>

        </ImageBackground>
      
    </TouchableOpacity>
  );
}

const Styles = StyleSheet.create({
  v1: { flex: 1 },
});

import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import Icon from "@expo/vector-icons/Entypo";
import CounterInput from "react-native-counter-input";

export default function Details({ navigation }) {
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
            marginHorizontal: 20,
          }}
        >
          <View style={{ width: "10%" }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={require("../assets/arrow.png")}
                style={{ height: 20, width: 30 }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ width: "80%", alignItems: "center" }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                alignSelf: "center",
              }}
            >
              <Image
                source={require("../assets/fire.png")}
                style={{ height: 20, width: 20 }}
              />

              <Text
                style={{
                  paddingHorizontal: 10,
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                300 calories
              </Text>
            </View>
          </View>

          <View style={{ width: "10%" }}>
            <Icon name="heart" color="#f9dd7a" size={26} />
          </View>
        </View>
        <Image
          source={require("../assets/burger.jpg")}
          style={{ height: 300, width: 300, alignSelf: "center" }}
        />

        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            alignItems: "center",
            paddingHorizontal: 20,
            paddingVertical: 8,
            borderRadius: 20,
          }}
        >
          <CounterInput
            decreaseButtonBackgroundColor={"#f9dd7a"}
            increaseButtonBackgroundColor={"#f9dd7a"}
            horizontal={true}
            onChange={(counter) => {}}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: 15,
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 25 }}>SmokeHouse</Text>
            <Text>Beef burger</Text>
          </View>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 25 }}>$12.99</Text>
          </View>
        </View>
        <Text style={{ fontWeight: "bold", padding: 10, fontSize: 25 }}>
          Ingredents
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 10 }}
        >
          <View
            style={{
              borderWidth: 0.1,
              borderRadius: 15,
              paddingVertical: 8,
              paddingHorizontal: 15,
            }}
          >
            <Image
              source={require("../assets/imagesBuger.png")}
              style={{ height: 40, width: 40 }}
            />
          </View>

          <View
            style={{
              borderWidth: 0.1,
              borderRadius: 15,
              paddingVertical: 8,
              paddingHorizontal: 15,
            }}
          >
            <Image
              source={require("../assets/imagesBuger.png")}
              style={{ height: 40, width: 40 }}
            />
          </View>

          <View
            style={{
              borderWidth: 0.1,
              borderRadius: 15,
              paddingVertical: 8,
              paddingHorizontal: 15,
            }}
          >
            <Image
              source={require("../assets/imagesBuger.png")}
              style={{ height: 40, width: 40 }}
            />
          </View>

          <View
            style={{
              borderWidth: 0.1,
              borderRadius: 15,
              paddingVertical: 8,
              paddingHorizontal: 15,
            }}
          >
            <Image
              source={require("../assets/imagesBuger.png")}
              style={{ height: 40, width: 40 }}
            />
          </View>

          <View
            style={{
              borderWidth: 0.1,
              borderRadius: 15,
              paddingVertical: 8,
              paddingHorizontal: 15,
            }}
          >
            <Image
              source={require("../assets/imagesBuger.png")}
              style={{ height: 40, width: 40 }}
            />
          </View>

          <View
            style={{
              borderWidth: 0.1,
              borderRadius: 15,
              paddingVertical: 8,
              paddingHorizontal: 15,
            }}
          >
            <Image
              source={require("../assets/imagesBuger.png")}
              style={{ height: 40, width: 40 }}
            />
          </View>

          <View
            style={{
              borderWidth: 0.1,
              borderRadius: 15,
              paddingVertical: 8,
              paddingHorizontal: 15,
            }}
          >
            <Image
              source={require("../assets/imagesBuger.png")}
              style={{ height: 40, width: 40 }}
            />
          </View>

          <View
            style={{
              borderWidth: 0.1,
              borderRadius: 15,
              paddingVertical: 8,
              paddingHorizontal: 15,
            }}
          >
            <Image
              source={require("../assets/imagesBuger.png")}
              style={{ height: 40, width: 40 }}
            />
          </View>
        </ScrollView>
        <Text style={{padding:10,textAlign:"justify",fontWeight:"bold",marginTop:10,color:"#a4a4a9"}}>

        Life is too short to miss out on beautiful things like a double cheeseburger
        I don’t know if you call a burger recession food. It’s comfort food
        Life is too short to miss out on beautiful things like a double cheeseburger
        I don’t know if you call a burger recession food. It’s comfort food
        </Text>
      </ScrollView>
<View style={{
marginTop:100,
  // position:"absolute",
  backgroundColor:"#000",
  height:50,
  width:50,
  // bottom:20,alignItems:"center",justifyContent:"center",alignSelf:"center",borderRadius:25
}}>
<Text>Add for $12.99</Text>

</View>

    </View>
  );
}

const Styles = StyleSheet.create({});

import React, { useState } from "react";
import { Text, View, Image, ScrollView, StyleSheet, StatusBar } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Icon from "@expo/vector-icons/Entypo";
import Product from "../Screens/Product";

export default function Home({navigation}) {
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <View style={{flex:1}}>
    <ScrollView style={{ backgroundColor: "#fff" }}>
       <StatusBar barStyle={"dark-content"} backgroundColor={"white"}/>
      <View style={Styles.v1}>
        <View
          style={{
            width: "10%",
            justifyContent: "flex-end",
          }}
        >
          <Image
            source={require("../assets/download.png")}
            style={{ height: 40, width: 40 }}
          />
        </View>
        <View style={{ width: "80%", alignItems: "center" }}>
          <Picker
            style={{ height: 50, width: 160 }}
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }
          >
            <Picker.Item label=" pick location" value=" pick location" />
            <Picker.Item label="ikeja" value="js" />

            <Picker.Item label="dopemu" value="dopemu" />
            <Picker.Item label="iyana ipaja" value="iyana ipaja" />
            <Picker.Item label="marry land" value="marry land" />
            <Picker.Item label="yaba" value="yaba" />
            <Picker.Item label="ikorodu" value="ikorodu" />
            <Picker.Item label="egbeda" value="egbeda" />
          </Picker>
        </View>

        <View style={{ width: "10%" }}>
          <Icon name="magnifying-glass" size={30} />
        </View>
      </View>

      <View style={{ paddingHorizontal: 20, marginTop: 50 }}>
        <Text style={{ fontSize: 28, fontWeight: "bold" }}>food that</Text>
        <Text style={{ fontSize: 28, fontWeight: "bold" }}>
          meet your needs
        </Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 20 }}
      >
        <View
          style={{
            marginTop: 40,
            alignItems: "center",
            flexDirection: "row",
            backgroundColor: "#f9dd7a",
            marginHorizontal: 15,
            borderRadius: 25,
            paddingVertical: 5,
            paddingHorizontal: 15,
          }}
        >
          <Image
            source={require("../assets/imagesBuger.png")}
            style={{ height: 40, width: 40 }}
          />

          <Text style={{ fontWeight: "bold", fontSize: 18, paddingLeft: 10 }}>
            Burgers
          </Text>
        </View>

        <View
          style={{
            marginTop: 40,
            alignItems: "center",
            flexDirection: "row",
            backgroundColor: "#f9dd7a",
            marginHorizontal: 15,
            borderRadius: 25,
            paddingVertical: 5,
            paddingHorizontal: 15,
          }}
        >
          <Image
            source={require("../assets/chicken.jpg")}
            style={{ height: 50, width: 60,borderRadius:15 }}
          />

          <Text style={{ fontWeight: "bold", fontSize: 18, paddingLeft: 10 }}>
          chicken
          </Text>
        </View>

        <View
          style={{
            marginTop: 40,
            alignItems: "center",
            flexDirection: "row",
            backgroundColor: "#f9dd7a",
            marginHorizontal: 15,
            borderRadius: 25,
            paddingVertical: 5,
            paddingHorizontal: 15,
          }}
        >
          <Image
            source={require("../assets/imagesBuger.png")}
            style={{ height: 40, width: 40 }}
          />

          <Text style={{ fontWeight: "bold", fontSize: 18, paddingLeft: 10 }}>
            Burgers
          </Text>
        </View>

        <View
          style={{
            marginTop: 40,
            alignItems: "center",
            flexDirection: "row",
            backgroundColor: "#f9dd7a",
            marginHorizontal: 15,
            borderRadius: 25,
            paddingVertical: 5,
            paddingHorizontal: 15,
          }}
        >
          <Image
            source={require("../assets/imagesBuger.png")}
            style={{ height: 40, width: 40 }}
          />

          <Text style={{ fontWeight: "bold", fontSize: 18, paddingLeft: 10 }}>
            Burgers
          </Text>
        </View>

        <View
          style={{
            marginTop: 40,
            alignItems: "center",
            flexDirection: "row",
            backgroundColor: "#f9dd7a",
            marginHorizontal: 15,
            borderRadius: 25,
            paddingVertical: 5,
            paddingHorizontal: 15,
          }}
        >
          <Image
            source={require("../assets/imagesBuger.png")}
            style={{ height: 40, width: 40 }}
          />

          <Text style={{ fontWeight: "bold", fontSize: 18, paddingLeft: 10 }}>
            Burgers
          </Text>
        </View>

        <View
          style={{
            marginTop: 40,
            alignItems: "center",
            flexDirection: "row",
            backgroundColor: "#f9dd7a",
            marginHorizontal: 15,
            borderRadius: 25,
            paddingVertical: 5,
            paddingHorizontal: 15,
          }}
        >
          <Image
            source={require("../assets/imagesBuger.png")}
            style={{ height: 40, width: 40 }}
          />

          <Text style={{ fontWeight: "bold", fontSize: 18, paddingLeft: 10 }}>
            Burgers
          </Text>
        </View>
      </ScrollView>
      <View
        style={{
          alignItems: "center",
          marginHorizontal: 20,
          flexDirection: "row",
          marginTop: 40,
        }}
      >
        <View style={{ width: "50%" }}>
          <Text style={{ fontSize: 22, fontWeight: "900" }}>New Product</Text>
        </View>
        <View style={{ alignItems: "flex-end", width: "50%" }}>
          <Icon name="dots-three-horizontal" size={20} />
        </View>
      </View>
      <View
        style={{ flexDirection: "row", marginHorizontal: 15, marginTop: 30 }}
      >
        <Product
          bgImage={require("../assets/meat.jpeg")}
          title="Meat"
          price="#12,000"
         
        />

        <Product
          bgImage={require("../assets/chicken.jpg")}
          title="Chicken wings"
          price="#500"
          marginTop={25}
          oyaMove={() =>navigation.navigate("Detailschicken")}
        />
      </View>

      <View
        style={{ flexDirection: "row", marginHorizontal: 15, marginTop: 30 }}
      >
        <Product
          bgImage={require("../assets/burger.jpg")}
          title="Burger"
          price="#150"
          oyaMove={() =>navigation.navigate("Details")}
        />

        <Product
          bgImage={require("../assets/jollofrice.jpg")}
          title="jollof-rice"
          
          price="#500"
          marginTop={25}
        />
      </View>
    </ScrollView>
    </View>
  );
}

const Styles = StyleSheet.create({
  v1: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 15,
    marginTop: 20,
  },
});

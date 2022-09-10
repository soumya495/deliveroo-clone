import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { XIcon } from "react-native-heroicons/solid";
import { Image } from "react-native";
import * as Progress from "react-native-progress";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../slices/restaurantSlice";
import MapView, { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";

const DeliveryScreen = () => {
  const restaurant = useSelector(selectRestaurant);
  const navigation = useNavigation();

  // console.log("RESTAURANT: ", restaurant);

  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView>
        <View className="p-5 flex-row items-center justify-between">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XIcon color="white" size={30} />
          </TouchableOpacity>
          <Text className="text-lg font-light text-white">Order Help</Text>
        </View>
        <View className="bg-white rounded-md p-6 shadow-md my-2 mx-5 z-50">
          <View className="flex-row justify-between items-center">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-4xl font-bold">45-55 Minutes</Text>
            </View>
            <Image
              source={{ uri: "https://links.papareact.com/fls" }}
              className="h-20 w-20"
            />
          </View>
          <Progress.Bar size={20} color="#00CCBB" indeterminate={true} />
          <Text className="text-gray-500 mt-3">
            Your Order at {restaurant.title} is being prepared !
          </Text>
        </View>
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="flex-1 -mt-10 -z-10"
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
          }}
          title={restaurant.title}
          description={restaurant.short_description}
          identifier="origin"
          pinColor="#00CCBB"
        />
      </MapView>
      <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
        />
        <View className="flex-1">
          <Text className="text-lg">Soumya Banerjee</Text>
          <Text className="text-gray-400">Your Rider</Text>
        </View>
        <Text className="mr-5 text-[#00CCBB] text-lg font-bold">Call</Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;

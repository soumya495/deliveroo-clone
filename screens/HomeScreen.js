import { View, Text, Image, TextInput, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect, useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  UserIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "featured"]{
        ...,
        restaurants[]->{
          ...,
          dishes[]->
        }
      }
    `
      )
      .then((data) => setFeaturedCategories(data));
  }, []);

  console.log("featured categories: ", featuredCategories);

  return (
    <SafeAreaView className="bg-white">
      <View className="flex-row justify-between items-center px-3 pt-3">
        <View className="flex-row items-center space-x-2">
          <Image
            source={{
              uri: "https://images.prismic.io/dbhq-deliveroo-riders-website/ed825791-0ba4-452c-b2cb-b5381067aad3_RW_hk_kit_importance.png",
            }}
            className="w-7 h-7 bg-gray-300 rounded-full p-4"
          />
          <View>
            <Text className="text-gray-400 text-xs font-bold">
              Deliver Now!
            </Text>
            <View className="flex-row items-center space-x-1">
              <Text className="text-xl font-bold">Current Location</Text>
              <ChevronDownIcon size={20} color="#00CCBB" />
            </View>
          </View>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>
      {/* SEARCH */}
      <View className="flex-row my-2 mt-3 items-center space-x-2 px-3 pb-3">
        <View className="bg-gray-200 space-x-2 flex-1 p-2 rounded-md flex-row items-center">
          <SearchIcon size={20} color="gray" />
          <TextInput
            className="w-full"
            placeholder="Restaurants and Cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsIcon size={35} color="#00CCBB" />
      </View>
      {/* Scrollable Container */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/* Categories */}
        <Categories />
        {/* Featured Rows */}
        {featuredCategories?.map((ctg) => (
          <FeaturedRow
            key={ctg._id}
            id={ctg._id}
            title={ctg.name}
            description={ctg.short_description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

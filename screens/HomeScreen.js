import { View, Text, Image, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  UserIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsIcon,
} from "react-native-heroicons/outline";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="p-3 px-4 bg-white">
      <View className="flex-row justify-between items-center">
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
      <View className="flex-row my-2 mt-3 items-center space-x-2">
        <View className="bg-gray-200 space-x-2 flex-1 p-2 rounded-md flex-row items-center">
          <SearchIcon size={20} color="gray" />
          <TextInput
            placeholder="Restaurants and Cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsIcon size={35} color="#00CCBB" />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { useLayoutEffect } from "react";
import { urlFor } from "../sanity";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  LocationMarkerIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import { QuestionMarkCircleIcon } from "react-native-heroicons/outline";
import DishRow from "../components/DishRow";
import BasketInfo from "../components/BasketInfo";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const {
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat,
  } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      <ScrollView>
        <View className="relative">
          <Image
            source={{
              uri: urlFor(imgUrl).url(),
            }}
            className="w-full h-56 bg-gray-300 p-4"
          />
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute bg-gray-100 p-2 top-14 left-5 rounded-full"
          >
            <ArrowLeftIcon size={20} color="#00CCBB" />
          </TouchableOpacity>
        </View>

        <View className="bg-white p-4">
          <Text className="font-bold text-2xl">{title}</Text>
          <View>
            <View className="flex-row items-center space-x-2 my-2">
              <StarIcon size={22} color="green" opacity={0.5} />
              <Text className="text-green-400">
                {rating} · <Text className="text-gray-400">Offers</Text>
              </Text>
              <LocationMarkerIcon size={22} color="gray" opacity={0.4} />
              <Text className="text-gray-400">Nearby · {address}</Text>
            </View>
            <Text className="text-gray-500 text-sm">{short_description}</Text>
          </View>
        </View>

        <TouchableOpacity className="bg-white p-4 border-y border-y-gray-400 flex-row items-center">
          <View className="flex-row items-center flex-1">
            <QuestionMarkCircleIcon size={22} color="gray" opacity={0.7} />
            <Text className="font-bold ml-3">Have a food allergy?</Text>
          </View>
          <ChevronRightIcon size={22} color="#00CCBB" />
        </TouchableOpacity>

        <View className="pb-[136px]">
          <Text className="p-5 text-2xl font-bold">Menu</Text>
          {/* Dish Rows */}
          {dishes?.map((dish) => (
            <DishRow
              key={dish._id}
              id={dish._id}
              name={dish.name}
              description={dish.short_description}
              price={dish.price}
              image={dish.image}
            />
          ))}
        </View>
      </ScrollView>
      {/* basket information */}
      <BasketInfo />
    </>
  );
};

export default RestaurantScreen;

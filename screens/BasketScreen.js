import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  getTotalBill,
  removeFromBasket,
  selectBasketItems,
} from "../slices/basketSlice";
import { selectRestaurant } from "../slices/restaurantSlice";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { XCircleIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";
import Currency from "react-currency-formatter";

const BasketScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const dishes = useSelector(selectBasketItems);
  const restaurant = useSelector(selectRestaurant);
  const subtotal = useSelector(getTotalBill);
  const [groupedDishes, setGroupedDishes] = useState([]);

  console.log("basket dishes", dishes);

  useEffect(() => {
    let groupDishes = {};
    dishes.forEach((dish) => {
      if (Object.keys(groupDishes).includes(dish.id)) {
        groupDishes[dish.id].push(dish);
      } else {
        groupDishes[dish.id] = [dish];
      }
    });
    setGroupedDishes(groupDishes);
  }, [dishes]);

  console.log("basket grouped dishes", groupedDishes);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="flex-row bg-white p-5 pt-2 border-b border-[#00CCBB] shadow-xs">
          <View className="flex-1">
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">
              {restaurant.title}
            </Text>
          </View>
          <TouchableOpacity onPress={navigation.goBack}>
            <XCircleIcon color="#00CCBB" height={50} width={50} />
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center bg-white my-5 p-4">
          <View className="flex-1 flex-row items-center space-x-4">
            <Image
              source={{
                uri: "https://images.prismic.io/dbhq-deliveroo-riders-website/ed825791-0ba4-452c-b2cb-b5381067aad3_RW_hk_kit_importance.png",
              }}
              className="h-7 w-7 bg-gray-300 p-4 rounded-full"
            />
            <Text>Deliver in 50-75 min</Text>
          </View>
          <TouchableOpacity>
            <Text className="text-[#00CCBB]">Change</Text>
          </TouchableOpacity>
        </View>
        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupedDishes).map(([key, items]) => (
            <View
              key={key}
              className="flex-row items-center bg-white p-4 space-x-3"
            >
              <Text className="text-[#00CCBB]">{items.length} x</Text>
              <Image
                source={{
                  uri: urlFor(items[0]?.image).url(),
                }}
                className="h-12 w-12 rounded-full"
              />
              <Text className="flex-1">{items[0]?.name}</Text>
              <Text className="text-gray-500">
                <Currency quantity={items[0]?.price} currency="GBP" />
              </Text>
              <TouchableOpacity
                onPress={() => dispatch(removeFromBasket({ id: key }))}
              >
                <Text className="text-[#00CCBB] text-xs">Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View className="bg-white p-5 space-y-3">
          <View className="flex-row justify-between">
            <Text className="text-gray-400 text-lg">Subtotal</Text>
            <Text className="text-gray-400 text-lg">
              <Currency quantity={subtotal} currency="GBP" />
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-400 text-lg">Delivery Fee</Text>
            <Text className="text-gray-400 text-lg">
              <Currency quantity={5.99} currency="GBP" />
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-lg">Order Total</Text>
            <Text className="font-bold text-lg">
              <Currency quantity={subtotal + 5.99} currency="GBP" />
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("PreparingOrder")}
            className="rounded-lg bg-[#00CCBB] p-4 "
          >
            <Text className="text-center text-white text-xl">Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;

import { View, Text, Image, TouchableOpacity } from "react-native";
import { urlFor } from "../sanity";
import Currency from "react-currency-formatter";
import { useState } from "react";
import { PlusCircleIcon, MinusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  getDishesWithId,
  removeFromBasket,
  selectBasketItems,
} from "../slices/basketSlice";

const DishRow = ({ id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);
  const dispatch = useDispatch();
  const dishes = useSelector((state) => getDishesWithId(state, id));

  const addDishToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };

  const removeDishFromBasket = () => {
    if (dishes.length <= 0) return;
    dispatch(removeFromBasket({ id }));
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed((prev) => !prev)}
        className={`flex-row bg-white p-4 border border-gray-200 space-x-2 ${
          isPressed && "border-b-0"
        }`}
      >
        <View className="flex-1">
          <Text className="text-xl">{name}</Text>
          <Text className="text-gray-400 my-1">{description}</Text>
          <Text className="text-gray-500">
            <Currency quantity={price} currency="GBP" />
          </Text>
        </View>
        <Image
          source={{
            uri: urlFor(image).url(),
          }}
          className="w-20 h-20"
        />
      </TouchableOpacity>
      {isPressed && (
        <View className="flex-row p-4 bg-white items-center space-x-2">
          <TouchableOpacity
            disabled={!dishes.length}
            onPress={() => removeDishFromBasket()}
          >
            <MinusCircleIcon
              size={32}
              color={dishes.length > 0 ? "#00CCBB" : "gray"}
            />
          </TouchableOpacity>
          <Text>{dishes.length}</Text>
          <TouchableOpacity onPress={() => addDishToBasket()}>
            <PlusCircleIcon size={32} color="#00CCBB" />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default DishRow;

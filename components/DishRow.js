import { View, Text, Image, TouchableOpacity } from "react-native";
import { urlFor } from "../sanity";
import Currency from "react-currency-formatter";
import { useState } from "react";
import { PlusCircleIcon, MinusCircleIcon } from "react-native-heroicons/solid";

const DishRow = ({ name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);

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
          <TouchableOpacity>
            <MinusCircleIcon size={32} color="#00CCBB" />
          </TouchableOpacity>
          <Text>{0}</Text>
          <TouchableOpacity>
            <PlusCircleIcon size={32} color="#00CCBB" />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default DishRow;

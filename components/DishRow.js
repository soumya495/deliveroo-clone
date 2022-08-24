import { View, Text, Image } from "react-native";
import { urlFor } from "../sanity";
import Currency from "react-currency-formatter";

const DishRow = ({ name, description, price, image }) => {
  return (
    <View className="flex-row bg-white p-4 border-t-[0.5px] border-y-gray-300">
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
    </View>
  );
};

export default DishRow;

import { View, Text, TouchableOpacity, Image } from "react-native";
import { StarIcon } from "react-native-heroicons/solid";
import { LocationMarkerIcon } from "react-native-heroicons/outline";
import { urlFor } from "../sanity";

const RestaurantCard = ({
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
}) => {
  return (
    <TouchableOpacity className="overflow-hidden bg-white mr-3">
      <Image
        source={{
          uri: urlFor(imgUrl).url(),
        }}
        className="w-64 h-32 rounded-t-md"
      />
      <View className="p-3 py-4 rounded-b-md">
        <Text className="text-xl font-bold">{title}</Text>
        <View className="mt-1 mb-2 flex-row items-center space-x-1">
          <StarIcon fill="green" size={25} opacity={0.5} />
          <Text className="text-gray-500 ">
            <Text className="text-green-400">{rating}</Text> · {genre}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <LocationMarkerIcon size={25} color="gray" opacity={0.4} />
          <Text className="text-gray-500">
            Nearby · {address.slice(0, 15) + `${address.length > 15 && "..."}`}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;

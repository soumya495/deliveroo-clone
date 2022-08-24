import { View, Text, TouchableOpacity, Image } from "react-native";
import { urlFor } from "../sanity";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="mr-3 relative">
      <Image
        source={{
          uri: urlFor(imgUrl).url(),
        }}
        className="w-20 h-20 rounded-md"
      />
      <Text className="absolute bottom-1 left-1 text-white font-bold text-md">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;

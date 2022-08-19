import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="mr-3 relative">
      <Image
        source={{
          uri: imgUrl,
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

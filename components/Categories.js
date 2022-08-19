import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 15,
      }}
    >
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Title 1" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Title 2" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Title 3" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Title 4" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Title 5" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Title 6" />
    </ScrollView>
  );
};

export default Categories;

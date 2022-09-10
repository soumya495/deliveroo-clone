import { View, Text, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import sanityClient from "../sanity";

const FeaturedRow = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "featured" && _id == $id]{
        ...,
        restaurants[]->{
          ...,
          dishes[]->,
          type->{
            name
          }
        }
      }[0]
    `,
        { id }
      )
      .then((data) => setRestaurants(data?.restaurants));
  }, []);

  // console.log("Restaurants: ", restaurants);

  return (
    <View className="p-3">
      <View className="flex-row justify-between items-center">
        <Text className="font-bold text-2xl">{title}</Text>
        <ArrowRightIcon size={35} color="#00CCBB" />
      </View>
      <Text className="text-sm text-gray-500">{description}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 15,
        }}
      >
        {/* Restaurant Card */}
        {restaurants?.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type?.name}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;

import { View, Text, TouchableOpacity } from "react-native";
import Currency from "react-currency-formatter";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectBasketItems, getTotalBill } from "../slices/basketSlice";

const BasketInfo = () => {
  const navigation = useNavigation();

  const dishesInBasket = useSelector(selectBasketItems);
  const totalBill = useSelector(getTotalBill);

  return (
    <TouchableOpacity className="absolute bottom-7 w-full flex-row justify-center">
      <View className="w-11/12 bg-[#00CCBB] flex-row p-4 rounded-lg items-center justify-between">
        <View className="bg-[#20aea3] p-2 px-4 rounded-md">
          <Text className="text-xl font-bold text-white">
            {dishesInBasket.length}
          </Text>
        </View>
        <Text className="text-xl font-bold text-white flex-1 text-center">
          View Basket
        </Text>
        <Text className="text-xl font-bold text-white">
          <Currency quantity={totalBill} currency="GBP" />
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default BasketInfo;

import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <SafeAreaView>
      <View>
        <Text>HomeScreen</Text>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
import { Link, useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const SubscriptionDetails = () => {

    const {id} = useLocalSearchParams<{id: string}>()
  return (
    <View>
      <Text>SubscriptionDetails</Text>
      <Text>ID: {id}</Text>
      <Link href="/(tabs)/subscriptions" className="mt-4 rounded bg-success px-4 py-2">
        <Text className="text-background">Go to Subscriptions</Text>
      </Link>
    </View>
  )
}

export default SubscriptionDetails
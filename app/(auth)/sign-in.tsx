import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const SignIn = () => {
  return (
    <View>
      <Text>sign-in</Text>
      <Link href="/(auth)/sign-up" className="mt-4 rounded bg-success px-4 py-2">
        <Text className="text-background">Go to Sign Up</Text>
      </Link>
    </View>
  )
}

export default SignIn
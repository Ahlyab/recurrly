import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const SignUp = () => {
  return (
    <View>
      <Text>sign-up</Text>
      <Link href="/(auth)/sign-in" className="mt-4 rounded bg-success px-4 py-2">
        <Text className="text-background">Go to Sign In</Text>
      </Link>
    </View>
  )
}

export default SignUp
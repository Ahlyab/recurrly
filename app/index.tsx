import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background ">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link href="/onboarding" className="mt-4 rounded bg-success px-4 py-2">
        <Text className="text-background">Get Started</Text>
      </Link>
      <Link href="/(auth)/sign-in" className="mt-4 rounded bg-success px-4 py-2">
        <Text className="text-background">Go to Sign In</Text>
      </Link>
      <Link href="/(auth)/sign-in" className="mt-4 rounded bg-success px-4 py-2">
        <Text className="text-background">Go to Sign In</Text>
      </Link>
      <Link href="/(tabs)/subscriptions/claude" className="mt-4 rounded bg-success px-4 py-2">
        <Text className="text-background">Go to Subscription claude</Text>
      </Link>
    </View>
  );
}
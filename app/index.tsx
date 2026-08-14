import "@/global.css";
import { Text, View } from "react-native";
 
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
      <Text>
        I can use tailwind classes in my React Native components, and they will be compiled to native styles at build time.
      </Text>
    </View>
  );
}
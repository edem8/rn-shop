import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";

export default function CategoryLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="[slug]"
        options={({ navigation }) => ({
          headerShown: false,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack>
  );
}

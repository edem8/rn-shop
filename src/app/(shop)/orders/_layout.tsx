import { Stack } from "expo-router";
import React from "react";

export default function OrderLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Orders", headerShown: false }}
      />
      <Stack.Screen name="[slug]" options={{}} />
    </Stack>
  );
}

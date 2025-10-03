import { Stack } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(shop)"
        options={{ title: "Shop", headerShown: false }}
      />
      <Stack.Screen
        name="categories"
        options={{ title: "Category", headerShown: false }}
      />
      <Stack.Screen
        name="products"
        options={{ title: "Product", headerShown: false }}
      />
      <Stack.Screen
        name="auth"
        options={{ title: "Authentication", headerShown: false }}
      />
      <Stack.Screen
        name="cart"
        options={{ title: "Cart", headerShown: false, presentation: "modal" }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({});

import { Stack } from "expo-router";
import React from "react";
import { ToastProvider } from "react-native-toast-notifications";
import AuthProvider from "../providers/auth-provider";

export default function RootLayout() {
  return (
    <ToastProvider>
      <AuthProvider>
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
            options={{
              title: "Shopping cart",
              headerShown: true,
              presentation: "modal",
            }}
          />
        </Stack>
      </AuthProvider>
    </ToastProvider>
  );
}

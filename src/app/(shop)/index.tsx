import { PRODUCTS } from "@/assets/products";
import ListHeader from "@/components/list-header";
import ProductListItem from "@/components/product-list-item";
import { getProductsAndCategories } from "@/src/api/api";
import React from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";

export default function index() {
  const { data, error, isPending } = getProductsAndCategories();

  if (isPending) return <ActivityIndicator />

  if (error) return <View><Text>{error.message || "An error occurred"}</Text></View>

  return (
    <View>
      <FlatList
        data={data.products}
        renderItem={({ item }) => <ProductListItem product={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        ListHeaderComponent={<ListHeader />}
        contentContainerStyle={styles.flatListContent}
        columnWrapperStyle={styles.flatListColumn}
        style={{ paddingHorizontal: 10, paddingVertical: 5 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flatListContent: {
    paddingBottom: 20,
  },
  flatListColumn: {
    justifyContent: "space-between",
  },
});

import React from "react";
import { StyleSheet } from "react-native";
import Auth from "../auth";

export default function index() {
  return (
    <Auth />
    // <View>
    //   <FlatList
    //     data={PRODUCTS}
    //     renderItem={({ item }) => <ProductListItem product={item} />}
    //     keyExtractor={(item) => item.id.toString()}
    //     numColumns={2}
    //     ListHeaderComponent={<ListHeader />}
    //     contentContainerStyle={styles.flatListContent}
    //     columnWrapperStyle={styles.flatListColumn}
    //     style={{ paddingHorizontal: 10, paddingVertical: 5 }}
    //   />

    // </View>
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

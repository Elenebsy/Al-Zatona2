import React from "react";
import { StyleSheet, Text, View ,Pressable} from "react-native";
import { useRouter } from "expo-router";

export default function Course() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text>Course</Text>
      <Pressable onPress={() => router.push("/account/Welcome")}>
        <Text>List</Text>
        </Pressable>
      <Pressable onPress={() => router.push("/profile/profile")}>
        <Text>profile</Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

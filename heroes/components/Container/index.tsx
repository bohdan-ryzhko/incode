import { FC, PropsWithChildren } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

export const Container: FC<PropsWithChildren> = ({ children }) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#f6f5f3',
  },
});

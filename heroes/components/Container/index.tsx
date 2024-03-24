import { FC, PropsWithChildren } from "react";
import { Platform, SafeAreaView, StyleSheet, View } from "react-native";

export const Container: FC<PropsWithChildren> = ({ children }) => {
  return Platform.OS === 'android'
    ? <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    : <View style={[styles.container, styles.iosContainer]}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#f6f5f3',
  },
  iosContainer: {
    marginTop: 20,
  },
});

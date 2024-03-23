import { FC } from "react";
import { ActivityIndicator, SafeAreaView, StyleSheet } from "react-native";

export const LoadingScreen: FC = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <ActivityIndicator size="large" color={'#E55435'} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

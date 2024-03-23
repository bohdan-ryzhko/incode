import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useStore } from "../../../../hooks";

export const FavoriteInfoPanel: FC = () => {
  const { favoriteHeroes } = useStore();

  return (
    <View style={styles.panel}>
      <View>
        <Text style={styles.count}>{favoriteHeroes.female.length}</Text>
        <Text style={styles.text}>Female fans</Text>
      </View>
      <View>
        <Text style={styles.count}>{favoriteHeroes.male.length}</Text>
        <Text style={styles.text}>Male fans</Text>
      </View>
      <View>
        <Text style={styles.count}>{favoriteHeroes.other.length}</Text>
        <Text style={styles.text}>Others</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  panel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  card: {
    flexBasis: '20%',
  },
  count: {
    fontSize: 20,
  },
  text: {
    fontSize: 14,
  },
});

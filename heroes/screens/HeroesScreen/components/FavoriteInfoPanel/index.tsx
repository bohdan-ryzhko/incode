import { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useAppDispatch, useStore } from "../../../../hooks";
import { clearFavoriteHeroes } from "../../../../redux/store";

export const FavoriteInfoPanel: FC = () => {
  const { favoriteHeroes } = useStore();
  const dispatch = useAppDispatch();

  return (
    <View style={styles.panel}>
      <View style={styles.info}>
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
      <TouchableOpacity
        style={styles.clearHeroes}
        onPress={() => dispatch(clearFavoriteHeroes())}
      >
        <Text style={styles.clearHeroesText}>Clear</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  panel: {
    marginTop: 10,
  },
  info: {
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
  clearHeroes: {
    borderWidth: 1,
    borderColor: '#e86258',
    padding: 10,
    borderRadius: 8,
  },
  clearHeroesText: {
    textAlign: 'center',
    color: '#e86258',
  },
});

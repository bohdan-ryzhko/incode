import { FC, useEffect } from "react";
import { Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Human } from "../../../../d";
import { useAppDispatch, useStore } from "../../../../hooks";
import { addFavoriteHero, fetchHomeWorld, fetchSpecies } from "../../../../redux/store";
import { removeBaseUrl } from "../../../../utils";

type HeroCardProps = {
  hero: Human,
  order: number,
}

export const HeroCard: FC<HeroCardProps> = ({ hero, order }) => {
  const dispatch = useAppDispatch();
  const { favoriteHeroes, heroes } = useStore();

  useEffect(() => {
    if (hero.homeworld === undefined || hero.species[0] === undefined) return;

    dispatch(fetchHomeWorld(removeBaseUrl(hero.homeworld)));
    dispatch(fetchSpecies(removeBaseUrl(hero.species[0])));
  }, [dispatch, hero.homeworld, hero.species]);

  const isIncliudeFavoriteHero = (name: string) =>
    favoriteHeroes.female.includes(name) || favoriteHeroes.male.includes(name) || favoriteHeroes.other.includes(name);

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={() => dispatch(addFavoriteHero({ type: hero.gender, name: hero.name }))}>
        <Text style={[
          styles.heard,
          (Platform.OS === 'android' && !isIncliudeFavoriteHero(hero.name)) && styles.androidHeard
        ]}>{
            isIncliudeFavoriteHero(hero.name)
              ? '\u2665'
              : '\u2661'
          }</Text>
      </TouchableOpacity>
      <View style={styles.info}>
        <Text>Name: {hero.name}</Text>
        <Text>Birth Year: {hero.birth_year}</Text>
        <Text>Gender: {hero.gender}</Text>
        <Text>Home World: {
          (heroes.home[order]?.name !== undefined) &&
          (heroes.home[order]?.name)
        }</Text>
        <Text>Species: {
          (heroes.species[order]?.name !== undefined) &&
          (heroes.species[order]?.name)
        }</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
  },
  info: {
    gap: 5,
  },
  heard: {
    fontSize: 20,
    color: '#e86258',
  },
  androidHeard: {
    fontSize: 35,
  },
});

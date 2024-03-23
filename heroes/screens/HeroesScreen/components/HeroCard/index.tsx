import { FC, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
        <Text style={[!isIncliudeFavoriteHero(hero.name) && styles.heard]}>{
          isIncliudeFavoriteHero(hero.name)
            ? '\u2665'
            : '\u2661'
        }</Text>
      </TouchableOpacity>
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
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
  },
  heard: {
    fontSize: 24,
  },
});

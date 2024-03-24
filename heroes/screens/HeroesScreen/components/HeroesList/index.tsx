import { FC, useEffect } from "react";
import { useAppDispatch, useStore } from "../../../../hooks";
import { clearAdditionalInfo, fetchPeople } from "../../../../redux/store";
import { FlatList, StyleSheet, View } from "react-native";
import { HeroCard } from "../HeroCard";
import { LoadingScreen } from "../../../../components";

export const HeroesList: FC = () => {
  const dispatch = useAppDispatch();
  const { heroes } = useStore();

  useEffect(() => {
    dispatch(clearAdditionalInfo());
    dispatch(fetchPeople(heroes.page));
  }, [dispatch, heroes.page]);

  return (
    heroes.isLoading
      ? <LoadingScreen />
      : <View style={styles.list}>
        <FlatList
          data={heroes.people.results}
          renderItem={({ item, index }) => <HeroCard hero={item} order={index} />}
          refreshing={false}
          onRefresh={() => dispatch(fetchPeople(1))}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  list: {
    marginBottom: 190,
  },
});

import { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useAppDispatch, useStore } from "../../../../hooks";
import { goNextPage, goPreviousPage } from "../../../../redux/store";

export const PaginationPanel: FC = () => {
  const dispatch = useAppDispatch();
  const { heroes } = useStore();

  return (
    <View style={styles.bottomaPanel}>
      <TouchableOpacity onPress={() => {
        if (!heroes.isLoading) {
          dispatch(goPreviousPage());
        }
      }}>
        <Text style={[styles.arrow, !heroes.people.previous && styles.disableArrow]}>{'\u25C2'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        if (!heroes.isLoading) {
          dispatch(goNextPage());
        }
      }}>
        <Text style={[styles.arrow, !heroes.people.next && styles.disableArrow]}>{'\u25B8'}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  bottomaPanel: {
    height: 70,
    width: '100%',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    shadowColor: 'black',
    borderWidth: 1,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  arrow: {
    fontSize: 34,
    color: 'black',
  },
  disableArrow: {
    color: '#d1d1d1',
  },
});
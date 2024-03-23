import { useSelector } from "react-redux";
import { AppState } from "../redux/store";
import { selectFavoriteHeroes, selectHeroes } from "../redux/selectors";


export const useStore = (): AppState => ({
  heroes: useSelector(selectHeroes),
  favoriteHeroes: useSelector(selectFavoriteHeroes),
});

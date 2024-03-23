import { FC } from "react";
import { Container } from "../../components";
import { HeroesList, PaginationPanel, FavoriteInfoPanel } from "./components";

export const HeroesScreen: FC = () => {
  return (
    <>
      <Container>
        <FavoriteInfoPanel />
        <HeroesList />
      </Container>
      <PaginationPanel />
    </>
  );
}

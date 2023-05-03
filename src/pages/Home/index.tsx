import { CoffeesList } from "./components/CoffeesList";
import { Intro } from "./components/Intro";
import { HomeContainer } from "./styles";

export function HomePage() {
  return (
    <HomeContainer>
      <Intro />
      <CoffeesList />
    </HomeContainer>
  );
}

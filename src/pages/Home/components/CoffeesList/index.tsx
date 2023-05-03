import { TitleText } from "../../../../components/Typography";
import { CoffeeCard } from "../CoffeeCard";
import { CoffeesListContainer, CoffeesListContent } from "./styles";

export function CoffeesList() {
  return (
    <CoffeesListContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos cafés
      </TitleText>
      <CoffeesListContent>
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </CoffeesListContent>
    </CoffeesListContainer>
  );
}

import { TitleText } from "../../../../components/Typography";
import { coffees } from "../../../../data/coffees";
import { CoffeeCard } from "../CoffeeCard";
import { CoffeesListContainer, CoffeesListContent } from "./styles";

export function CoffeesList() {
  return (
    <CoffeesListContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos cafés
      </TitleText>
      <CoffeesListContent>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeesListContent>
    </CoffeesListContainer>
  );
}

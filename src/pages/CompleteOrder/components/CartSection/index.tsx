import { TitleText } from "../../../../components/Typography";
import { CartCard } from "../CartCard";
import { ConfirmationSection } from "./ConfirmationSection";
import { CartSectionContainer, DetailsContainer } from "./styles";

export function CartSection() {
  return (
    <CartSectionContainer>
      <TitleText size="xs" color="subtitle">
        Cafés selecionados
      </TitleText>

      <DetailsContainer>
        <CartCard />
        <CartCard />
        <CartCard />

        <ConfirmationSection />
      </DetailsContainer>
    </CartSectionContainer>
  );
}

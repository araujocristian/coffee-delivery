import { TitleText } from "../../../../components/Typography";
import { CartSectionContainer, DetailsContainer } from "./styles";

export function CartSection() {
  return (
    <CartSectionContainer>
      <TitleText size="xs" color="subtitle">
        Cafés selecionados
      </TitleText>

      <DetailsContainer>
        <p>items</p>
      </DetailsContainer>
    </CartSectionContainer>
  );
}

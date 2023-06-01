import { TitleText } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { CartCard } from "../CartCard";
import { ConfirmationSection } from "./ConfirmationSection";
import { CartSectionContainer, DetailsContainer } from "./styles";

export function CartSection() {
  const { cartItens } = useCart();

  return (
    <CartSectionContainer>
      <TitleText size="xs" color="subtitle">
        Cafés selecionados
      </TitleText>

      <DetailsContainer>
        {cartItens.map((item) => (
          <CartCard item={item} key={item.id} />
        ))}
        <ConfirmationSection />
      </DetailsContainer>
    </CartSectionContainer>
  );
}

import { Trash } from "phosphor-react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/Typography";
import { ActionsContainer, CartCardContainer, RemoveButton } from "./styles";

export function CartCard() {
  return (
    <CartCardContainer>
      <div>
        <img src="" alt="" />
        <div>
          <RegularText color="subtitle">Espresso Tradicional</RegularText>
          <ActionsContainer>
            <QuantityInput size="s" />
            <RemoveButton>
              <Trash size={16} />
              Remover
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>
      <p>R$ 9,90</p>
    </CartCardContainer>
  );
}

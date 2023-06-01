import { Button } from "../../../../components/Button";
import { RegularText } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { ConfirmationSectionContainer } from "./styles";

export function ConfirmationSection() {
  const { cartItensTotal, cartQuantity } = useCart();
  const deliveryPrice = 3.9;

  const formattedCartItensTotal = formatMoney(cartItensTotal);
  const formattedDeliveryPrice = formatMoney(deliveryPrice);
  const formattedTotal = formatMoney(cartItensTotal + deliveryPrice);
  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText>R$ {formattedCartItensTotal}</RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>R$ {formattedDeliveryPrice}</RegularText>
      </div>
      <div>
        <RegularText weight="700" color="subtitle" size="l">
          Total
        </RegularText>
        <RegularText weight="700" color="subtitle" size="l">
          R$ {formattedTotal}
        </RegularText>
      </div>

      <Button text="Confirmar Pedido" disabled={cartQuantity <= 0} />
    </ConfirmationSectionContainer>
  );
}

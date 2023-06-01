import { Trash } from "phosphor-react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/Typography";
import { CartItem } from "../../../../contexts/CartContext";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { ActionsContainer, CartCardContainer, RemoveButton } from "./styles";

interface CartCardProps {
  item: CartItem;
}
export function CartCard({ item }: CartCardProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart();

  function handleIncreaseQuantity() {
    changeCartItemQuantity(item.id, "increase");
  }

  function handleDecreaseQuantity() {
    changeCartItemQuantity(item.id, "decrease");
  }

  function handleRemoveItem() {
    removeCartItem(item.id);
  }

  const coffeeTotalPrice = item.price * item.quantity;
  const formattedPrice = formatMoney(coffeeTotalPrice);

  return (
    <CartCardContainer>
      <div>
        <img src={`/coffees/${item.photo}`} alt={item.description} />
        <div>
          <RegularText color="subtitle">{item.name}</RegularText>
          <ActionsContainer>
            <QuantityInput
              onIncrease={handleIncreaseQuantity}
              onDecrease={handleDecreaseQuantity}
              quantity={item.quantity}
              size="s"
            />
            <RemoveButton onClick={handleRemoveItem}>
              <Trash size={16} />
              Remover
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>
      <p>R$ {formattedPrice}</p>
    </CartCardContainer>
  );
}

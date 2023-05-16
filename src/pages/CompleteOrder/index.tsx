import { CartSection } from "./components/CartSection";
import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { CompleteOrderContainer } from "./styles";

export function CompleteOrderPage() {
  return (
    <CompleteOrderContainer className="container">
      <CompleteOrderForm></CompleteOrderForm>
      <CartSection />
    </CompleteOrderContainer>
  );
}

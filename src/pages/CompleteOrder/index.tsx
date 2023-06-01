import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as zod from "zod";
import { useCart } from "../../hooks/useCart";
import { CartSection } from "./components/CartSection";
import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { CompleteOrderContainer } from "./styles";

enum PaymentMethods {
  CREDIT_CARD = "CREDIT_CARD",
  DEBIT_CARD = "DEBIT_CARD",
  MONEY = "MONEY",
}

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(8, "CEP inválido").max(8, "CEP inválido"),
  street: zod.string().min(3, "Rua inválida"),
  number: zod.string().min(1, "Número inválido"),
  complement: zod.string(),
  neighborhood: zod.string().min(3, "Bairro inválido"),
  city: zod.string().min(3, "Cidade inválida"),
  uf: zod.string().min(2, "UF inválido"),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: "Informe o método de pagamento" };
    },
  }),
});

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>;

export function CompleteOrderPage() {
  const { clearCart } = useCart();

  const confirmOrderForm = useForm<OrderData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  });

  const navigate = useNavigate();

  const { handleSubmit } = confirmOrderForm;

  function handleConfirmOrder(data: OrderData) {
    navigate("/orderConfirmed", {
      state: data,
    });

    clearCart();
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <CompleteOrderContainer
        className="container"
        onSubmit={handleSubmit(handleConfirmOrder)}
      >
        <CompleteOrderForm />
        <CartSection />
      </CompleteOrderContainer>
    </FormProvider>
  );
}

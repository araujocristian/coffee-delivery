import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import * as zod from "zod";
import { CartSection } from "./components/CartSection";
import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { CompleteOrderContainer } from "./styles";

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(8, "CEP inválido").max(8, "CEP inválido"),
});

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>;

export function CompleteOrderPage() {
  const confirmOrderForm = useForm<OrderData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  });

  const { handleSubmit } = confirmOrderForm;

  function handleConfirmOrder(data: OrderData) {
    console.log(data);
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

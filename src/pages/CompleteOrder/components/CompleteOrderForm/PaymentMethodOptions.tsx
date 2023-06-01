import { Bank, CreditCard, Money } from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { RegularText } from "../../../../components/Typography";
import { PaymentMethodInput } from "../PaymentMethodInput";
import { PaymentMethodOptionsContainer } from "./styles";

export const PAYMENT_METHOD_OPTIONS = [
  {
    label: "Cartão de Crédito",
    value: "CREDIT_CARD",
    icon: <CreditCard size={16} />,
  },
  {
    label: "Cartão de Débito",
    value: "DEBIT_CARD",
    icon: <Bank size={16} />,
  },
  {
    label: "Dinheiro",
    value: "MONEY",
    icon: <Money size={16} />,
  },
];

export function PaymentMethodOptions() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const paymentMethodError = errors.paymentMethod?.message as unknown as string;

  return (
    <PaymentMethodOptionsContainer>
      {PAYMENT_METHOD_OPTIONS.map(({ label, value, icon }) => (
        <PaymentMethodInput
          key={value}
          label={label}
          id={value}
          value={value}
          icon={icon}
          {...register("paymentMethod")}
        />
      ))}
      {paymentMethodError && (
        <RegularText size="s">{paymentMethodError}</RegularText>
      )}
    </PaymentMethodOptionsContainer>
  );
}

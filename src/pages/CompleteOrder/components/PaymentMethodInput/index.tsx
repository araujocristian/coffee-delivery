import { InputHTMLAttributes, ReactNode, forwardRef } from "react";
import { ContentContainer, PaymentMethodInputContainer } from "./styles";

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  id: string;
  icon: ReactNode;
};

export const PaymentMethodInput = forwardRef<
  HTMLInputElement,
  PaymentMethodInputProps
>(({ label, icon, id, ...props }, ref) => {
  return (
    <PaymentMethodInputContainer>
      <input type="radio" name="paymentMethod" id={id} ref={ref} {...props} />
      <label htmlFor={id}>
        <ContentContainer>
          {icon}
          {label}
        </ContentContainer>
      </label>
    </PaymentMethodInputContainer>
  );
});

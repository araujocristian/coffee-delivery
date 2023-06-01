import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import confirmedOrderIllustration from "../../assets/confirmed-order.svg";
import { InfoWithIcon } from "../../components/InfoWithIcon";
import { RegularText, TitleText } from "../../components/Typography";
import { OrderData } from "../CompleteOrder";
import { PAYMENT_METHOD_OPTIONS } from "../CompleteOrder/components/CompleteOrderForm/PaymentMethodOptions";
import { OrderConfirmedContainer, OrderDetailsContainer } from "./styles";

interface LocationType {
  state: OrderData;
}

export function OrderConfirmedPage() {
  const { colors } = useTheme();

  const { state } = useLocation() as unknown as LocationType;

  const navigate = useNavigate();

  function getPaymentMethod(value: string) {
    return PAYMENT_METHOD_OPTIONS.find((option) => option.value === value)
      ?.label;
  }

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, []);

  if (!state) {
    return <></>;
  }

  return (
    <OrderConfirmedContainer className="container">
      <div>
        <TitleText size="l">Pedido confirmado!</TitleText>
        <RegularText size="l" color="subtitle">
          Agora é só aguardar que logo o café chegará até você.
        </RegularText>
      </div>

      <section>
        <OrderDetailsContainer>
          <InfoWithIcon
            icon={<MapPin weight="fill" />}
            iconBg={colors["brand-purple"]}
            text={
              <RegularText>
                Entrega em{" "}
                <strong>
                  {state.street}, {state.number}
                </strong>
                <br />
                {state.neighborhood} - {state.city}, {state.uf}
              </RegularText>
            }
          />
          <InfoWithIcon
            icon={<Clock weight="fill" />}
            iconBg={colors["brand-yellow"]}
            text={
              <RegularText>
                Previsão de entrega
                <br />
                <strong>20 - 30 minutos</strong>
              </RegularText>
            }
          />
          <InfoWithIcon
            icon={<CurrencyDollar weight="fill" />}
            iconBg={colors["brand-yellow-dark"]}
            text={
              <RegularText>
                Pagamento na entrega
                <br />
                <strong>{getPaymentMethod(state.paymentMethod)}</strong>
              </RegularText>
            }
          />
        </OrderDetailsContainer>
        <img src={confirmedOrderIllustration} alt="Pedido confirmado" />
      </section>
    </OrderConfirmedContainer>
  );
}

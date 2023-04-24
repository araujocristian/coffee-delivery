import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { useTheme } from "styled-components";
import coffeeIntroImg from "../../../../assets/coffee-intro-img.svg";
import { InfoWithIcon } from "../../../../components/InfoWithIcon";
import { RegularText } from "../../../../components/Typography";
import {
  BenefitsContainer,
  IntroContainer,
  IntroContent,
  IntroTitle,
} from "./styles";

export function Intro() {
  const { colors } = useTheme();

  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <section>
            <IntroTitle size="xl">
              Encontre o café perfeito para qualquer hora do dia
            </IntroTitle>
            <RegularText size="l" color="subtitle" as="h3">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </RegularText>
          </section>
          <BenefitsContainer>
            <InfoWithIcon
              icon={<ShoppingCart weight="fill" />}
              iconBg={colors["brand-yellow-dark"]}
              text="Compra simples e segura"
            />
            <InfoWithIcon
              icon={<Package weight="fill" />}
              iconBg={colors["base-text"]}
              text="Embalagem mantém o café intacto"
            />
            <InfoWithIcon
              icon={<Timer weight="fill" />}
              iconBg={colors["brand-yellow"]}
              text="Entrega rápida e rastreada"
            />
            <InfoWithIcon
              icon={<Coffee weight="fill" />}
              iconBg={colors["brand-purple"]}
              text="O café chega fresquinho até você"
            />
          </BenefitsContainer>
        </div>

        <img src={coffeeIntroImg} alt="Imagem de um Copo de café" />
      </IntroContent>
    </IntroContainer>
  );
}

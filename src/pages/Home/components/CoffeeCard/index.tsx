import { RegularText, TitleText } from "../../../../components/Typography";
import {
  CardFooter,
  CoffeeCardContainer,
  Description,
  Tags,
  Title,
} from "./styles";

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img
        src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1684108800&Signature=o303I8LfojKT9k7mJy9GxNbDvwvh5RfdQqsUz5EUCT9kLcBh64NkSp228A7yinLzxPwhRagEuSC85tx4l8wjgsMziJ0njQbvktC1iaOJkVpe6yooT5gyI~hyzRsXXJn2oOKJWPd5J2mcEOTYK~MhbZz0uMgLoJrw769GqDV8JVXN7Lxgl~V3phH0o~HHcI8ysVeWfiCgoZzLpiBYjoQ38uL6bCmp2TlxnrLUl8UzM63nyPZFxH2Oxk6FegRnKV4y4QNXdwouYOx--WGcFBY757nmaiembx5zbDNla6rabqRSGa6rGS0RHktLQowWODoxGOS1Fi4h29MyMsqip3SweQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        alt="Café"
      />

      <Tags>
        <span>tradicional</span>
        <span>com leite</span>
      </Tags>

      <Title>Espresso Tradicional</Title>

      <Description>
        O tradicional café feito com água quente e grãos moídos
      </Description>

      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            4,50
          </TitleText>
        </div>
      </CardFooter>
    </CoffeeCardContainer>
  );
}

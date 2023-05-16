import styled from "styled-components";
import { SectionBaseStyle } from "../../styles";

export const CartSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;
`;

export const DetailsContainer = styled(SectionBaseStyle)`
  display: flex;
  flex-direction: column;
  border-radius: 6px 44px 6px 44px;
`;

import { useFormContext } from "react-hook-form";
import { Input } from "../../../../components/Input";
import { AddressFormContainer } from "./styles";

export function AddressForm() {
  const { register } = useFormContext();

  return (
    <AddressFormContainer>
      <Input
        type="number"
        placeholder="CEP"
        className="cep"
        {...register("cep")}
      />
      <Input
        type="text"
        placeholder="Rua"
        className="street"
        {...register("street")}
      />
      <Input type="number" placeholder="Número" {...register("number")} />
      <Input
        type="text"
        placeholder="Complemento"
        className="complement"
        {...register("complement")}
      />
      <Input type="text" placeholder="Bairro" {...register("neighborhood")} />
      <Input type="text" placeholder="Cidade" {...register("city")} />
      <Input type="text" placeholder="UF" {...register("state")} />
    </AddressFormContainer>
  );
}

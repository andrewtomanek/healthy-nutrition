import React, { useState } from "react";
import {
  InputContainer,
  InputBox,
  InputField,
  InputLabel,
  SubmitButton,
} from "../../styles/elements";

export type InputNumbers = {
  bílkoviny: number;
  cena: number;
  kalorie: number;
  množství: number;
  sacharidy: number;
  tuky: number;
  vláknina: number;
};

type Props = {
  updateBarValues(inputObject: InputNumbers): void;
};

const FormLimit = (props: Props) => {
  const [itemPrice, setPrice] = useState(200);
  const [itemCalories, setCalories] = useState(2000);
  const [itemFat, setFat] = useState(70);
  const [itemSacharidy, setSacharidy] = useState(130);
  const [itemFiber, setFiber] = useState(38);
  const [itemProtein, setProtein] = useState(56);
  const [itemQuantity, setQuantity] = useState(10);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputObject = {
      bílkoviny: +itemProtein,
      cena: +itemPrice,
      kalorie: +itemCalories,
      množství: +itemQuantity,
      sacharidy: +itemSacharidy,
      tuky: +itemFat,
      vláknina: +itemFiber,
    };
    props.updateBarValues(inputObject);
  };

  return (
    <InputContainer>
      <InputBox onSubmit={handleSubmit}>
        <InputLabel>Cena</InputLabel>
        <InputField
          type="number"
          value={itemPrice}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        <InputLabel>Kalorie</InputLabel>
        <InputField
          type="number"
          value={itemCalories}
          onChange={(e) => setCalories(Number(e.target.value))}
        />
        <InputLabel>Tuky</InputLabel>
        <InputField
          type="number"
          value={itemFat}
          onChange={(e) => setFat(Number(e.target.value))}
        />
        <InputLabel>Sacharidy</InputLabel>
        <InputField
          type="number"
          value={itemSacharidy}
          onChange={(e) => setSacharidy(Number(e.target.value))}
        />
        <InputLabel>Vláknina</InputLabel>
        <InputField
          type="number"
          value={itemFiber}
          onChange={(e) => setFiber(Number(e.target.value))}
        />
        <InputLabel>Bílkoviny</InputLabel>
        <InputField
          type="number"
          value={itemProtein}
          onChange={(e) => setProtein(Number(e.target.value))}
        />
        <InputLabel>Množství</InputLabel>
        <InputField
          type="number"
          value={itemQuantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <SubmitButton type="submit">Uložit</SubmitButton>
      </InputBox>
    </InputContainer>
  );
};

export default FormLimit;

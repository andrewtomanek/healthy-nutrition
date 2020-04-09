import React, { useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { FoodUnit} from "../../store/reducers/rootReducer";
import { addFoodAction } from "../../store/actions/storageActions";
import {
  InputContainer,
  InputBox,
  InputField,
  InputTextField,
  InputCheckBox,
  InputLabel,
  SubmitButton,
} from "../../styles/elements";

const CartForm: React.FC<DispatchProps> = (props) => {
  const [itemName, setName] = useState("");
  const [itemCheckbox, setCheckbox] = useState("false");
  const [itemPrice, setPrice] = useState(0);
  const [itemCalories, setCalories] = useState(0);
  const [itemFat, setFat] = useState(0);
  const [itemSacharidy, setSacharidy] = useState(0);
  const [itemFiber, setFiber] = useState(0);
  const [itemProtein, setProtein] = useState(0);
  const [itemQuantity, setQuantity] = useState(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!itemName) return;
    //if (itemName.length < 4) return;
    let randomId = (Math.random() * 999999).toFixed(0);
    const inputObject: FoodUnit = {
      id: +randomId,
      image: itemName,
      picked: !!itemCheckbox,
      cena: +itemPrice,
      kalorie: +itemCalories,
      tuky: +itemFat,
      sacharidy: +itemSacharidy,
      vláknina: +itemFiber,
      bílkoviny: +itemProtein,
      množství: +itemQuantity,
    };
    props.addFoodAction(inputObject);
    setName("");
    setCheckbox("false");
    setPrice(0);
    setCalories(0);
    setFat(0);
    setSacharidy(0);
    setFiber(0);
    setProtein(0);
    setQuantity(0);
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
        <InputLabel>Info</InputLabel>
        <InputCheckBox
          type="checkbox"
          value={itemCheckbox}
          onChange={(e) => setCheckbox(e.target.value)}
        />
        <InputLabel>Název</InputLabel>
        <InputTextField
          type="text"
          value={itemName}
          onChange={(e) => setName(e.target.value)}
        />
        <SubmitButton type="submit">Uložit</SubmitButton>
      </InputBox>
    </InputContainer>
  );
};

interface DispatchProps {
  addFoodAction: (item: FoodUnit) => void;
}

const mapDispatchToProps = (dispatch: Dispatch): any => ({
  addFoodAction: (item: FoodUnit) => dispatch(addFoodAction(item)),
});

export default connect(null, mapDispatchToProps)(CartForm);

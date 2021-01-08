import React from 'react';
import radios from "./radios";
import RadioButton from "./RadioButton/RadioButton";

const Payment = () => {
	return (
		<>
			<fieldset className="row mb-3">
				<legend className="col-form-label col-sm-10 pt-0">Сумма заказа считается:</legend>
				<div className="col-sm-10">
					{Object.keys(radios).map(itemKey => (
						<RadioButton key={itemKey} item={radios[itemKey]}/>
					))}
				</div>
			</fieldset>
			</>
	)
};

export default Payment;
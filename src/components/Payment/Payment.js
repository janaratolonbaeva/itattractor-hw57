import React from 'react';
import RadioButton from "./RadioButton/RadioButton";

const Payment = () => {
	const radios = {
		equal: {
			id: 'equal',
			forLabel: 'equal',
			text: 'Поровну между всеми участниками'
		},
		self: {
			id: 'self',
			forLabel: 'self',
			text: 'Каждому индивидуально'
		}
	}

	return (
		<>
			<fieldset className="row mb-3">
				<legend className="col-form-label col-sm-10 pt-0">Сумма заказа считается:</legend>
				<div className="col-sm-10">
					{Object.keys(radios).map(itemKey => (
						<RadioButton item={radios[itemKey]}/>
					))}
				</div>
			</fieldset>
			</>
	)
};

export default Payment;
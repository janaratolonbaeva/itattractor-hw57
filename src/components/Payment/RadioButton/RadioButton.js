import React from 'react';

const RadioButton = (item) => {
	const {id, forLabel, text} = item;
	return (
		<div className="form-check" key={item}>
			<input className="form-check-input" type="radio" name="calcOrder" id={id} />
			<label className="form-check-label" htmlFor={forLabel}>{text}</label>
		</div>
	);
};

export default RadioButton;
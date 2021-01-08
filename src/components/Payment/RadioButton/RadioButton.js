import React from 'react';

const RadioButton = ({item, mode}) => {
	const {id, forLabel, text, value} = item;

	const onRadioChange = e => {
		const target = e.target.value;
	}
	return (
		<div className="form-check">
			<input
				className="form-check-input"
				type="radio"
				name="calcOrder"
				value={value}
				onChange={onRadioChange}
				checked={mode === value}
				id={id} />
			<label className="form-check-label" htmlFor={forLabel}>{text}</label>
		</div>
	);
};

export default RadioButton;
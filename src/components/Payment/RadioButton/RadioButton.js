import React from 'react';

const RadioButton = ({item}) => {
	const {id, forLabel, text, value} = item;

	const onRadioChange = e => {
		const target = e.target.value;
		console.log(target);
	}
	return (
		<div className="form-check">
			<input
				className="form-check-input"
				type="radio"
				name="calcOrder"
				value={value}
				onChange={onRadioChange}
				id={id} />
			<label className="form-check-label" htmlFor={forLabel}>{text}</label>
		</div>
	);
};

export default RadioButton;
import React from 'react';

const RadioButton = (props) => {
	return (
		<div className="form-check">
			<input
				className="form-check-input"
				type="radio"
				name="calcOrder"
				value={props.value}
				onChange={props.onChange}
				checked={props.isChecked}
				id={props.id}
			/>
			<label className="form-check-label" htmlFor={props.id}>{props.children}</label>
		</div>
	);
};

export default RadioButton;
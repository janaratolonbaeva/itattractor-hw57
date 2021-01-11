import React from 'react';

const Button = ({calculate}) => {
	return (
		<button type="button" className="btn btn-primary" onClick={calculate}>Рассчитать</button>
	)
};

export default Button;
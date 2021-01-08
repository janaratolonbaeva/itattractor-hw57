import React from 'react';
import BuildControlSelf from "./BuildControlSelf/BuildControlSelf";
import BuildControlEqual from "./BuildControlEqual/BuildControlEqual";
import Button from "../Button/Button";

const BuildControl = ({mode}) => {

	if (mode === 'equal') {
		console.log('Equal');
	}
	if (mode === 'self') {
		console.log('Self');
	}

	return (
		<>
		<BuildControlEqual/>
		<BuildControlSelf/>
		<Button/>
		</>
	)
};

export default BuildControl;
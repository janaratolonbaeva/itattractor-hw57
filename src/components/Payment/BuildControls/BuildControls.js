import React from 'react';
import BuildControlSelf from "./BuildControlSelf/BuildControlSelf";
import BuildControlEqual from "./BuildControlEqual/BuildControlEqual";
import Button from "../Button/Button";

const BuildControl = () => {
	return (
		<>
		<BuildControlEqual/>
		<BuildControlSelf/>
		<Button/>
		</>
	)
};

export default BuildControl;
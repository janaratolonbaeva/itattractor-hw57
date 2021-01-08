import React from 'react';
import BuildControlSelf from "./BuildControlSelf/BuildControlSelf";
import BuildControlEqual from "./BuildControlEqual/BuildControlEqual";
import Button from "../Button/Button";
import formEqual from "./formEqual";

const BuildControl = ({mode}) => {

	return (
		<>
			{formEqual.map(itemKey => (
				<BuildControlEqual key={formEqual[itemKey]} item={itemKey}/>
			))}
			<BuildControlSelf/>
			<Button/>
		</>
	)
};

export default BuildControl;
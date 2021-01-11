import React from 'react';

const TotalSelf = ({name, totalSelf}) => {
	return (
			<p>{name}: <strong>{totalSelf} </strong>сом</p>
	);
};

export default TotalSelf;
import React from 'react';

const BuildControlEqual = ({item}) => {

	return (
		<div className="row mb-3">
				<label htmlFor="colFormLabel" className="col-sm-4 col-form-label">{item.title}:</label>
			<div className="col-sm-4">
				<input type="text" className="form-control" id="colFormLabel" name={item.value} />
			</div>
			<label htmlFor="colFormLabel" className="col-sm-2 col-form-label">{item.text}</label>
		</div>
	)
};

export default BuildControlEqual;
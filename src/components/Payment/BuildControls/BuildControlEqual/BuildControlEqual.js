import React from 'react';

const BuildControlEqual = (props) => {

	return (
		<div className="row mb-3">
			<div className="col-sm-6 input-group">
				<label className="col-sm-3 col-form-label">{props.title}:</label>
				<input type="number" className="form-control" value={props.value} onChange={e => props.onChange(e)} placeholder="0"/>
				<span className="ms-2">{props.unit}</span>
			</div>
		</div>

	)
};

export default BuildControlEqual;
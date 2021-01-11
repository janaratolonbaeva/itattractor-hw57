import React from 'react';
import './BuildControlSelf.css';

const BuildControlSelf = (props) => {
	return (
		<div className="row mb-3">
			<div className="col-sm-8">
				<div className="input-group align-items-center">
				<input type="text" name='name' className="col-sm-3 form-control me-3" onChange={(event) => props.changeHandler(event, props.index)} value={props.namePerson} placeholder="name"/>
				<input type="number" name='sum' className="col-sm-2 form-control me-2" onChange={(event) => props.changeHandler(event, props.index)} value={props.sum} placeholder="0"/>
				<span className="ms-2">{props.children}</span>
				</div>
			</div>
			<div className="col-sm-2">
				<button typeof="button" className="ms-2 trash-wrap" onClick={props.remove}>
					<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
						<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
						<path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
					</svg>
				</button>
			</div>
		</div>	)
};

export default BuildControlSelf;
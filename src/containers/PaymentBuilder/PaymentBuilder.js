import React, {useState} from 'react';
import Payment from "../../components/Payment/Payment";
import BuildControls from "../../components/Payment/BuildControls/BuildControls";

const PaymentBuilder = () => {
	const [mode, setMode] = useState('equal');

	const [formEqual, setFormEqual] = useState({
		people: 0,
		total: 0,
		percent: 0,
		delivery: 0
	});

	const [formSelf, setFormSelf] = useState({
		name: 0,
		total: 0,
		percent: 0,
		delivery: 0
	});

	return (
		<>
			<div className="container">
			<Payment/>
			<BuildControls/>
			</div>
		</>
	)
};

export default PaymentBuilder;
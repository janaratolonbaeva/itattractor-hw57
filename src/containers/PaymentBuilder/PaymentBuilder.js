import React, {useState} from 'react';
import FirstForm from "../FIrstForm/FirstForm";
import SecondForm from "../SecondForm/SecondForm";
import RadioButton from "../../components/Payment/RadioButton/RadioButton";
import './PaymentBuilder.css';

const PaymentBuilder = () => {
	const [mode, setMode] = useState('first');

	const onRadioChange = e => {
		setMode(e.target.value);
	}

	return (
		<>
			<div className="container">
				<div className="payment-block">
				<div className="mb-5">
					<RadioButton
						value="first"
						onChange={onRadioChange}
						id={1}
						isChecked={mode === 'first'}
					>
						Поровну
					</RadioButton>
					<RadioButton
						value="second"
						onChange={onRadioChange}
						isChecked={mode === 'second'}
						id={2}
					>
						Индивидуально
					</RadioButton>
				</div>
				{mode === 'first' ? (<FirstForm />) : (<SecondForm />)}
				</div>
			</div>
		</>
	)
};

export default PaymentBuilder;
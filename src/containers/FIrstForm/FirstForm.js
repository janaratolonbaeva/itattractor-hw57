import React, {useState} from 'react';
import BuildControlEqual from "../../components/Payment/BuildControls/BuildControlEqual/BuildControlEqual";
import Button from "../../components/Payment/Button/Button";

const FirstForm = () => {
	const [people, setPeople] = useState('');
	const [sum, setSum] = useState('');
	const [percent, setPercent] = useState('');
	const [delivery, setDelivery] = useState('');
	const [total, setTotal] = useState(0);

	const peopleChange = (e) => {
		setPeople(parseInt(e.target.value));
	}

	const sumChange = (e) => {
		setSum(parseInt(e.target.value));
	}

	const percentChange = e => {
		setPercent(parseInt(e.target.value));
	}

	const deliveryChange = e => {
		setDelivery(parseInt(e.target.value));
	}

	const calculateEqual = () => {
		const percentSum = (sum * percent) / 100;
		const total = (sum + percentSum + delivery) / people;
		setTotal(total);
	}

	return (
		<>
			<div className="mb-5">
				<BuildControlEqual title="Человек" value={people} onChange={peopleChange} unit="чел."/>
				<BuildControlEqual title="Сумма заказа" value={sum} onChange={sumChange} unit="сом"/>
				<BuildControlEqual title="Процент чаевых" value={percent} onChange={percentChange} unit="%"/>
				<BuildControlEqual title="Доставка" value={delivery} onChange={deliveryChange} unit="сом"/>
			</div>
			<Button calculate={calculateEqual}/>
			<div className="mt-5">
				<p>Общая сумма: <strong>{sum}</strong> сом</p>
				<p>Количество человек: <strong>{people}</strong></p>
				<p>Каждый платит по: <strong>{total}</strong> сом</p>
			</div>
		</>
	);
}

export default FirstForm;
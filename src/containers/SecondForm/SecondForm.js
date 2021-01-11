import React, {useState} from 'react';
import Button from "../../components/Payment/Button/Button";
import BuildControlSelf from "../../components/Payment/BuildControls/BuildControlSelf/BuildControlSelf";
import BuildControlEqual from "../../components/Payment/BuildControls/BuildControlEqual/BuildControlEqual";
import TotalSelf from "../../components/Payment/BuildControls/BuildControlSelf/TotalSelf/TotalSelf";

const SecondForm = () => {
	const [formList, setFormList] = useState([]);
	const [total, setTotal] = useState(0);
	const [percent, setPercent] = useState('');
	const [delivery, setDelivery] = useState('');
	const [showTotal, setShowTotal] = useState(false);

	const addForm = () => {
		const copy = [...formList];
		copy.push({
			name: '',
			sum: 0,
			totalSelf: 0
		});
		setFormList(copy);
	}

	const changeHandler = (event, index) => {
		const copy = [...formList];
		const input = event.target.name;
		if (input === 'sum') {
			copy[index][input] = parseInt(event.target.value);
		} else {
			copy[index][input] = event.target.value;
		}
		setFormList(copy);
	}

	const percentChange = e => {
		setPercent(parseInt(e.target.value));
	}

	const deliveryChange = e => {
		setDelivery(parseInt(e.target.value));
	}

	const calculateTotal = () => {
		const initialValue = 0;
		const totalSum = formList.reduce(function (accumulator, currentValue) {
			return accumulator + currentValue.sum;
		}, initialValue)
		setTotal(totalSum);
	}

	const calculateSelf = () => {
		const copyFormList = [...formList];
		const deliverySelf = delivery / copyFormList.length;

		for (let i = 0; i < copyFormList.length; i++) {
			const item = copyFormList[i];
			const totalItem = ((item.sum * percent) / 100) + item.sum + deliverySelf;
			item.totalSelf = totalItem;
		}

		setFormList(copyFormList);
	}

	const calculate = () => {
		setShowTotal(true);
		calculateTotal();
		calculateSelf();
	}

	const removeForm = index => {
		const copyFormList = [...formList];

		copyFormList.splice(index, 1);
		setFormList(copyFormList);
	}

	return (
		<>
			<div className="mb-3">
				{formList.map((item, index) => (
					<BuildControlSelf
						key={index}
						index={index}
						changeHandler={changeHandler}
						namePerson={item.name}
						sum={item.sum}
						remove={() => removeForm(index)}
					>
						сом
					</BuildControlSelf>
				))}
			</div>
			<div className="mb-5">
				<button type="button" className="btn-add" onClick={addForm}>
					<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-plus-circle"
							 viewBox="0 0 16 16">
						<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
						<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
					</svg>
				</button>
			</div>
			<div className="mb-5">
				<BuildControlEqual title="Процент чаевых" value={percent} onChange={percentChange} unit="%"/>
				<BuildControlEqual title="Доставка" value={delivery} onChange={deliveryChange} unit="сом"/>
			</div>
			<Button calculate={calculate}/>
			<div className="mt-5">
				<p>Общая сумма: <strong>{total}</strong> сом</p>
				{ showTotal ?
					formList.map((item, index) => (<TotalSelf key={index} name={item.name} totalSelf={item.totalSelf} />))
					 : null
				}
			</div>
		</>
	);
};

export default SecondForm;
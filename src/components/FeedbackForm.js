import { useState } from 'react';
import RatingSelect from './RatingSelect';
import Button from './shared/Button';
import Card from './shared/Card';
export default function FeedbackForm({ handleAdd }) {
	const [text, setText] = useState('');
	const [rating, setRating] = useState(10);
	const [isDisabled, setIsDisabled] = useState(true);
	const [message, setMessage] = useState('');

	const handleChange = (e) => {
		const { value } = e.target;
		if (value === '') {
			setMessage(null);
			setIsDisabled(true);
		} else if (value !== '' && value.trim().length < 10) {
			setMessage('text must be equal to 10 chars');
			setIsDisabled(true);
		} else {
			setMessage(null);
			setIsDisabled(false);
		}
		setText(value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (text.trim().length > 10) {
			const newFeedback = {
				text,
				rating
			};
			handleAdd(newFeedback);
		}
		setText('');
		setIsDisabled(true);
	};

	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<h2>How would you rate your service with us ?</h2>
				<RatingSelect select={(rating) => setRating(rating)} />
				<div className="input-group">
					<input
						onChange={handleChange}
						type="text"
						name="review"
						placeholder="write a text"
						value={text}
					/>
					<Button isDisabled={isDisabled} type="submit" version="secondary">
						Send
					</Button>
				</div>
				<p className="message">{message}</p>
			</form>
		</Card>
	);
}

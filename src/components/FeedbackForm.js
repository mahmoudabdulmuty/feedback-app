import { useState } from 'react';
import Card from './shared/Card';
export default function FeedbackForm() {
	const [review, setReview] = useState('');
	const handleChange = (e) => {
		setReview(e.target.value);
	};
	return (
		<Card>
			<form>
				<h2>How would you rate your service with us ?</h2>
				<div className="input-group">
					<input
						onChange={handleChange}
						type="text"
						name="review"
						placeholder="write a review"
						value={review}
					/>
					<button className="btn">Send</button>
				</div>
			</form>
		</Card>
	);
}

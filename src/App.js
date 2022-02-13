import { nanoid } from 'nanoid';
import { useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import './index.css';

export default function App() {
	const [feedback, setFeedback] = useState(FeedbackData);

	const handleAdd = (newFeedback) => {
		newFeedback.id = nanoid();
		setFeedback([newFeedback, ...feedback]);
	};
	const handleDelete = (id) => {
		setFeedback((preFeedback) =>
			preFeedback.filter((feedback) => feedback.id !== id)
		);
	};
	return (
		<>
			<Header />
			<div className="container">
				<FeedbackForm handleAdd={handleAdd} />
				<FeedbackStats feedback={feedback} />
				<FeedbackList handleDelete={handleDelete} feedback={feedback} />
			</div>
		</>
	);
}

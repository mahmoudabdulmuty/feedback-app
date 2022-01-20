import { useState } from 'react';
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import './index.css';

export default function App() {
	const [feedback, setFeedback] = useState(FeedbackData);
	const handleDelete = (id) => {
		setFeedback((preFeedback) =>
			preFeedback.filter((feedback) => feedback.id !== id)
		);
	};
	return (
		<>
			<Header />
			<div className="container">
				<FeedbackList handleDelete={handleDelete} feedback={feedback} />
			</div>
		</>
	);
}

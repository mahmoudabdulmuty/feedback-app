import { useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
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
				<FeedbackForm />
				<FeedbackStats feedback={feedback} />
				<FeedbackList handleDelete={handleDelete} feedback={feedback} />
			</div>
		</>
	);
}

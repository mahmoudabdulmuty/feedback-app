import { useState } from 'react';
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import './index.css';

export default function App() {
	const [feedback, setFeedback] = useState(FeedbackData);
	return (
		<>
			<Header />
			<div className="container">
				<FeedbackList feedback={feedback} />
			</div>
		</>
	);
}

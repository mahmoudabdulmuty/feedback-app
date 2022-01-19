import FeedbackItem from './FeedbackItem';

export default function FeedbackList({ feedback }) {
	return (
		<div className="feedback-list">
			{feedback.map((item) => (
				<FeedbackItem key={item.id} item={item} />
			))}
		</div>
	);
}

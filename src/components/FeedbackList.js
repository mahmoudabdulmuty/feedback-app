import FeedbackItem from './FeedbackItem';

export default function FeedbackList({ feedback, handleDelete }) {
	return (
		<div className="feedback-list">
			{feedback.map((item) => (
				<FeedbackItem handleDelete={handleDelete} key={item.id} item={item} />
			))}
		</div>
	);
}

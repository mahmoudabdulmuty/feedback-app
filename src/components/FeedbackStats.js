export default function FeedbackStats({ feedback }) {
	const average =
		feedback.reduce((acc, val) => {
			return acc + val.rating;
		}, 0) / feedback.length;
	return (
		<div className="feedback-stats">
			<h4>{feedback.length} reviews</h4>
			<h4>average rating : {isNaN(average) ? 0 : average.toFixed(0)}</h4>
		</div>
	);
}

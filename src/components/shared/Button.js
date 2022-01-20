import PropTypes from 'prop-types';
export default function Button({ version, type, children, isDisabled }) {
	return (
		<button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
			{children}
		</button>
	);
}

Button.propTypes = {
	children: PropTypes.node.isRequired,
	version: PropTypes.string,
	isDisabled: PropTypes.bool,
	type: PropTypes.string
};

Button.defaultProps = {
	version: 'primary',
	isDisabled: false,
	type: 'button'
};

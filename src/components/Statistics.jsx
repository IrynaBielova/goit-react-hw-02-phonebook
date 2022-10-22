import PropTypes from 'prop-types'

export const Statistics = ({text, value}) => {
    return (
        <div
        style={{
            marginBottom: "4px",
        }}>
            {text} {value}
        </div>
    )
};

Statistics.propTypes = {
    text: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
}
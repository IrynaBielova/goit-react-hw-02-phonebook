import PropTypes from 'prop-types';

export const Notification = ( {message} ) => {
    return(
        <p
        style={{
            marginTop: "64px",
        }}>
            {message}
        </p>)
}

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}
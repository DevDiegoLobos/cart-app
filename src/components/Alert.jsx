import PropTypes from 'prop-types'

const checkVisibility = (type, msg, isVisible) => {
    console.log(isVisible);
    if (isVisible) {
        return (
            <div className="container">
                <div className={`alert alert-${type}`} role="alert">
                    {msg}
                </div>
            </div>);
    } else { return null }
}

export const Alert = ({ type, msg, isVisible }) => {

    return (
        checkVisibility(type, msg, isVisible)
    )
};

Alert.propTypes = {
    type: PropTypes.string.isRequired,
    msg: PropTypes.string.isRequired,
    isVisible: PropTypes.bool.isRequired
}
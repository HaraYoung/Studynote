import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({name, children,num}) => {
    return (
        <div>
            Hi, Everyone!!!:) {name}
            <br />
            children:: {children}    
            <br />
            숫자:: {num}
        </div>
    );
};

MyComponent.defaultProps = {
    name: 'none'
};
MyComponent.propTypes = {
    name: PropTypes.string,
    num: PropTypes.number.isRequired
};

export default MyComponent;
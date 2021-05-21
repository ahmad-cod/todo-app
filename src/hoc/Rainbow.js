import React from 'react';

const Rainbow = (WrappedComponent) => {
    const colours = ['red', 'orange', 'green', 'pink', 'blue', 'yellow', 'purple'];
    const randomColour = colours[Math.floor(Math.random() * (colours.length - 1))];
    const className = randomColour + '-text';
    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent {...props} />
            </div>
        )
    }
}

export default Rainbow
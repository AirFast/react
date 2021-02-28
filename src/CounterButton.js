import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ counter }) => {
    return <h1>{`Counter value is: ${counter}`}</h1>
}

Counter.propTypes = {
    counter: PropTypes.number.isRequired,
}

class CounterButton extends React.Component {
    state = {
        counter: 0,
    }

    handleClick = () => {
        this.setState(({ counter }) => ({
            counter: ++counter,
        }));
    }

    render() {
        const {counter} = this.state;

        return (
            <div>
                <Counter counter={counter} />
                <button className={'btn'} onClick={this.handleClick}>Add One</button>
            </div>
        );
    }
}

export default CounterButton;
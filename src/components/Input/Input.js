import React from 'react';
import styles from './Input.module.scss';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.changeInputValue = this.changeInputValue.bind(this);
    }

    changeInputValue(event) {
        this.props.onChange(event.target.name, event.target.value);
    }

    render() {
        return (
            <input
            className={this.props.error && this.props.value === '' ? styles.error : null} 
            name={this.props.name} 
            type={this.props.type} 
            value={this.props.value} 
            onChange={this.changeInputValue}
            placeholder={this.props.placeholder}
            />
        )
    }
}

export default Input;

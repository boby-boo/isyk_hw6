import React from 'react';
import styles from './Form.module.scss';
import Input from '../Input/Input';
import Button from '../Button/Button';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            userMail: '',
            userPhone: '',
            error: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(name, value) {
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        event.preventDefault();

        let isSubmit = true;

        for (let key in this.state) {
            if (this.state[key] === '') {
                this.setState({
                    error: true
                })
                isSubmit = false
            }
        }
        
        isSubmit ? alert('Submit success') : alert('Form is not valid'); 
    }

    render() {
        return (
            <form className={styles.form} onSubmit={this.handleSubmit}>
                <h1 className={styles.form__heading}>Form</h1>
                <div className={styles.inputs__inner}>
                    <label> 
                        <h3>YOUR NAME</h3>
                        <Input 
                        error={this.state.error}
                        name='userName' 
                        type='text' 
                        value={this.state.userName} 
                        onChange={this.handleChange} 
                        placeholder='John McClane'
                        />
                    </label>
                    <label> 
                        <h3>YOUR MAIL</h3>
                        <Input 
                        error={this.state.error}
                        name='userMail' 
                        type='email' 
                        value={this.state.userMail} 
                        onChange={this.handleChange} 
                        placeholder='user@gmail.com'
                        />
                    </label>
                </div>
                <label> 
                    <h3>YOUR PHONE</h3>
                    <Input 
                    error={this.state.error}
                    name='userPhone'
                    type='tel'
                    value={this.state.userPhone} 
                    onChange={this.handleChange} 
                    placeholder='+380-55-10-47-720'
                    />
                </label>
                <Button>
                    Submit Form
                </Button>
            </form>
        )
    }
}

export default Form;

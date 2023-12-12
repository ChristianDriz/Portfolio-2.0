import { useState } from "react"

function Validate () {

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [subjectError, setSubjectError] = useState('');
    const [messageError, setMessageError] = useState('');

    const checkName = (name) => {
        if (name === '' ){
            setNameError('Please input your name');
            return false;
        }
        if (!name.match(/^[a-zA-z .]*$/)) {
            setNameError('Name must not include any number or special char.');
            return false;
        }
        if (name.length < 2) {
            setNameError('Name must two letters above.');
            return false;
        }
        setNameError('');
        return true;
    }

    const checkEmail = (email) => {
        if (email === '') {
            setEmailError('Please input your email');
            return false;
        }
        if (!email.match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z])+\.([A-Za-z]{2,4})$/)) {
            setEmailError('Invalid email address format (ex: johndoe@gmail.com)');
            return false;
        } 
        setEmailError('');
        return true;
    }

    const checkSubject = (subject) => {
        if (subject === '') {
            setSubjectError('Please input your subject');
            return false;
        }
        setSubjectError('');
        return true;
    }
    
    const checkMessage = (message) => {
        if (message === '') {
            setMessageError('Please input your message');
            return false;
        }
        setMessageError('');
        return true;
    }
    
    return { checkName, checkEmail, checkSubject, checkMessage, nameError, emailError, subjectError, messageError };
}

export default Validate ;
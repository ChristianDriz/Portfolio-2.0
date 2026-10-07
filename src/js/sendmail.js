import { useState } from 'react'
import Swal from 'sweetalert2'
import Validate from './validate';
import emailjs from '@emailjs/browser';

function SendMail ()  {

    emailjs.init({
        publicKey: "b7iKisFs5nyQVKyKJ",
    });

	const { checkName, checkEmail, checkSubject, checkMessage, nameError, emailError, subjectError, messageError } = Validate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handeInput = (e) => {
        const {name, value} = e.target;

		switch (name) {
            case 'name':
                checkName(value);
                break;
            case 'email':
                checkEmail(value);
                break;
            case 'subject':
                checkSubject(value);
                break;
            case 'message':
				checkMessage(value);
                break; 
            default:
                break;
        }
        setFormData({...formData, [name]:value });
    }

    const formSubmit = (e) => {
        e.preventDefault();

		const name = checkName(formData.name);
        const email = checkEmail(formData.email);
        const subject = checkSubject(formData.subject);
        const message = checkMessage(formData.message);

        if (!name || !email || !subject || !message) {
            return;
        }

        emailjs.send(
            'service_fictlgi',
            'template_d3n0doj',
            {
                name: formData.name,
                email: formData.email,
                subject: formData.subject,
                message: formData.message
            },
            {
                publicKey: 'b7iKisFs5nyQVKyKJ'
            }
        )
        .then(() => {
            Swal.fire({
                title: 'Success!',
                text: 'Message has been sent.',
                icon: 'success',
                showConfirmButton: false,
                timer: 2000
            });

            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        })
        .catch((error) => {
            console.error('EmailJS error:', error);

            Swal.fire({
                title: 'Error!',
                text: 'Message not sent.',
                icon: 'error',
                showConfirmButton: false,
                timer: 2000
            });
        });
		
    }

    return { formSubmit, formData, handeInput, nameError, emailError, subjectError, messageError };
}
 
export default SendMail;
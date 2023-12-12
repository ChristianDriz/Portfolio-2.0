import { useState } from 'react'
import Swal from 'sweetalert2'
import Validate from './validate';

function SendMail ()  {

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

        if (name && email && subject && message){

			const content = "Name: " + formData.name + "<br/>" +
			"Email : " + formData.email +  "<br/>"  +
			"Subject: " + formData.subject +  "<br/>"  +
			"Message: " + formData.message;

			window.Email.send({
			Host : "smtp.elasticemail.com",
			Username : "cjdimla1227@gmail.com",
			Password : "92F5B68CB3D49DE9F6DBFC0C0B1875BFCC3B",
			To : 'cjdimla1227@gmail.com',
			From : 'cjdimla1227@gmail.com',
			Subject : 'Message from portfolio contact form',
			Body : content
			}).then(
				message => {
					if (message === "OK") {
						Swal.fire({
							title: 'Success!',
							text: "Message has been sent.",
							icon: 'success',
							showConfirmButton: false,
							timer: 2000
						}).then(() => {
							setFormData({
								name: '',
								email: '',
								subject: '',
								message: '',
							});
						});
					}
					else{
						Swal.fire({
							title: 'Error!',
							text: "Message not sent.",
							icon: 'error',
							showConfirmButton: false,
							timer: 2000
						}).then(() => {
							setFormData({
								name: '',
								email: '',
								subject: '',
								message: '',
							});
						});
					}
				}
			);
        }
		
    }

    return { formSubmit, formData, handeInput, nameError, emailError, subjectError, messageError };
}
 
export default SendMail;
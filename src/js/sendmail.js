import { useState } from 'react'
import Swal from 'sweetalert2'


function SendMail ()  {

    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        subject: '',
        message: ''
    });

    const handeInput = (e) => {
        const {name, value} = e.target;
        let trimmedVal = value.trim();

        setFormData({...formData, [name]:trimmedVal });

    }

    const formSubmit = (e) => {
        e.preventDefault();

		const content = "First name: " + formData.fname + "<br/>" +
						"Last name : " + formData.lname +  "<br/>"  +
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
                            fname: '',
                            lname: '',
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
                            fname: '',
                            lname: '',
                            email: '',
                            subject: '',
                            message: '',
                        });
					});
				}
			}
		);
    }

    return { formSubmit, formData, handeInput };
}
 
export default SendMail;
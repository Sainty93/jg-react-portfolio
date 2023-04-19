import React, { useState, useEffect } from 'react';

const ContactMe = () => {
   const formInputValues = { name: '', email: '', message: '' };
   const [formValues, setFormValues] = useState(formInputValues);
   const [formErrors, setFormErrors] = useState({});
   const [formSubmit, setFormSubmit] = useState(false);

    const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormValues({...formValues, [name]: value});
};

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setFormSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && formSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);

    const validate = (values) => {
        const errors = {};
        const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.name) {
            errors.name = 'Please enter a name';
        }
        if (!values.email) {
            errors.email = 'Please enter an email address';
        }
        if (!values.message) {
            errors.message = 'Please enter a message';
        }
        return errors;
};
   return (
    <div>
    <form onSubmit={handleFormDSubmit} className='w-auto my-10 mx-10 md:w-[75vh] md:mx-auto'>
        <div className='mb-6'>
            <label htmlfor='name' className='block m-2 text-lg font-medium text-gray-900 dark:text-white'>Name</label>
             <input type='text' name='name' placeholder='Enter name here' value={formValues.name} onChange={handleInputChange} className='bg-gray-50 border border-gray-300 text-gray-900
             text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
             dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
        </div>
        <p className='text-md text-red-700'>{formErrors.name}</p>

        <div className='mb-6'>
            <label htmlfor='email' className='block m-2 text-lg font-medium
             text-gray-900 dark:text-white'>Email</label>
             <input type='email' name='email' placeholder='Enter email here' value={formValues.email} onChange={handleInputChange} className='bg-gray-50 border border-gray-300 text-gray-900
             text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
             dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
             dark:focus:border-blue-500'/>
        </div>
        <p className='text-md text-red-700'>{formErrors.email}</p>
            <div className='flex-items-start mb-6'>
                <div className='flex-items-center h-5'></div>
            </div>

            <label htmlFor='message' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Your Message</label>
                <textarea type='text' name='message' rows='4' placeholder='Write your thoughts here' value={formValues.message} onChange={handleInputChange} className='block p-2.5 mb-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'></textarea>
                    <p className='text-md text-red-700'>{formErrors.message}</p>
                 
                 <button type='submit' onClick={handleFormSubmit} className='text-white mt-8 bg-blue-700 hover:bg-blue-800
                 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center
                  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Submit</button>
            
            
            </form>
        </div>
   );
};

export default ContactMe;

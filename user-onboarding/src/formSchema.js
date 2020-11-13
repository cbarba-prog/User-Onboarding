import * as yup from 'yup'

export default yup.object().shape({ 
    username: yup.string().required("Username is required").min(3, "Username must be at least 3 characters"), 
    email: yup.string().email("Must be a valid email address").required("email is required"), 
    password: yup.string().required("You must enter a password.").min(7)
})
import * as YUP from 'yup';
const OwnerSignupSchema = YUP.object({
    name: YUP.string().required('Name is required'),
    email: YUP.string().email('Invalid email').required('Email is required'),
    password: YUP.string().required('Password is required'),
    repassword: YUP.string().oneOf([YUP.ref('password'),], 'Passwords must match').required('Password is required'),
    contact: YUP.string().required('Contact is required'),
    address: YUP.string().required('Address is required'),
})

export default OwnerSignupSchema; 
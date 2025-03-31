import React from 'react'
import OwnerSignupSchema from '../../schema/OwnerSignupSchema'
import { Form, useFormik } from 'formik'

const Signup = () => {

 let SignupFrm = useFormik({
  validationSchema : OwnerSignupSchema,
initialValues: {
  name: '',
  email: '',
  password: '',
  repassword: '',
  contact: '',
  address: '' }, onsubmit: FormData => {
    console.log(FormData)
  },
 })
  return (
    <>
    <div className="container"></div>
    <form onSubmit={SignupFrm.handleSubmit}>
      <div className="row">
        <div className="col-md-6 offset-md-3">
        <br/>
        <br/>
          <div className="card"> 
            <div className="card-body">
           
              <div className='card-header bg-green'>
              <h1 className='text-white'>Signup</h1>
              </div>
              <form>
                <div className="form-group">
                <br/>
                  
                  <input name='name' onchange={SignupFrm.handleChange} type="text" className={"form-control " + (SignupFrm.errors.name && SignupFrm.touched.name ? 'is-invalid' : '') } placeholder="Enter Full Name" />
                  {
                    SignupFrm.errors.name && SignupFrm.touched.name 
                    ?
                     <small className='text-danger'>{SignupFrm.errors.name}</small>
                     :
                      null
                  }
                  <br/>
                  
                  <input type="email" name='email' onchange={SignupFrm.handleChange} className="form-control" placeholder="Enter Your Email" />
                </div>
                <br/>
                <div className="form-group">
                 
                  <input name='password' onchange={SignupFrm.handleChange} type="password" className="form-control" placeholder="Enter password" />
                </div>
                <br/>
                <div className="form-group">
                  
                  <input name='repassword' onchange={SignupFrm.handleChange} type="password" className="form-control" placeholder="Re-Password" />
                </div>
                <br/>
                <div className="form-group">
                 
                 <input  name='contact' onchange={SignupFrm.handleChange} type="text" className="form-control" placeholder="Contact" />
               </div>
                <div className="form-group">
                  <br/>
                 
                 <input  name='address' onchange={SignupFrm.handleChange} type="text-area" className="form-control" placeholder="Address" />
               </div>
               <div className="form-group">
                  <br/>

                 &nbsp;&nbsp;&nbsp; <input type="radio" name='bhavesh'/>&nbsp;&nbsp;MALE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input  type="radio" name='bhavesh'/>&nbsp;&nbsp;Female
                </div>
                <br/>
                <div className="card-footer text-center"><button type="submit" className="btn btn-primary fs-5 ">Signup</button>
                </div>
               
              </form>
            </div>
  
          </div>
        </div>
      </div></form>
      <br/>
    </>
  )
}

export default Signup
import React from 'react'

const Login = () => {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
        <br/>
        <br/>
          <div className="card"> 
            <div className="card-body">
           
              <div className='card-header bg-green'>
              <h1 className='text-white'>Login</h1>
              </div>
              <form>
                <div className="form-group">
                <br/>
                  <label>Email</label>
                  <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <br/>
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <br/>
                <div className="card-footer text-center"><button type="submit" className="btn btn-primary fs-5 ">Login</button></div>
              </form>
            </div>
  
          </div>
        </div>
      </div>
    </div>
    <br/> <br/>
    </>
  )
}

export default Login
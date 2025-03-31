import React from 'react'

const Signup = () => {
  return (
    <>
    <div className="container"></div>
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
                  
                  <input type="email" className="form-control" placeholder="Enter Full Name" />
                  <br/>
                  
                  <input type="email" className="form-control" placeholder="Enter Your Email" />
                </div>
                <br/>
                <div className="form-group">
                 
                  <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <br/>
                <div className="form-group">
                  
                  <input type="password" className="form-control" placeholder="Re-Password" />
                </div>
                <br/>
                <div className="form-group">
                 
                 <input type="text" className="form-control" placeholder="Contact" />
               </div>
                <div className="form-group">
                  <br/>
                 
                 <input type="text-area" className="form-control" placeholder="Address" />
               </div>
                <div className="card-footer text-center"><button type="submit" className="btn btn-primary fs-5 ">Signup</button>
                </div>
               
              </form>
            </div>
  
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AuthPage = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const toggleMode = () => {
    setIsLoginMode(!isLoginMode);
  };

  return (
    <div style={{width:"100vw",display:"flex",justifyContent:"center"}}>
    <div >
      <div className="col-12 col-sm-11 col-md-8 col-lg-10 col-xl-11">
        <div className="card" style={{backgroundColor:"#f2f2f2",boxShadow:"0px 0px 10px #f2f2f2"}}>
          <div className="card-body">
            <h3 className="card-title text-center">
              {isLoginMode ? 'Login' : 'Register'}
            </h3>
            <form>
              {isLoginMode ? (
                <>
                  <div className="form-group">
                    <label htmlFor="loginEmail">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="loginEmail"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="loginPassword">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="loginPassword"
                      placeholder="Password"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="form-group">
                    <label htmlFor="registerName">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="registerName"
                      placeholder="Enter full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="registerEmail">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="registerEmail"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="registerPassword">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="registerPassword"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="registerConfirmPassword">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="registerConfirmPassword"
                      placeholder="Confirm Password"
                    />
                  </div>
                </>
              )}
              <button type="submit" className="btn btn-primary btn-block" style={{width:"100%",marginTop:"10px"}}>
                {isLoginMode ? 'Login' : 'Register'}
              </button>
            </form>
            <p className="text-center mt-3">
              {isLoginMode ? (
                <>
                  Don't have an account?{' '}
                  <button
                    className="btn btn-link p-0"
                    onClick={toggleMode}
                  >
                    Register here
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{' '}
                  <button
                    className="btn btn-link p-0"
                    onClick={toggleMode}
                  >
                    Login here
                  </button>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AuthPage;

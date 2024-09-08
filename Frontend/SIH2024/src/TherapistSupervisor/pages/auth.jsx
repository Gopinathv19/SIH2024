import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const navigate=useNavigate();
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
  });
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const toggleMode = () => {
    setIsLoginMode(!isLoginMode);
    setErrors({});
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    const emailPattern = /^[a-zA-Z0-9#-_/*]+@gmail.com$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    if (!isLoginMode && formData.password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!isLoginMode && !formData.fullName) {
      newErrors.fullName = 'Full name is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
        try {
            let result;
            const payload = {
                name: formData.fullName,
                email: formData.email,
                password: formData.password
            };
            
            if (isLoginMode) {
                result = await axios.post('http://localhost:3000/doctor/login', payload);
            } else {
                result = await axios.post('http://localhost:3000/doctor/register', payload);
            }

            if (result.status === 200 || result.status === 201) {
                alert(isLoginMode ? 'Login successful' : 'Registered successfully');
                navigate("/doctordash");
                
            } else {
                alert(result.data); 
            }
        } catch (error) {
            if (error.response) {
                alert(`Error: ${error.response.data}`); 
            } else {
                alert('An unexpected error occurred');
            }
        }
    } else {
        alert('Invalid data'); 
    }
 };
 

  return (
    <div style={{ width: '100vw', display: 'flex', justifyContent: 'center' }}>
      <div>
        <div className="col-12 col-sm-11 col-md-8 col-lg-10 col-xl-11">
          <div className="card" style={{ backgroundColor: '#f2f2f2', boxShadow: '0px 0px 10px #f2f2f2' }}>
            <div className="card-body">
              <h3 className="card-title text-center">
                {isLoginMode ? 'Login' : 'Register'}
              </h3>
              <form onSubmit={handleSubmit}>
                {isLoginMode ? (
                  <>
                    <div className="form-group">
                      <label htmlFor="email">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && <div className="text-danger">{errors.email}</div>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                      {errors.password && <div className="text-danger">{errors.password}</div>}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="form-group">
                      <label htmlFor="fullName">Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        placeholder="Enter full name"
                        value={formData.fullName}
                        onChange={handleChange}
                      />
                      {errors.fullName && <div className="text-danger">{errors.fullName}</div>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && <div className="text-danger">{errors.email}</div>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                      {errors.password && <div className="text-danger">{errors.password}</div>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="confirmPassword">Confirm Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                      {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}
                    </div>
                  </>
                )}
                <button type="submit" className="btn btn-primary btn-block" style={{ width: '100%', marginTop: '10px' }}>
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

import React, { useState, useEffect } from 'react';
import { auth } from '../../firebase';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Login } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'antd';
const ForgotPassword = ({ history }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const config = {
      url: process.env.REACT_APP_FORGOT_PASSWORD_REDIRECT,
      handleCodeInApp: true,
    };
    await auth.sendPasswordReaetEmail(email, config);
    await auth
      .then(() => {
        setEmail('');
        setLoading(false);
        toast.success('check your email for password reset link ');
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.message);
        console.log('Error msg in Forgot Password', error);
        //
      });
    return (
      <div className='container col-md-6 offset-md-3 p-5'>
        {loading ? (
          <h4 className='text-danger'>Loading</h4>
        ) : (
          <h4>ForgotPassword</h4>
        )}
        <form onSubmit={handleSubmit}>
          <input
            type='email'
            className='form-control'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Type your email'
            autoFocus
          />
          <br />
          <Button className='btn btn-raised' disabled={!email}>
            Submit
          </Button>
        </form>
      </div>
    );
  };
};
export default ForgotPassword;

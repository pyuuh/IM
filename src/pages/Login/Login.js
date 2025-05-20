import React, { useState, useEffect } from 'react';
import './Login.css';

function useDismissBubble(setVisible) {
  useEffect(() => {
    const handleClick = () => {
      setVisible(false);
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [setVisible]);
}

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

   const [isBubbleVisible, setIsBubbleVisible] = useState(true); // 🟢 Bubble state
  useDismissBubble(setIsBubbleVisible);
  
  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  
  const validatePassword = (password) => {
    // Password must be at least 8 characters long and contain at least one number and one letter
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return re.test(String(password));
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when typing
    setErrors({
      ...errors,
      [name]: ''
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    let newErrors = {
      email: '',
      password: ''
    };
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (!validatePassword(formData.password)) {
      newErrors.password = 'Password must be at least 8 characters with at least one letter and one number';
    }
    
    setErrors(newErrors);
    
    // If no errors, submit form
    if (!newErrors.email && !newErrors.password) {
      setIsSubmitting(true);
      
      try {
        // Send data to PHP backend
        const response = await fetch('login.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        
        const data = await response.json();
        
        if (data.success) {
          // Redirect or handle successful login
          window.location.href = '/dashboard';
        } else {
          // Handle error response from server
          setErrors({
            ...errors,
            server: data.message || 'Login failed. Please try again.'
          });
        }
      } catch (error) {
        setErrors({
          ...errors,
          server: 'Connection error. Please try again later.'
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };
  
   return (
    <div className="login-page-content">
      <div className="welcome-message">Welcome back adventurer!</div>
      
      <div className="login-form-container">
        <h2>Please Login</h2>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className={errors.email ? 'input-error' : ''}
            />
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>
          
          <div className="form-group">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className={errors.password ? 'input-error' : ''}
            />
            {errors.password && <div className="error-message">{errors.password}</div>}
          </div>
          
          {errors.server && <div className="server-error">{errors.server}</div>}
          
          <div className="button-wrapper">
            <button 
              type="submit" 
              className="submit-button" 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Logging in...' : 'Submit'}
            </button>
          </div>
          <div className="signup-link">
            <a href="/signup">Sign up instead</a>
          </div>
        </form>
      </div>
      
      <div className="character-container">
        {isBubbleVisible && (
          <div className="character-bubble">
            <p>Login to discover great items!</p>
            <p className="bubble-footnote">Click anywhere to exit.</p>
          </div>
        )}
        <div className="pixel-character"></div>
      </div>
    </div>
  );
};

export default LoginForm;
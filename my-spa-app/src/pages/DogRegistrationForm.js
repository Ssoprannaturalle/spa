import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { saveToLocal, loadFromLocal } from '../utils/storage';
import dogy from '../assets/coverdog.png';
import '../pages/DogRegistrationForma.css';



const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  breed: yup.string().required('Breed is required'),
  age: yup.number().required('Age is required').positive('Age must be positive').integer('Age must be an integer'),
});

const useDogRegistrationForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [darkMode, setDarkMode] = useState(false); // State for dark mode

  const { register, handleSubmit, formState: { errors }, setValue } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    try {
      saveToLocal('dogRegistrationData', data);
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', data);
      console.log('Submitted data:', response.data);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  const handleBackToForm = () => {
    setIsSubmitted(false);
  };

  return {
    isSubmitted,
    darkMode,
    setDarkMode,
    register,
    handleSubmit,
    errors,
    onSubmit,
    handleBackToForm,
    setValue,
  };
};

const DogRegistrationForm = () => {
  const {
    isSubmitted,
    darkMode,
    
    register,
    handleSubmit,
    errors,
    onSubmit,
    handleBackToForm,
    setValue,
  } = useDogRegistrationForm();

  const savedData = loadFromLocal('dogRegistrationData');

  useEffect(() => {
    if (savedData) {
      setValue('name', savedData.name);
      setValue('breed', savedData.breed);
      setValue('age', savedData.age);
    }
  }, [savedData, setValue]);

  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  // };



  if (isSubmitted) {
    return (
      <div className={`form-container ${darkMode ? 'dark-mode' : ''}`}>
        <div className="success-message">


        <h2>Successfully passed the registration</h2>
        <img src={dogy} alt="Dog" />
        <button onClick={handleBackToForm} className="back-button">Back to Registration Form</button>
      </div>
      </div>
    );
  }

  return (
    <div className={`form-container ${darkMode ? 'Light Mode' : 'Dark Mode'}`} >

      <form onSubmit={handleSubmit(onSubmit)} className="registration-form">
        <h2>Dog Registration</h2>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" {...register('name')} />
          <p className="error">{errors.name?.message}</p>
        </div>
        <div className="form-group">
          <label>Breed:</label>
          <input type="text" {...register('breed')} />
          <p className="error">{errors.breed?.message}</p>
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input type="number" {...register('age')} />
          <p className="error">{errors.age?.message}</p>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
   
  );
};

export default DogRegistrationForm;
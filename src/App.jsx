import { useState } from 'react'
import { useFormik } from 'formik';
import { validation } from "./validation/Formvalidation";


function App() {
  const initialValues = {
    
      firstName: "",
      lastName: "",
      email: "",
      password:"",
  }
  const formik = useFormik({
    initialValues:initialValues,
    validationSchema : validation, 
    onSubmit: (values,action) => {
    console.log(values);
    action.resetForm()
    }
  })

  return (
    <>
    <div className="formbody">
      <form method="post" onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="firstName">FirstName</label><br/>
          <input type="text" name='firstName' id='firstName'onChange={formik.handleChange} value={formik.values.firstName} />
            {formik.touched.firstName && formik.errors.firstName ? (
            <div className='error'>{formik.errors.firstName}</div>
            ) : null}
        </div>
        <div>
          <label htmlFor="lastName">LastName</label><br/>
          <input type="text" name='lastName' id='lastName' onChange={formik.handleChange} value={formik.values.lastName}/>
            {formik.touched.lastName && formik.errors.lastName ? (
            <div className='error'>{formik.errors.lastName}</div>
            ) : null}
        </div>
        <div>
          <label htmlFor="email">Email</label><br/>
          <input type="email" name='email' id='email' onChange={formik.handleChange} value={formik.values.email} />
          {formik.touched.email && formik.errors.email ? (
            <div className='error'>{formik.errors.email}</div>
            ) : null}
        </div>
        <div>
          <label htmlFor="password">Password</label><br/>
          <input type="password" name='password' id='password' onChange={formik.handleChange} value={formik.values.password} />
            {formik.touched.password && formik.errors.password ? (
              <div className='error'>{formik.errors.password}</div>
              ) : null}
        </div>
        <button id='btn' type='submit'>Submit</button>
      </form>
     
    </div>
    </>
  )
}

export default App

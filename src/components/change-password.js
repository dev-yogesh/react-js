import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { validateCode, validateConfirmPassword, validateNewPassword, validateOldPassword } from '../utils/utility';

const ChangePasswordForm = () => {
  const [ form, setForm ] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
    code: ''
  })
const [ errors, setErrors ] = useState({
  oldPassword: '',
    newPassword: '',
    confirmPassword: '',
    code: ''
})

const handleChange = (field, value) => {
  setForm((preVal)=>({
    ...preVal,
    [field]: value
  }))

  const formErrors = validateForm({
    ...form,
    [field]: value
  });

  setErrors((preVal) => ({
    ...preVal,
   [field]: formErrors[field]
  }));
}


const validateForm = (formObj) => {
  console.log("formObj", formObj);
  const { oldPassword, newPassword, confirmPassword, code } = formObj;

  const errorObj = {};
  errorObj.oldPassword = validateOldPassword(oldPassword);
  errorObj.newPassword = validateNewPassword(newPassword);
  errorObj.confirmPassword = validateConfirmPassword(newPassword, confirmPassword);
  errorObj.code = validateCode(code);

  return errorObj;
}

  const handleSubmit = (e) => {
    e.preventDefault()

    const formErrors = validateForm(form);

    setErrors(formErrors);

    // findFormErrors(form); 

    // get our new errors
    // const newErrors = findFormErrors()
    // // Conditional logic:
    // if ( Object.keys(newErrors).length > 0 ) {
    //   // We got errors!
    //   setErrors(newErrors)
    // } else {
    //   // No errors! Put any logic here for the form submission!
    //   alert('Thank you for your feedback!')
    // }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="oldPassword">
        <Form.Label>Old Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter old password"
          value={form.oldPassword}
          onChange={ e => handleChange('oldPassword', e.target.value) }
          isValid={!errors.oldPassword && form?.oldPassword?.length > 0}
          isInvalid={ !!errors.oldPassword }
        />
        <Form.Control.Feedback type='invalid'>
        { errors.oldPassword }
    </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="newPassword">
        <Form.Label>New Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter new password"
          value={form.newPassword}
          onChange={ e => handleChange('newPassword', e.target.value) }
          isValid={!errors.newPassword && form?.newPassword?.length > 0}
          isInvalid={ !!errors.newPassword }

        />
        <Form.Control.Feedback type='invalid'>
        { errors.newPassword }
    </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="confirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirm new password"
          value={form.confirmPassword}
          onChange={ e => handleChange('confirmPassword', e.target.value) }
          isValid={!errors.confirmPassword && form?.confirmPassword?.length > 0}
          isInvalid={ !!errors.confirmPassword }

        />
        <Form.Control.Feedback type='invalid'>
        { errors.confirmPassword }
    </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="code">
        <Form.Label>Code</Form.Label>
        <Form.Control
          type="text"
          placeholder="Code"
          value={form.code}
          onChange={ e => handleChange('code', e.target.value) }
          isValid={!errors.code && form?.code?.length > 0}
          isInvalid={ !!errors.code }

        />
        <Form.Control.Feedback type='invalid'>
        { errors.code }
    </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit">
        Change Password
      </Button>
    </Form>
  );
};

export default ChangePasswordForm;

export interface ValidationErrors {email:"Required Email" | "Invalid email address";
  password:"Required Password"|"Password must be at least 6 characters";
} ;

export default function validateAuth(values) {
  let errors:ValidationErrors;
  // Email Errors
  if (!values.email) {
    errors.email = "Required Email";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  // Password Errors
  if (!values.password) {
    errors.password = "Required Password";
  } else if (values.password.length < 5) {
    errors.password = "Password must be at least 6 characters";
  }
  return errors;
}
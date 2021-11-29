import { useState, useEffect } from "react";

export default function useForm(callback, validate) {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) callback();
  }, [isSubmitting, errors, callback]);

  function handleInputChange(event) {
    event.persist();
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  }

  return {
    handleInputChange,
    handleSubmit,
    values,
    errors,
    setErrors,
  };
}

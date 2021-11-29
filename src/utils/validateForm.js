import isEmail from "validator/lib/isEmail";
import validateIdCard from "./validateIdCard";

export default function validateForm(values) {
  const errors = {};

  // Firstname
  if (!values.firstname) {
    errors.firstname = "El campo nombre es obligatorio";
  } else if (values.firstname.length <= 2) {
    errors.firstname = "Nombre debe tener al menos dos caracteres.";
  }

  //Lastname
  if (!values.lastname) {
    errors.lastname = "El campo apellido es obligatorio";
  } else if (values.lastname.length <= 2) {
    errors.lastname = "Apellido debe tener al menos dos caracteres.";
  }

  // Email
  if (!values.email) {
    errors.email = "El campo apellido es obligatorio";
  } else if (!isEmail(values.email)) {
    errors.email = "Ingrese un email válido.";
  }

  // Departamento
  if (!values.dpto) errors.dpto = "El campo departamento es obligatorio";

  // Locacion
  if (!values.location) errors.location = "El campo locación es obligatorio";

  // CI
  if (!values.ci) {
    errors.ci = "El campo apellido es obligatorio";
  } else if (!validateIdCard(values.ci)) {
    errors.ci = "Ingrese un C.I. válido.";
  }

  if (!values.tac) {
    errors.tac = "Debe aceptar las bases y condiciones para continuar";
  }

  return errors;
}

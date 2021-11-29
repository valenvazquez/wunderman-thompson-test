import Input from "../Input/Input";
import "./Form.scss";
import { dptosLocs } from "../../data";
import useForm from "../../hooks/useForm";
import validateForm from "../../utils/validateForm";
import SelectInput from "../SelectInput/SelectInput";

const Form = () => {
  const { values, errors, handleSubmit, handleInputChange, setErrors } =
    useForm(submit, validateForm);

  function submit() {
    alert(values);
  }

  return (
    <section className="form-section">
      <h2 className="section-header">Formulario</h2>
      <div className="container">
        <form onSubmit={handleSubmit} noValidate>
          <Input
            name="firstname"
            className="w-50"
            placeholder="Nombre"
            type="text"
            onChange={handleInputChange}
            value={values.firstname || ""}
            errorMessage={errors.firstname || ""}
            setErrors={setErrors}
          />
          <Input
            name="lastname"
            className="w-50"
            placeholder="Apellido"
            type="text"
            onChange={handleInputChange}
            value={values.lastname || ""}
            errorMessage={errors.lastname || ""}
            setErrors={setErrors}
          />
          <Input
            name="email"
            className="w-100"
            placeholder="e-Mail"
            type="email"
            onChange={handleInputChange}
            value={values.email || ""}
            errorMessage={errors.email || ""}
            setErrors={setErrors}
          />
          <SelectInput
            name="dpto"
            className="w-50"
            onChange={handleInputChange}
            value={values.dpto || ""}
            errorMessage={errors.dpto || ""}
            setErrors={setErrors}
            options={Object.keys(dptosLocs)}
            placeholder="Departamento"
          />
          <SelectInput
            name="location"
            className="w-50"
            onChange={handleInputChange}
            value={values.location || ""}
            errorMessage={errors.location || ""}
            setErrors={setErrors}
            options={dptosLocs[values.dpto] || []}
            placeholder="Localidad"
          />
          <Input
            name="ci"
            className="w-50"
            placeholder="C.I."
            type="text"
            onChange={handleInputChange}
            value={values.ci || ""}
            errorMessage={errors.ci || ""}
            setErrors={setErrors}
          />
          <Input
            name="tac"
            className="w-50"
            type="checkbox"
            label="Acepto las bases y condiciones"
            onChange={handleInputChange}
            value={values.tac || true}
            errorMessage={errors.tac || ""}
            setErrors={setErrors}
          />
          <button className="btn" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;

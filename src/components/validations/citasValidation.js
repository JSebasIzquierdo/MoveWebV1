import * as yup from "yup";
import messages from "./messages/messajes";

export const CitaValidation = yup.object().shape({
  nombre: yup.string().required(messages.CAMPO_OBLIGATORIO),
  motivo: yup.string().required(messages.CAMPO_OBLIGATORIO),
  fechaAgendamiento: yup.string().required(messages.CAMPO_OBLIGATORIO),
  fechaCita: yup.string().required(messages.CAMPO_OBLIGATORIO),
  horaCita: yup.string().required(messages.CAMPO_OBLIGATORIO),
});

export default CitaValidation;

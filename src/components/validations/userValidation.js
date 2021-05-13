import * as yup from 'yup';
import messages from './messages/messajes';

export const UserValidations = yup.object().shape({
nombres: yup.string().required(messages.CAMPO_OBLIGATORIO),
apellidos: yup.string().required(messages.CAMPO_OBLIGATORIO),
documento: yup.number().typeError(messages.SOLO_NUMEROS).required(messages.CAMPO_OBLIGATORIO),
ocupacion: yup.string().required(messages.CAMPO_OBLIGATORIO),
sexo: yup.string().required(messages.CAMPO_OBLIGATORIO),
rol: yup.string().required(messages.CAMPO_OBLIGATORIO),
actividades: yup.string().required(messages.CAMPO_OBLIGATORIO),
numero:  yup.number().typeError(messages.SOLO_NUMEROS).required(messages.CAMPO_OBLIGATORIO),
correo: yup.string().email(messages.CORREO_NO_VALIDO).required(messages.CAMPO_OBLIGATORIO),
fecha: yup.date().typeError(messages.FECHA_ERRONEA).required(messages.CAMPO_OBLIGATORIO),
});

export default UserValidations;
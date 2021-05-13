import * as yup from 'yup';
import messages from './messages/messajes';

export const ProfileValidation = yup.object().shape({
nombres: yup.string().required(messages.CAMPO_OBLIGATORIO),
descripcion: yup.string().required(messages.CAMPO_OBLIGATORIO),
});

export default ProfileValidation;
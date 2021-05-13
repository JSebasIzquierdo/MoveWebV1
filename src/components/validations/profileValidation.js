import * as yup from 'yup';
import messages from './messages/messajes';

export const ProfileValidation = yup.object().shape({
nombres: yup.string().required(messages.CAMPO_OBLIGATORIO),
ejercicios: yup.array().oneOf(['true']).required('error we need to pick one')
});

export default ProfileValidation;
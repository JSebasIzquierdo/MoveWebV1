import * as yup from 'yup';
import messages from './messages/messajes';

export const RolValidations = yup.object().shape({
nombre: yup.string().required(messages.CAMPO_OBLIGATORIO),

});

export default RolValidations;
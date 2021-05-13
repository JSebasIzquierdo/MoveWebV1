import * as yup from 'yup';
import messages from './messages/messajes';

export const EjerciseValidation = yup.object().shape({
nombre: yup.string().required(messages.CAMPO_OBLIGATORIO),
descripcion:  yup.string().required(messages.CAMPO_OBLIGATORIO),
rutaVideo:  yup.string().required(messages.CAMPO_OBLIGATORIO),
rutaAudio:  yup.string().required(messages.CAMPO_OBLIGATORIO),
alternanciaPostura:  yup.string().required(messages.CAMPO_OBLIGATORIO),
rutaSensor:  yup.string().required(messages.CAMPO_OBLIGATORIO),
rupturaAudio:  yup.string().required(messages.CAMPO_OBLIGATORIO),
nombreAudio:  yup.string().required(messages.CAMPO_OBLIGATORIO),
rupturaVideo:  yup.string().required(messages.CAMPO_OBLIGATORIO),
nombreVideo:  yup.string().required(messages.CAMPO_OBLIGATORIO),

});

export default EjerciseValidation;
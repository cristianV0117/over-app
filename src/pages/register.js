import control from '../core/control'
import RegisterForm from '../components/RegisterForm';

const register = ({props}) => {
  return (
    <RegisterForm props={props} /> 
  )
};

export default control(register);

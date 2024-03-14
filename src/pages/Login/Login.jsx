import LoginForm from '../../components/LoginForm/LoginForm';
import { Toaster } from 'react-hot-toast';

export default function Login() {
  return (
    <div>
      <Toaster />
      <LoginForm />
    </div>
  );
}

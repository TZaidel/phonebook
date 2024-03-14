import { Link } from 'react-router-dom';
import NotFound from '../../components/NotFound/NotFound';

export default function NotFoundPage() {
  return (
    <div>
      <Link to="/login">Log in</Link>
      <NotFound />
    </div>
  );
}

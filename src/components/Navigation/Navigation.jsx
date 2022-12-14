import { useAuth } from 'hooks';
import { FormLink } from './Navigation.styled'

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <FormLink  to="/">
        Home
      </FormLink>
      {isLoggedIn && <FormLink to="/contacts">Contacts</FormLink>}
    </nav>
  );
};

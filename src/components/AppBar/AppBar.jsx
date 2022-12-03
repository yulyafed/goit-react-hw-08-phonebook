import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { FormHeader} from './AppBar.styled'

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <FormHeader >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </FormHeader>
  );
};

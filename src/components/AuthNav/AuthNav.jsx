import { FormLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <FormLink to="/register">
        Register
      </FormLink>
      <FormLink  to="/login">
        Log In
      </FormLink>
    </div>
  );
};

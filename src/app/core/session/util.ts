import { AuthProviders }      from 'angularfire2';
import { Error, User }        from './models';


export const mapToUser = (auth): User => {
  if (!auth) { return null; }

  return {
    uid: auth.uid,
    provider: AuthProviders[auth.provider],
    name: auth.auth.displayName,
    email: auth.auth.email,
    photoURL: auth.auth.photoURL
  };
};



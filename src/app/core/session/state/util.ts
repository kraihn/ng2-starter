import { AuthProviders }      from 'angularfire2';
import { User }        from '../models';
import { Error }              from  '../../shared';


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



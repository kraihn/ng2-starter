export interface Credentials {
  email: string;
  password: string;
}

export interface User {
  uid: string;
  provider: string;
  name: string;
  email: string;
  photoURL: string;
}

export interface Error {
  message: string
}

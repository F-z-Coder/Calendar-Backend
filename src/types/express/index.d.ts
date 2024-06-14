declare global {
  namespace Express {
    interface User extends UserDataInSession {}
  }
}
export type UserDataInSession = {
  userid: string;
  email: string;
  name: string;
};

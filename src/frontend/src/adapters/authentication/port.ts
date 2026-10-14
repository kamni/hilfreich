/**
 * Interface for handling authentication with the backend.
 */
export interface AuthenticationPort {
  authenticated: boolean;
  email: string;

  /**
   * Authenticate the user;
   * returns true if successfully logged in
   */
  authenticate: (email: string, password: string) => Promise<boolean>;

  /**
   * Log the user out of an existing session;
   * returns true if successfully logged out
   */
  logout: () => Promise<boolean>;
}

import { AuthenticationPort } from '@/adapters/authentication/port';

/**
 * Indicates how the adapter should report log-in status.
 */
export enum InMemoryAuthenticationAdapterStatus {
  // Every view will show up as correctly authenticated
  ALWAYS,
  // Simulates login/logout abilities with fake user accounts
  WITH_LOGIN,
}

/**
 * Basic email -> password lookup.
 * Obviously no security;
 * for testing purposes only.
 */
export type MockUserAuthDatabase = {
  [key: string]: string,

/**
 * Mock adapter that can be used to simulate various log-in testing scenarios.
 */
export class InMemoryAuthenticationAdapter implements AuthenticationPort {
  authenticated: boolean;
  email: string | null;

  // If configured as ALWAYS, the adapter will always report being logged in
  private _configuredStatus: boolean;
  // A mock database to do an email/password lookup
  private _configuredDatabase: MockUserAuthDatabase | null;

  private _alwaysLoggedIn(): boolean {
    return this._configuredStatus === InMemoryAuthenticationAdapterStatus.ALWAYS;
  }

  // If authDatabase is null,
  // login isn't possible, unless status = ALWAYS
  constructor(
    authStatus: InMemoryAuthenticationAdapterStatus,
    authDatabase: MockUserAuthDatabase | null,
  ) {
    this._configuredStatus = authStatus;
    this._configuredDatabase = authDatabase;

    if ( this._alwaysLoggedIn() ) {
      this.authenticated = true;
      this.email = 'always-logged-in@hilfreichev.de';
    } else {
      this.authenticated = false;
      this.email = null;
    }
  }

  authenticate(email: string, password: string): Promise<boolean> {
    // We don't allow re-authentication without explicit sign-out
    if (!this.authenticated) {
      let passwordFound = this._configuredDatabase.get(email)
      if ( !!passwordFound && passwordFound === password ) {
        this.authenticated = true;
        this.email = email;
      }
    }
    return Promise.resolve(this.authenticated);
  }

  logout(): Promise<boolean> {
    // Don't log out the ALWAYS adapter
    if ( !this._alwaysLoggedIn() ) {
      this.authenticated = false;
      this.email = null;
    }
    return Promise.resolve(!this.authenticated);
  }
}



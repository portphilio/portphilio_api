
const assert = require('assert')
const auth0Sanitize = require('../../src/hooks/auth0-sanitize')

describe('A hook to sanitize Auth0 query results', () => {
  let contextBeforeSingle, contextBeforeMultiple, contextAfterSingle, contextAfterMultiple

  beforeEach(() => {
    const somePerson = {
      email: 'some.person@gmail.com',
      email_verified: true,
      name: 'Some Person',
      given_name: 'Some',
      family_name: 'Person',
      picture: 'https://www.fakepersongenerator.com/Face/female/female1022927212586.jpg',
      locale: 'en',
      updated_at: '2019-06-15T16:18:06.990Z',
      user_id: 'google-oauth2|1234567890',
      nickname: 'some.person',
      identities: [
        {
          provider: 'google-oauth2',
          access_token: 'some_google_access_token_qpajfpw48jf!aoi',
          expires_in: 3600,
          user_id: '1234567890',
          connection: 'google-oauth2',
          isSocial: true
        }
      ],
      created_at: '2019-06-15T02:34:05.495Z',
      app_metadata: {
        roles: ['participant'],
        google_refresh_token: 'some_google_refresh_token_3avjoe4i03@e1',
        added_to_api: false
      },
      last_ip: '100.51.157.106',
      last_login: '2019-06-15T16:18:06.353Z',
      logins_count: 3
    }
    const otherPerson = {
      email: 'other.person@gmail.com',
      email_verified: true,
      name: 'Other Person',
      given_name: 'Other',
      family_name: 'Person',
      picture: 'https://www.fakepersongenerator.com/Face/female/female1022927212586.jpg',
      locale: 'en',
      updated_at: '2019-06-15T16:18:06.990Z',
      user_id: 'google-oauth2|1234567890',
      nickname: 'other.person',
      identities: [
        {
          provider: 'google-oauth2',
          access_token: 'other_google_access_token_qpajfpw48jf!aoi',
          expires_in: 3600,
          user_id: '1234567890',
          connection: 'google-oauth2',
          isSocial: true
        }
      ],
      created_at: '2019-06-15T02:34:05.495Z',
      app_metadata: {
        roles: ['participant'],
        google_refresh_token: 'other_google_refresh_token_3avjoe4i03@e1',
        added_to_api: false
      },
      last_ip: '100.51.157.106',
      last_login: '2019-06-15T16:18:06.353Z',
      logins_count: 3
    }
    const sanitizedPerson = { ...somePerson }
    delete sanitizedPerson.app_metadata.google_refresh_token
    const otherSanitizedPerson = { ...otherPerson }
    delete otherSanitizedPerson.app_metadata.google_refresh_token

    contextBeforeSingle = {
      type: 'after',
      service: {
        path: 'auth0/users'
      },
      params: { provider: 'rest' },
      result: somePerson
    }

    contextBeforeMultiple = {
      type: 'after',
      service: {
        path: 'auth0/users'
      },
      params: { provider: 'rest' },
      result: [ somePerson, otherPerson ]
    }

    contextAfterSingle = {
      type: 'after',
      service: {
        path: 'auth0/users'
      },
      params: { provider: 'rest' },
      result: sanitizedPerson
    }

    contextAfterMultiple = {
      type: 'after',
      service: {
        path: 'auth0/users'
      },
      params: { provider: 'rest' },
      result: [ sanitizedPerson, otherSanitizedPerson ]
    }
  })

  it('should exist', () => {
    assert(typeof auth0Sanitize === 'function', 'Hook is not a function.')
  })

  it('should remove google_refresh_token from app_metadata of a single user', () => {
    const sanitizedContext = auth0Sanitize()(contextBeforeSingle)
    assert.deepEqual(sanitizedContext, contextAfterSingle)
  })

  it('should remove google_refresh_token from app_metadata of multiple users', () => {
    const sanitizedContext = auth0Sanitize()(contextBeforeMultiple)
    assert.deepEqual(sanitizedContext, contextAfterMultiple)
  })
})

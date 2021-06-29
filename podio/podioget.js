import { api as Podio } from 'podio-js'

// Example config file where you might store your credentials
// import config from '../config.js'

// get the API id/secret
const clientId = config.clientId
const clientSecret = config.clientSecret

// get the app ID and Token for appAuthentication
const appId = config.appId
const appToken = config.appToken

// instantiate the SDK
const podio = new Podio({
  authType: 'app',
  clientId: clientId,
  clientSecret: clientSecret,
})

podio.authenticateWithApp(appId, appToken, (err) => {
  if (err) throw new Error(err)

  podio
    .isAuthenticated()
    .then(() => {
      // Ready to make API calls in here...
    })
    .catch((err) => console.log(err))
})

// console.log('it is time')

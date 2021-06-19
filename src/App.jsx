import './App.css';
import MainRouter from "./mainRouter";
import { Auth0Provider } from "@auth0/auth0-react";
import { getConfig } from "./config";

import history from "./utils/history";


function App ()
{

  const onRedirectCallback = (appState) => {
    history.push(
      appState && appState.returnTo ? appState.returnTo : window.location.pathname
    );
  };

// Please see https://auth0.github.io/auth0-react/interfaces/auth0provideroptions.html
// for a full list of the available properties on the provider
const config = getConfig();

const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  ...( config.audience ? { audience: config.audience } : null ),
  redirectUri: window.location.origin,
  onRedirectCallback,
};

return (
  <Auth0Provider{...providerConfig}  >
    <MainRouter />
  </Auth0Provider> );
}

export default App;

(function () {
  'use strict';

  // setup-promise.js needs to be loaded before this for the window object window.dashApiScript.
  // BASE_URL is defined by rollup config in the build {"env":{"BASE_URL":"https://assets.static-upwork.com/dash-api/1.2.0/"}}
  const dashApiCDN = `${{"env":{"BASE_URL":"https://assets.static-upwork.com/dash-api/1.2.0/"}}.env.BASE_URL}dash-api.min.js`;
  let scriptResolve;
  let scriptReject;
  const scriptPromise = new Promise((resolve, reject) => {
    scriptResolve = resolve;
    scriptReject = reject;
  });

  const importScript = async (url, globalKey) => {
    if (!document.getElementById(`${globalKey}-script`)) {
      const s = document.createElement('script');
      s.src = url;
      s.id = `${globalKey}-script`;
      s.dataset.main = s.src;
      s.addEventListener('load', () => scriptResolve(window[globalKey]));
      s.addEventListener('error', () => scriptReject(new Error(`Error loading script "${url}".`)));
      s.addEventListener('abort', () => scriptReject(new Error(`Script loading aborted "${url}".`)));
      document.head.appendChild(s);
    }

    return scriptPromise;
  };
  /*
   * window: Browser window object
   * authToken: OAuth2 token with access to dash api. (CCST)
   * env: ['dev', 'staging', 'prod']
   */


  function dashApiSetup({
    authToken,
    env
  }) {
    return importScript(dashApiCDN, 'DashApi').then(dashApi => {
      const dashConfig = {
        app: 'global-dash-api',
        base64: false,
        url: {
          dev: 'https://tl-dev.upwork.com/wp',
          staging: 'https://tl-staging-usw2.upwork.com/wp',
          prod: 'https://tl.upwork.com/wp',
          prodOregon: 'https://beta-tl.upwork.com/wp'
        }[env],
        messageCountsInterval: 1200
      };

      if (authToken) {
        dashConfig.authToken = authToken;
      }

      dashApi.configure(dashConfig);
      dashApi.connect();
      dashApi.idleService.start();
      window.dashApiScript.setupResolve(dashApi);
      return dashApi;
    }).catch(error => {
      window.dashApiScript.setupReject(error);
    });
  }

  window.dashApiScript.config = {
    idle: {
      enabled: true,
      timeout: 300,
      debug: false
    }
  };
  window.dashApiScript.setup = dashApiSetup;

}());

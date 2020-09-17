var nativefier = require('nativefier').default;

// possible options, defaults unless specified otherwise
var options = {
    name: 'Netlify', // will be inferred if not specified
    targetUrl: 'https://app.netlify.com/', // required
    // platform: 'darwin', // defaults to the current system
    // arch: 'x64', // defaults to the current system
    // version: '0.36.4',
    out: './build',
    overwrite: false,
    asar: false, // see conceal
    icon: './icon.icns',
    counter: false,
    bounce: false,
    width: 1280,
    height: 800,
    showMenuBar: false,
    fastQuit: false,
    // userAgent: 'Mozilla ...', // will infer a default for your current system
    ignoreCertificate: false,
    ignoreGpuBlacklist: false,
    enableEs3Apis: false,
    internalUrls: '.*?', // defaults to URLs on same second-level domain as app
    blockExternalUrls: false,
    insecure: false,
    honest: false,
    zoom: 1.0,
    singleInstance: false,
    clearCache: false,
    fileDownloadOptions: {
      saveAs: true // always show "Save As" dialog
    },
    inject: [
        './draggable.css'
    ],
    titleBarStyle: 'hidden'
    // ,
    // processEnvs: {
    //   "GOOGLE_API_KEY": "<your-google-api-key>"
    // }
};

nativefier(options, function(error, appPath) {
    if (error) {
        console.error(error);
        return;
    }
    let msg = '✅ App has been nativefied to' + appPath + '. Remember to copy this app to your Applications directory!';
    // console.log('App has been nativefied to', appPath);
    // console.log('Remember to copy this app to your Applications directory!');
    console.log();
    console.log('\x1b[36m%s\x1b[0m', msg);  //cyan
    console.log();
});

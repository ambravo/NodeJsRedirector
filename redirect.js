var app = require('express')();

const listenPort = parseInt(process.argv[2]);
const targetUrl  = process.argv[3];
const redirectHTTPCode = parseInt(process.argv[4]);


app.post('*', function(req, res) {
  console.log('Redirecting to: ' + targetUrl + ' // HTTP Code: '+ redirectHTTPCode);
  res.redirect(redirectHTTPCode,targetUrl );
});

app.listen(listenPort, function() {
  console.log('Ready to redirect from port '+listenPort );
});

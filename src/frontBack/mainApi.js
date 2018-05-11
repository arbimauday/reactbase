var app = require('./api/User');
var http = require( "http" );
const port = process.env.PORT || 5000;

app.listen(port,() => { // this is the number of server ports we use
    console.log('Server running on http://localhost:5000')
})
module.export = app;
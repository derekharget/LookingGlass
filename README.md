# LookingGlass

Opensource looking glass that contains a web client, and individual entry points for your server.

Supports IPv4/IPv6 and Ping/Traceroute/MTR. Users have the ability to select locations via a dropdown menu.

## Setting up the web client

The front end code is able to be statically generated and does not require a server in the backend.

Edit the /web-client/src/locations.ts array and fill in each of your locations. The endpoint should not include
a http or tailing slash.

After you complete that, simple run 'npm run build' and point all requests from your web server to the build directory.
You can also use the static export feature on cloudflare pages or Heroku.


## Setting up the looking glass client

In the environment file, setup your application port that you wish to use. I would recommend just proxying with nginx to the service.

After that, simply run npm run start to compile and execute the code.

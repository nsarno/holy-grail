holy-grail 
==========

Template of a fully separated Rails API and AngularJS client with CORS enabled.

This is only intended as a proof of concept and it's far from perfect. If you see possible improvements, I'm open to suggestions :)

## Getting Started

### Backend

```
$ cd backend

# install the required gems from the Gemfile
$ bundle install

# setup the database
$ rake db:create && rake db:migrate && rake db:seed

# run the server
$ unicorn
```

### Frontend

```
# install Node modules from package.json
$ npm install

# install Bower components from bower.json
$ bower install

# run the server
$ gulp serve
```

## Resources

### Backend

*TODO: List the resources used in the backend*

### Frontend

*TODO: List the resources used in the frontend*

## References

[Cookies vs Tokens. Getting auth right with Angular.JS](https://auth0.com/blog/2014/01/07/angularjs-authentication-with-cookies-vs-token/)


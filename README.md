holy-grail
==========

Template of a fully separated rails API and AngularJS client with CORS

# Getting Started

## Backend

```
$ cd backend

# install the required gems from the Gemfile
$ bundle install

# setup the database
$ rake db:create && rake db:migrate && rake db:seed

# run the server
$ unicorn
```

## Frontend

```
# install Node modules from package.json
$ npm install

# install Bower components from bower.json
$ bower install

# run the server
$ gulp serve
```

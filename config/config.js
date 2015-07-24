var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'mmz-nodejs-started'
    },
    port: 3000,
    db: 'mongodb://localhost/mmz-nodejs-started-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'mmz-nodejs-started'
    },
    port: 3000,
    db: 'mongodb://localhost/mmz-nodejs-started-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'mmz-nodejs-started'
    },
    port: 3000,
    db: 'mongodb://localhost/mmz-nodejs-started-production'
  }
};

module.exports = config[env];

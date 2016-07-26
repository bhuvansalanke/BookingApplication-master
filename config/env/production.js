'use strict';

module.exports = {
  secure: true,
  port: process.env.PORT || 8443,
  db: {
    uri: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://bhuvan:bhuvan@ds059644.mlab.com:59644/bookingapp',
    options: {
      user: '',
      pass: ''
    },
    // Enable mongoose debug mode
    debug: process.env.MONGODB_DEBUG || false
  },
  assets: {
    lib: {
      css: [
        'public/lib/bootstrap/dist/css/bootstrap.min.css',
        'public/lib/bootstrap/dist/css/bootstrap-theme.min.css',
        'public/lib/fullcalendar/dist/fullcalendar.min.css',
        'public/lib/angular-motion/dist/angular-motion.min.css',
        'public/lib/angular-multi-select-alexandernst/dist/angular-multi-select.min.css',
        'public/lib/jquery-timepicker-jt/jquery.timepicker.min.css',
        'public/lib/angular-material/angular-material.min.css',
        'public/lib/font-awesome/font-awesome.min.css', 
        'public/lib/angular-input-stars-directive/angular-input-stars.min.css',
        'public/lib/angularMultipleSelect/build/multiple-select.min.css'
      ],
      js: [
        'public/lib/angular/angular.min.js',
        'public/lib/angular-resource/angular-resource.min.js',
        'public/lib/angular-animate/angular-animate.min.js',
        'public/lib/angular-ui-router/release/angular-ui-router.min.js',
        'public/lib/angular-ui-utils/ui-utils.min.js',
        'public/lib/angular-bootstrap/ui-bootstrap-tpls.min.js',
        'public/lib/angular-file-upload/angular-file-upload.min.js',
        'public/lib/jquery/dist/jquery.min.js',
        'public/lib/jquery-ui/jquery-ui.min.js',
        'public/lib/angular-route/angular-route.min.js',
        'public/lib/angular-ui-calendar/src/calendar.min.js',
        'public/lib/moment/moment.min.js',
        'public/lib/angular-moment/angular-moment.min.js',
        'public/lib/fullcalendar/dist/fullcalendar.min.js',    
        'public/lib/angular-cookies/angular-cookies.min.js',
        'public/lib/angular-filter/dist/angular-filter.min.js',
        'public/lib/angular-multi-select-alexandernst/dist/angular-multi-select.min.js',
        'public/lib/angular-strap/dist/angular-strap.min.js',
        'public/lib/angular-strap/dist/angular-strap.tpl.min.js',
        'public/lib/jquery-timepicker-jt/jquery.timepicker.min.js',
        'public/lib/angular-jquery-timepicker/src/timepickerdirective.min.js',
        'public/lib/angular-aria/angular-aria.min.js',
        'public/lib/angular-material/angular-material.min.js',
        'public/lib/angular-input-stars-directive/angular-input-stars.min.js',
        'public/lib/angularMultipleSelect/build/multiple-select.min.js'
      ]
    },
    css: 'public/dist/application.min.css',
    js: 'public/dist/application.min.js'
  },
  log: {
    // Can specify one of 'combined', 'common', 'dev', 'short', 'tiny'
    format: 'combined',
    // Stream defaults to process.stdout
    // Uncomment to enable logging to a log on the file system
    options: {
      stream: 'access.log'
    }
  },
  facebook: {
    clientID: process.env.FACEBOOK_ID || 'APP_ID',
    clientSecret: process.env.FACEBOOK_SECRET || 'APP_SECRET',
    callbackURL: '/api/auth/facebook/callback'
  },
  twitter: {
    clientID: process.env.TWITTER_KEY || 'CONSUMER_KEY',
    clientSecret: process.env.TWITTER_SECRET || 'CONSUMER_SECRET',
    callbackURL: '/api/auth/twitter/callback'
  },
  google: {
    clientID: process.env.GOOGLE_ID || '562239098143-2ld8r99avl3hhdabghf5k5rrfde2u8pg.apps.googleusercontent.com',
    clientSecret: process.env.GOOGLE_SECRET || 'lnOuUKxaXfJk-emSusdcsNgJ',
    callbackURL: '/api/auth/google/callback'
  },
  linkedin: {
    clientID: process.env.LINKEDIN_ID || 'APP_ID',
    clientSecret: process.env.LINKEDIN_SECRET || 'APP_SECRET',
    callbackURL: '/api/auth/linkedin/callback'
  },
  github: {
    clientID: process.env.GITHUB_ID || 'APP_ID',
    clientSecret: process.env.GITHUB_SECRET || 'APP_SECRET',
    callbackURL: '/api/auth/github/callback'
  },
  paypal: {
    clientID: process.env.PAYPAL_ID || 'CLIENT_ID',
    clientSecret: process.env.PAYPAL_SECRET || 'CLIENT_SECRET',
    callbackURL: '/api/auth/paypal/callback',
    sandbox: false
  },
  mailer: {
    from: process.env.MAILER_FROM || 'MAILER_FROM',
    options: {
      service: process.env.MAILER_SERVICE_PROVIDER || 'MAILER_SERVICE_PROVIDER',
      auth: {
        user: process.env.MAILER_EMAIL_ID || 'MAILER_EMAIL_ID',
        pass: process.env.MAILER_PASSWORD || 'MAILER_PASSWORD'
      }
    }
  }
};

'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  Personal = mongoose.model('Personal'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

/**
 * Create a personal
 */
exports.create = function (req, res) {
  var personal = new Personal(req.body);
  personal.user = req.user;

  personal.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(personal);
    }
  });
};

/**
 * Show the current personal
 */
exports.read = function (req, res) {
  res.json(req.personal);
};

/**
 * Update a personal
 */
exports.update = function (req, res) {
  var personal = req.personal;

  personal.fName = req.body.fName;
  personal.lName = req.body.lName;
  personal.contact = req.body.contact;
  personal.emailId = req.body.emailId;
  personal.speciality = req.body.speciality;
  personal.isConsultant = req.body.isConsultant;
  personal.qualification = req.body.qualification;
  personal.experience = req.body.experience;
  personal.rating = req.body.rating;
  personal.treatments = req.body.treatments;
  personal.slots = req.body.slots;
<<<<<<< HEAD
  personal.adminemailId = req.body.adminemailId;
  personal.image = req.body.contact + '.png';
=======
<<<<<<< HEAD
  personal.adminemailId = req.body.adminemailId;
  personal.image = req.body.contact + '.png';
=======
  personal.experience = req.body.experience;
  personal.rating = req.body.rating;
>>>>>>> 3f230c6b331f02a2ca632f31379b0e1aa3612386
>>>>>>> f57e6ae079db3192a5701f6dcbe3223465f12be8
  
  personal.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(personal);
    }
  });
};

/**
 * Delete an personal
 */
exports.delete = function (req, res) {
  var personal = req.personal;

  personal.remove(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(personal);
    }
  });
};

/**
 * List of Personals
 */
exports.list = function (req, res) {
  Personal.find().sort('-created').populate('user', 'displayName').exec(function (err, personals) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(personals);
    }
  });
};

/**
 * Personal middleware
 */
exports.personalByID = function (req, res, next, id) {

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'Personal is invalid'
    });
  }

  Personal.findById(id).populate('user', 'displayName').exec(function (err, personal) {
    if (err) {
      return next(err);
    } else if (!personal) {
      return res.status(404).send({
        message: 'No personal with that identifier has been found'
      });
    }
    req.personal = personal;
    next();
  });
};

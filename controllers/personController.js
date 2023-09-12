const express = require("express");

const Person = require("../models/personModel");
const { generateCrudMethods } = require("../services");
const personCrud = generateCrudMethods(Person);
const { raiseRecord404Error } = require("../middlewares");

module.exports.getPersons = async (req, res, next) => {
  personCrud
    .getAll()
    .then((data) => res.send(data))
    .catch((err) => next(err));
};

module.exports.getPerson = (req, res, next) => {
  // console.log(req.params);
  personCrud
    .getById(req.params.id)
    .then((data) => {
      console.log(typeof data);
      if (data) res.send(data);
      else raiseRecord404Error(req, res);
    })
    .catch((err) => next(err));
};

module.exports.createPerson = (req, res, next) => {
  personCrud
    .create(req.body)
    .then((data) => res.status(201).json(data))
    .catch((err) => next(err));
};

module.exports.updatePerson = (req, res) => {
  personCrud
    .update(req.params.id, req.body)
    .then((data) => {
      if (data) res.send(data);
      else raiseRecord404Error(req, res);
    })
    .catch((err) => next(err));
};

module.exports.deletePerson = (req, res) => {
  personCrud
    .delete(req.params.id)
    .then((data) => {
      if (data) res.send(data);
      else raiseRecord404Error(req, res);
    })
    .catch((err) => next(err));
};

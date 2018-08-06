const pg = require('pg');
const Sequelize = require('sequelize');
const morgan = require('morgan');
const db = new Sequelize('postgres://localhost:5432/plantr');

modules.export = db;

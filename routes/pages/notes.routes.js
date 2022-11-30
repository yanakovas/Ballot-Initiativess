const notesRouter = require('express').Router();
const { User } = require('../../db/models');

const { Note } = require('../../db/models');
const NotePage = require('../../views/notes/NotePage');
const NotesPage = require('../../views/notes/NotesPage');

module.exports = notesRouter;

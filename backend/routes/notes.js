const express = require("express");
const fetchuser = require("../Middleware/fetchuser");
const router = express.Router();
const Note = require("../models/Note");
const mongoose = require("mongoose");
const { Schema } = mongoose;
const { body, validationResult } = require("express-validator");

//Fetching the user notes using  GET
//endpoint /api/auth/fetchallnotes
//login required
//Route 1

router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
    console.log("fetchallnotes is working fine");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error :(");
  }
});

//Adding new notes
//endpoint /api/auth/addnote
//login required
//Route 2
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Description must be at least 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const note = new Note({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savednote = await note.save();
      res.json(savednote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error :(");
    }
  }
);

//Updating notes
//endpoint /api/auth/updatenote
//login required
//Route 3

router.put(
  "/updatenote/:id",
  fetchuser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Description must be at least 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      const newNote = {};
      if (title) {
        newNote.title = title;
      }

      if (description) {
        newNote.description = description;
      }
      if (tag) {
        newNote.tag = tag;
      }

      //Finding the note to be updated
      let note = await Note.findById(req.params.id);
      if (!note) {
        return res.status(404).send("Not found");
      }
      if (note.user.toString() !== req.user.id) {
        return res.status(401).send("Access denied");
      }

      note = await Note.findByIdAndUpdate(
        req.params.id,
        { $set: newNote },
        { new: true }
      );
      res.json({ note });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error :(");
    }
  }
);

//Delete an existing note using DELETE
//endpoint /api/auth/deletenote
//login required
//Route 4

router.delete(
  "/deletenote/:id",
  fetchuser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Description must be at least 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      //Finding the note to be deleted and delete it
      let note = await Note.findById(req.params.id);
      if (!note) {
        return res.status(404).send("Not found");
      }

      //Allow deletion only to the note's owner
      if (note.user.toString() !== req.user.id) {
        return res.status(401).send("Access denied");
      }

      note = await Note.findByIdAndDelete(req.params.id);
      res.json({ Success: "Note has been deleted successfully", note: note });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error :(");
    }
  }
);
module.exports = router;

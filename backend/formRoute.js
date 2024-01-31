const express = require("express");
const { formController } = require("./formController");

const router =express.Router();

router.post("/form",formController)

exports.router=router
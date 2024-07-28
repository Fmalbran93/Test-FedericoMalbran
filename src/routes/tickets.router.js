const express = require("express");
const TicketController = require("../controllers/ticket.controller");

const router = express.Router();
const ticket = new TicketController();

router.get("/", ticket.getTicket);
router.get("/:pid", ticket.getTicketById);

module.exports = router;
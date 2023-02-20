let express = require("express");
let router = express.Router();

router.get("/", function(req,res) {
    res.send("Here are all the books")
});
router.get("/:id", function(req,res) {
    res.send("Here the book with id" + req.params.id);
});
module.exports = router;

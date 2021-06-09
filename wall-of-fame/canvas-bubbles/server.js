/* eslint-env node */
/* eslint no-console: "off" */

const path = require("path");
const express = require("express");
const app = express();

// Run static server
app.set(2108);
app.use("/", express.static(path.join(__dirname, ".")));
app.listen(2108);

console.log("🚀 Paint worklet test up and running at http://localhost:2108/");
console.log("ℹ️ Press Ctrl+C to return to the real world.");

const path = require('path');
const express = require('express');
const app = express();

app.use(express.static("public_temp"));
/*app.get("/", (req, res) => {
 res.sendFile(path.join(__dirname, "public_temp", "index.html"));
});
*/
// start express server on port 5000
app.listen(process.env.PORT || 5000, () => {
  console.log("server started on port 5000");
});

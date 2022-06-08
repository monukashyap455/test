const express = require("express");
const app = express();
app.use(express.json());
require("./database/mongodb");

const user = require("./routes/users");

app.use(user)



const port = process.env.PORT || 6000
app.listen(port, () => console.log(`server is running on port ${port}`));
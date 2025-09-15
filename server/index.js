const express = require('express');
const cors = require('cors');
const pg = require('pg');       

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = new pg.Client({
  user: DB_User,
  host: DB_Host,
  database: "epac",
  password: "Anmol@123@",
  port: 5432,
});
db.connect();











app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

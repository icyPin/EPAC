require('dotenv').config(); 

const express = require('express');
const cors = require('cors');
const pg = require('pg');       

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = new pg.Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false 
  }
});

db.connect()
  .then(() => console.log('Successfully connected to Supabase Postgres!'))
  .catch(err => console.error('Connection error:', err.stack));

app.post('/api/contact', async (req, res) => {
    
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required." });
    }

    try {

        const query = `
            INSERT INTO contact_messages (name, email, message) 
            VALUES ($1, $2, $3) 
            RETURNING *;
        `;
        const values = [name, email, message];

        const result = await db.query(query, values);

        res.status(201).json({ 
            success: true, 
            message: "Message saved successfully!",
            data: result.rows[0] 
        });

    } catch (error) {
        console.error("Database Error:", error);
        res.status(500).json({ error: "Failed to save message to the database." });
    }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
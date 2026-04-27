import express from 'express'
import { connection } from './db.js';

const app = express()
app.use(express.json())


// list
app.get('/users', (req, res) => {
    connection.query('SELECT * FROM users', (err, results) => {
        if (err) {
            return res.status(500).send({ error: err.message });
        }

        res.send(results); 
    });
});

// create
app.post('/user', (req, res) => {
    const name = req.body.name;
    const sql = 'INSERT INTO users (user) VALUES (?)';

    connection.query(sql, [name], (err, results) => {
        if (err) {
            return res.status(500).send({ error: err.message });
        }

        res.status(201).send({
            message: 'User created successfully',
            userId: results.insertId,
            userName: name
        });
    });
})

// update
app.put('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const newName = req.body.name;

    const sql = 'SELECT * FROM users WHERE id = (?)';
    const sqlUpdate = 'UPDATE users SET user = ? WHERE id = ?';

    connection.query(sql, [id], (err, results) => {
        if (err) {
            res.status(500).send({ error: 'Database error' });
        }

        if (results.length === 0) {
            return res.status(404).send({ error: 'User not found' });
        }

        connection.execute(sqlUpdate, [newName, id])
        res.send({ id, name: newName, message: 'User updated successfully' });
    })
})
// delete
app.delete('/user/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const sql = 'SELECT * FROM users WHERE id = (?)';
    const sqlDelete = 'DELETE FROM users WHERE id = (?)';

    connection.query(sql, [id], (err, results) => {
        if (err) {
            res.status(500).send({ error: 'Database error' });
        }

        if (results.length === 0) {
            return res.status(404).send({ error: 'User not found' });
        }

        connection.execute(sqlDelete, [id])
        res.send({ message: 'Delete user successfully' });
    })
})


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})

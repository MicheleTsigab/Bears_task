import db from '../database/database.js';
let visitor=db.run(`CREATE TABLE visitor (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstname text,
    lastname text,
    created_at text
    )`,
(err) => {
    if (err) {
        console.log(err.message)
    }
});  
export default visitor;

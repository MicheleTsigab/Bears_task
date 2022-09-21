import sql from 'sqlite3';
var sqlite3 = sql.verbose()

const DBSOURCE = "./database/db.sqlite"

var db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message);
      throw err
    }else{
        console.log('Connected to the SQLite database.');
        
    }
});


export default db;

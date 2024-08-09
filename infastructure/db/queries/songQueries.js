const db = require("..");

const getAllSongs = async () => {
    const result = await db.query('SELECT * FROM songs');
    console.log('RESULT ROWS IN THE CONSOLE #############', result.rows);
    return result.rows;
}

module.exports = {getAllSongs};
const mysql = require('mysql')

const connection = mysql.createConnection({
	host     : 'database',
	user     : 'root',
	password : 'joakimbrandt',
	database : 'joakimbrandt'
})

module.exports = connection
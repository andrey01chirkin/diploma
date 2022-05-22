const {Pool} = require('pg')

const pool = new Pool({
	user: 'postgres',
	password: 'asdf',
	host: 'localhost',
	port: 5432,
	database: 'sptd'
})

module.exports = pool
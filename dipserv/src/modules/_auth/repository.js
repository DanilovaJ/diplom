const { Pool } = require('pg');

class Repository {
	constructor() {
		this.pool = new Pool({
			connectionString: 'postgres://xplbjqvf:8Hl5Gf6xEZ5KvLuBLfhPs0d5n563ULlx@kandula.db.elephantsql.com/xplbjqvf',
		});
	};

		async disconnect() {
		this.pool.end();
	} 

	async createUser(userData) {
		const query = `
			INSERT INTO users(login, name, second_name, password, house_id, room, role) 
			VALUES ('${userData.login}', '${userData.name}', '${userData.second_name}', '${userData.password}', '${userData.house_id}', ${userData.room}, 'STUDENT') 
			RETURNING *;
		`;
		const data = await this.pool.query(query);
		return data.rows[0];
	};

	async findUserByLogin(userData) {
		const query = `
			SELECT * FROM users
			WHERE users.login = '${userData.login}';
		`; 
		const data = await this.pool.query(query);
		return data.rows;
	};

	async findUserByNameSecondNamePassword(userData) {
		const query = `
			SELECT * FROM users
			WHERE users.login = '${userData.login}' AND users.password = '${userData.password}';
		`; 
		const data = await this.pool.query(query);
		return data.rows;
	};
}
module.exports = Repository;
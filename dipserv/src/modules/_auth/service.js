const moment = require('moment');
const AuthRepository = require('./repository');
const WEEKDAYS = require('./constants/WEEKDAYS');

const service = {
	registration: async (userData) => {
		const repository = new AuthRepository();

		if (
			!userData.login ||
			!userData.password || 
			!userData.name || 
			!userData.second_name || 
			!userData.house_id ||
			!userData.room
		) {
			throw Error('Введены не все данные');
		}

		console.log(1);
		const dublicates = await repository.findUserByLogin(userData);
		if (dublicates.length) {
			throw Error('Пользователь с таким логином уже существует');
		}


		const res = await repository.createUser(userData);
		repository.disconnect();
		return res;		
	},

	login: async (userData) => {

		if (!userData.login || !userData.password) {
			throw Error('Введены не все данные');
		}
 
		const repository = new AuthRepository();

		const candidates = await repository.findUserByNameSecondNamePassword(userData);
		if (!candidates.length) {
			throw Error('Введены неверные данные');
		}

		repository.disconnect();
		return candidates[0];		
	},
};
module.exports = service;
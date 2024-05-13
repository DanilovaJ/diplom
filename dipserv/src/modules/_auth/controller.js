const service = require('./service');

const controller = {
	registration: async (req, res) => {
		try {
			const { authData } = req.body;
			const data = await service.registration(authData);
			res.json(data);
		} catch(e) {
			res.status(500).send({ message: e.message });
		}
	},

	login: async (req, res) => {
		try {
			const { authData } = req.body;
			const data = await service.login(authData);
			res.json(data);
		} catch(e) {
			res.status(500).send({ message: e.message });
		}
	},
};
module.exports = controller;
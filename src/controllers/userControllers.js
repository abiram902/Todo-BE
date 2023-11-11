const User = require("../model/User");
const bcrypt = require("bcrypt");

const signupUser = async (req, res) => {
	try {
		const { firstName, lastName, email, password, phone } = req.body;

		const user = new User({
			firstName,
			lastName,
			email,
			phone,
		});

		const salt = await bcrypt.genSalt(10);
		const hash = await bcrypt.hash(password, salt);
		user.password = hash;

		await user.save();

		res.status(201).json({ message: "User created successfully" });
	} catch (error) {
		res.status(500).json({ message: error });
	}
};

module.exports = {
	signupUser,
};

const User = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sendMail = require("../services/mailService");

const signupUser = async (req, res) => {
	try {
		const { firstName, lastName, email, password, phone } = req.body;

		const user = new User({
			firstName,
			lastName,
			email,
			phone,
		});

		const token = await jwt.sign(
			{
				firstName: user.firstName,
				lastName: user.lastName,
				email: user.email,
				id: user._id,
				phone: user.phone,
			},
			process.env.JWT_SECRET,
			{},
		);

		const salt = await bcrypt.genSalt(10);
		const hash = await bcrypt.hash(password, salt);
		user.password = hash;
		user.token = token;

		await user.save();

		await sendMail(
			user.email,
			"Your New Account",
			`Hi ${user.firstName}, Your new account has been created successfully!`,
		);

		res.status(201).json({ message: "User created successfully", token });
	} catch (error) {
		res.status(500).json({ message: error });
	}
};

const getAllUsers = async (req, res) => {
	try {
		const users = await User.find();
		res.status(200).json(users);
	} catch (error) {
		res.status(500).json({ message: error });
	}
};

const getUserById = async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		res.status(200).json(user);
	} catch (error) {
		res.status(500).json({ message: error });
	}
};

const updateUserById = async (req, res) => {
	try {
		const user = await User.findByIdAndUpdate(req.params.id, req.body);
		res.status(200).json("User updated successfully");
	} catch (error) {
		res.status(500).json({ message: error });
	}
};

const deleteUserById = async (req, res) => {
	try {
		const user = await User.findByIdAndDelete(req.params.id);
		res.status(200).json("Deleted successfully");
	} catch (error) {
		res.status(500).json({ message: error });
	}
};

const loginUser = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email });

		const matched = await bcrypt.compare(password, user.password);

		if (matched) {
			const token = await jwt.sign(
				{
					firstName: user.firstName,
					lastName: user.lastName,
					email: user.email,
					id: user._id,
					phone: user.phone,
				},
				process.env.JWT_SECRET,
				{},
			);
			user.token = token;
			await user.save();
			res.status(200).json({
				firstName: user.firstName,
				lastName: user.lastName,
				email: user.email,
				phone: user.phone,
			});
		} else {
			res.status(401).json({ message: "Invalid credentials" });
		}
	} catch (error) {
		res.status(500).json({ message: error });
	}
};

module.exports = {
	signupUser,
	getAllUsers,
	getUserById,
	updateUserById,
	deleteUserById,
	loginUser,
};

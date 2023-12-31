const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
	const token = req.headers.authorization;
	if (!token) {
		return res.status(401).json({ error: "No token provided" });
	}
	const user = jwt.verify(token, process.env.JWT_SECRET);
	req.body.user = user;
	next();
};

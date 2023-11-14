const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.EMAIL,
		password: process.env.PASSWORD,
	},
});

const sendMail = async (to, subject, body) => {
	console.log(process.env.EMAIL, process.env.PASSWORD);
	const mailOptions = {
		from: process.env.EMAIL,
		to,
		subject,
		html: body,
	};
	await transporter.sendMail(mailOptions);
};

module.exports = sendMail;

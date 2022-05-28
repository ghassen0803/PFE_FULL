import bcrypt from 'bcryptjs'

const users = [
	// Admin user
	{
		name: 'Ghassen Dallegi',
		email: 'ghassen@gmail.com',
		password: bcrypt.hashSync('12345', 10), //  10 = num rounds
		isAdmin: true,
	},

]

export default users

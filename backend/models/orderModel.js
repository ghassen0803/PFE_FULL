import mongoose from 'mongoose'

// Create Order Schema
const orderSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId, // Gets id of User
			required: true,
			ref: 'User', // Adds relationship between Order and User
		},
		orderItems: [
			{
				name: { type: String, required: true },
				qty: { type: Number, required: true },
				image: { type: String, required: true },
				price: { type: String, required: true },
				product: {
					type: mongoose.Schema.Types.ObjectId, // Gets id of Product
					required: true,
					ref: 'Product', // Adds relationship between Order and Product },
				},
			},
		],
		shippingAddress: {
			address: { type: String, required: true },
			city: { type: String, required: true },
			postalCode: { type: String, required: true },
			country: { type: String, required: true },
		},
		taxPrice: {
			type: Number,
			required: true,
			default: 0.0,
		},
		
		totalPrice: {
			type: Number,
			required: true,
			default: 0.0,
		},
	},
	{
		timestamps: true,
	}
)

const Order = mongoose.model('Order', orderSchema)

export default Order

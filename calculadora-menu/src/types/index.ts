export type Product = {
	id: number,
	price: number,
	title: string
}

export type OrderItem = Product & {
	quantity: number,
}

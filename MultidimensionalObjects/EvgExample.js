"use strict"

let user = {
	last_name: "Hoou",
	first_name: "Pizda",
	address: {
		city: "City Hoou",
		street: "Street Pizda"
	},
	social_networks: [
		{name: "VK", link: "vklink"},
		{name: "FB", link: "fblink"}
	],
	transactions: [
		{
			id: 1,
			amount: 450,
			order: {
				id: 5,
				currency: "USD",
				fills: [
					{id: 1, filled: 300, outer: null},
					{id: 2, filled: 100, outer: null},
					{id: 3, filled: 50, outer: null}
				]
			}
		},
		{
			id: 2,
			amount: 150,
			order: {
				id: 5,
				currency: "RUB",
				fills: [
					{id: 2, filled: 100, outer: null},
					{
						id: 3, 
						filled: 50, 
						outer_transaction: {
							id: 1,
							amount: 450,
							order: {
								id: 5,
								currency: "USD",
								fills: [
									{id: 1, filled: 300, outer: null},
									{id: 2, filled: 100, outer: null},
									{id: 3, filled: 50, outer: null}
								]
							}
						},
					}
				]
			}
		}
	]
};
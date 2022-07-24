import React, { Component, useState } from "react";
import CurrencyStore from "../../components/CurrencyStore/CurrencyStore";
import PaymentModal from "../../components/PaymentModal/PaymentModal.component";
import { Container } from "./Currency.style";

const Currency = () => {
	const currencyPoges = [
		{ img: false, pog: 500, price: 5 },
		{ img: false, pog: 1000, price: 10 },
		{ img: false, pog: 1500, price: 15 },
		{ img: false, pog: 2000, price: 20 },
		{ img: true, pog: 5000, price: 50 },
		{ img: true, pog: 10000, price: 100 },
	];
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => setOpen(false);

	return (
		<Container>
			<h2 className='title'>Store</h2>

			<div className='pages'>
				{currencyPoges.map((pog) => (
					<CurrencyStore
						img={pog.img}
						pog={pog.pog}
						handleOpen={handleOpen}
						price={pog.price}
					/>
				))}
			</div>
			<PaymentModal
				open={open}
				handleClose={handleClose}
				handleOpen={handleOpen}
			/>
		</Container>
	);
};

export default Currency;

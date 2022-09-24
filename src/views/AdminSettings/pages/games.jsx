import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { CustomeTable } from "./match-history-style";
const Games = () => {
	return (
		<>
			<CustomeTable>
				<caption>Games</caption>
				<thead>
					<tr>
						<th scope='col'>Game Name</th>
						<th scope='col'>Type</th>
						<th scope='col'>Number of players</th>
						<th scope='col'>Total pogs</th>
						<th scope='col'>Date</th>
						<th scope='col'>Time</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td data-label='user'>Game 1</td>
						<td data-label='date'>Team</td>
						<td data-label='Game'>4 / 6</td>
						<td data-label='Payout'>1000</td>
						<td data-label='Date'>12-12-2022</td>
						<td data-label='Date' style={{ display: "flex" }}>
							3:00 PM
						</td>
					</tr>
					<tr>
						<td data-label='user'>Game 2</td>
						<td data-label='date'>Solo</td>
						<td data-label='Game'>2 / 3</td>
						<td data-label='Payout'>1000</td>
						<td data-label='Date'>12-12-2022</td>
						<td data-label='Date' style={{ display: "flex" }}>
							3:00 PM
						</td>
					</tr>
					<tr>
						<td data-label='user'>Game 3</td>
						<td data-label='date'>Team</td>
						<td data-label='Game'>2 / 6</td>
						<td data-label='Payout'>2000</td>
						<td data-label='Date'>12-12-2022</td>
						<td data-label='Date' style={{ display: "flex" }}>
							3:00 PM
						</td>
					</tr>
					<tr>
						<td data-label='user'>Game 1</td>
						<td data-label='date'>Team</td>
						<td data-label='Game'>4 / 5</td>
						<td data-label='Payout'>1000</td>
						<td data-label='Date'>12-12-2022</td>
						<td data-label='Date' style={{ display: "flex" }}>
							3:00 PM
						</td>
					</tr>
				</tbody>
			</CustomeTable>
		</>
	);
};
export default Games;

import { Button } from "@mui/material";
import React from "react";
import { CustomeTable } from "./match-history-style";
const Pogs = () => {
	return (
		<>
			<CustomeTable>
				<caption>Pogs</caption>
				<thead>
					<tr>
						<th scope='col'>Name of Game</th>
						<th scope='col'>Pogs</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td data-label='user'>Game 1</td>
						<td data-label='date'>200 of 500</td>
					</tr>
					<tr>
						<td data-label='user'>Game 2</td>
						<td data-label='date'>100 of 300</td>
					</tr>
					<tr>
						<td data-label='user'>Game 3</td>
						<td data-label='date'>400 of 1000</td>
					</tr>
					<tr>
						<td data-label='user'>Game 4</td>
						<td data-label='date'>200 of 200</td>
					</tr>
				</tbody>
			</CustomeTable>
		</>
	);
};
export default Pogs;

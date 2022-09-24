import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { CustomeTable } from "./match-history-style";
const Recomendations = () => {
	return (
		<>
			<CustomeTable>
				<caption>Match Recomendations</caption>
				<thead>
					<tr>
						<th scope='col'>User</th>
						<th scope='col'>Date</th>
						<th scope='col'>Time</th>
						<th scope='col'>Number of players</th>
						<th scope='col'>Type</th>
						<th scope='col'>Action</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td data-label='user'>Henok</td>
						<td data-label='date'>08/21/2020</td>
						<td data-label='Game'>3:55 PM </td>
						<td data-label='Payout'>5</td>
						<td data-label='Date'>Team Match</td>
						<td data-label='Date' style={{ display: "flex" }}>
							<Button variant='outlined' color='success'>
								Approve
							</Button>
							<Button
								variant='outlined'
								color='warning'
								style={{ marginLeft: "10px" }}
							>
								Decline
							</Button>
						</td>
					</tr>
					<tr>
						<td data-label='user'>Henok</td>
						<td data-label='date'>08/21/2020</td>
						<td data-label='Game'>3:55 PM </td>
						<td data-label='Payout'>5</td>
						<td data-label='Date'>Team Match</td>
						<td data-label='Date' style={{ display: "flex" }}>
							<Button variant='outlined' color='success'>
								Approve
							</Button>
							<Button
								variant='outlined'
								color='warning'
								style={{ marginLeft: "10px" }}
							>
								Decline
							</Button>
						</td>
					</tr>
					<tr>
						<td data-label='user'>Henok</td>
						<td data-label='date'>08/21/2020</td>
						<td data-label='Game'>3:55 PM </td>
						<td data-label='Payout'>5</td>
						<td data-label='Date'>Team Match</td>
						<td data-label='Date' style={{ display: "flex" }}>
							<Button variant='outlined' color='success'>
								Approve
							</Button>
							<Button
								variant='outlined'
								color='warning'
								style={{ marginLeft: "10px" }}
							>
								Decline
							</Button>
						</td>
					</tr>
					<tr>
						<td data-label='user'>Henok</td>
						<td data-label='date'>08/21/2020</td>
						<td data-label='Game'>3:55 PM </td>
						<td data-label='Payout'>5</td>
						<td data-label='Date'>Team Match</td>
						<td data-label='Date' style={{ display: "flex" }}>
							<Button variant='outlined' color='success'>
								Approve
							</Button>
							<Button
								variant='outlined'
								color='warning'
								style={{ marginLeft: "10px" }}
							>
								Decline
							</Button>
						</td>
					</tr>
				</tbody>
			</CustomeTable>
		</>
	);
};
export default Recomendations;

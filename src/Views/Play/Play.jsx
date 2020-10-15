import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';

import { AuthContext } from '../../Context/auth';

import './Play.scss';

const API = process.env.REACT_APP_API;

const Play = (props) => {
	const { snapId } = props.match.params;
	const { state: authState } = useContext(AuthContext);

	const [snap, setSnap] = useState({});

	useEffect(() => {
		const fetchSnap = async () => {
			const res = await axios(`${API}/snapshots/${snapId}`, {
				headers: {
					Authorization: `Bearer ${authState.token}`,
				},
			});
			console.log({ res });
			setSnap(res.data);
		};
		fetchSnap();
		console.log(snap);
	}, []);

	return (
		<main className="play">
			<h1></h1>
			<section>
				<div className="play__quiz">
					<div className="quiz__snap">
						<div className="snap__details">
							<span>Posted By: </span>
							<span>First Solved By:</span>
							<span>Solved: Times</span>
						</div>
						<div className="snap__image">
							<img src={snap.path} alt="Snapshot from a TV" />
						</div>
						<div className="snap__vote"></div>
						<div className="snap__guess">
							<form>
								<Input></Input>
							</form>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Play;

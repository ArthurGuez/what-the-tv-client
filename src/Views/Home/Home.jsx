import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import { AuthContext } from '../../Context/auth';

import './Home.scss';

const API = process.env.REACT_APP_API;

const Home = () => {
	const { state: authState } = useContext(AuthContext);
	const [snaps, setSnaps] = useState([]);

	useEffect(() => {
		const fetchRecentSnaps = async () => {
			const res = await axios.get(`${API}/snapshots/mostrecent`, {
				headers: {
					Authorization: `Bearer ${authState.token}`,
				},
			});
			setSnaps(res.data);
		};
		fetchRecentSnaps();
	}, [authState.token]);

	return (
		<main className="home">
			<h1>PREVIOUSLY ON WHAT THE TV...</h1>

			<section>
				<h2>Recent Snapshots</h2>
				<div className="home__recent-snaps">
					{snaps.map((snap, i) => (
						<a key={i} href={`play/${snap.id}`}>
							<div className="recent-snaps__snap">
								<img src={snap.path} alt="A snapshot" />
							</div>
						</a>
					))}
				</div>
			</section>

			<section>
				<h2>Leaderboards</h2>
				<div className="home__leaderboards">
					<div className="leaderboards__top">
						<h3>Solvers</h3>
						<div className="top__user">
							<div className="user__position"></div>
							<div className="user__avatar"></div>
							<div className="user__username"></div>
						</div>
						<div className="top__user">
							<div className="user__position"></div>
							<div className="user__avatar"></div>
							<div className="user__username"></div>
						</div>
						<div className="top__user">
							<div className="user__position"></div>
							<div className="user__avatar"></div>
							<div className="user__username"></div>
						</div>
					</div>
					<div className="leaderboards__top">
						<h3>Contributors</h3>
						<div className="top__user">
							<div className="user__position"></div>
							<div className="user__avatar"></div>
							<div className="user__username"></div>
						</div>
						<div className="top__user">
							<div className="user__position"></div>
							<div className="user__avatar"></div>
							<div className="user__username"></div>
						</div>
						<div className="top__user">
							<div className="user__position"></div>
							<div className="user__avatar"></div>
							<div className="user__username"></div>
						</div>
					</div>
				</div>
			</section>

			<section>
				<h2>Snapshot of the Day</h2>
				<div className="home__day-snap">
					<img src="" alt="" />
				</div>
			</section>
			<section>
				<h2>Snapshot of the Month</h2>
				<div className="home__month-snap">
					<img src="" alt="" />
				</div>
			</section>
		</main>
	);
};

export default Home;

import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';

import { AuthContext } from '../../Context/auth';

import useForm from '../../CustomHooks/useForm';

import Button from '../../Components/Button/Button';
import Loader from '../../Components/Loader/Loader';
import { ReactComponent as Heart } from '../../assets/images/heart.svg';
import { ReactComponent as Skull } from '../../assets/images/skull.svg';

import './Play.scss';

const API = process.env.REACT_APP_API;

const Play = (props) => {
	const { snapId } = props.match.params;
	const { state: authState } = useContext(AuthContext);
	const [snap, setSnap] = useState({});

	const initialState = {
		guess: '',
	};

	const { handleChange, handleSubmit, data, setData } = useForm(initialState, null, submit);

	useEffect(() => {
		const fetchSnap = async () => {
			const res = await axios.get(`${API}/snapshots/${snapId}`, {
				headers: {
					Authorization: `Bearer ${authState.token}`,
				},
			});
			setSnap(res.data);
		};
		fetchSnap();
	}, [snapId, authState.token]);

	async function submit() {
		try {
			const guess = await axios.post(
				`${API}/snapshots/guess/${snapId}`,
				{
					guess: data.guess,
				},
				{
					headers: {
						Authorization: `Bearer ${authState.token}`,
					},
				}
			);

			if (guess.data.message) {
				// Toggle class qui ajoute du rouge à l'input et une croix
				return;
			} else {
				await axios.patch(`${API}/snapshots/solved/${snapId}`);
			}
		} catch (error) {
			setData({
				...data,
				errorMessage: error.response.data.description,
			});
		}
	}

	return snap ? (
		<main className="play">
			<h1>Guess The TV Show</h1>
			<section className="play__quiz">
				<div className="quiz__snap">
					<div className="snap__details">
						<span>Posted By: {snap.postedBy}</span>

						<span className="details__separator"></span>

						<span>First Solved By: {snap.firstSolvedBy ? snap.firstSolvedBy : 'Nobody'}</span>

						<span className="details__separator"></span>

						<span>
							Solved:{' '}
							{snap.solved > 0
								? snap.solved > 1
									? `${snap.solved} Times`
									: `${snap.solved} Time`
								: 'Not Yet'}{' '}
						</span>
					</div>
					<div className="snap__image">
						<img src={snap.path} alt="Guess this snapshot" />
					</div>
					<div className="snap__vote">
						<span>☆</span>
						<span>☆</span>
						<span>☆</span>
						<span>☆</span>
						<span>☆</span>
					</div>
					<div className="snap__interactions">
						<div className="interactions__like-report">
							<Heart className="interactions__like" />
							<Skull className="interactions__report" />
						</div>
						<div className="interactions__guess">
							<form onSubmit={handleSubmit} noValidate>
								<label htmlFor="guess"></label>
								<input
									type="text"
									name="guess"
									id="guess"
									value={data.guess}
									onChange={handleChange}
								/>
								<button type="submit" className="guess__verify">
									Try
								</button>
							</form>
						</div>
						<Button className="interactions__next">Next</Button>
					</div>
				</div>
			</section>

			<section>
				<h2>Shoutbox</h2>
				<div className="play__shoutbox">
					<form>
						<label></label>
						<input />
					</form>
				</div>
			</section>

			<section>
				<h2>Shouts</h2>
				<div className="play__shouts">
					<div className="shouts__shout">
						<div className="shout__avatar"></div>
						<div className="shout__name"></div>
						<p className="shout__content"></p>
					</div>
				</div>
			</section>
		</main>
	) : (
		<Loader />
	);
};

export default Play;

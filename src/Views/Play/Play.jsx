import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';

import { AuthContext } from '../../Context/auth';

import useForm from '../../CustomHooks/useForm';

import Loader from '../../Components/Loader/Loader';
import Input from '../../Components/Input/Input';

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
			<section>
				<div className="play__quiz">
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
						<div className="snap__vote"></div>
						<div className="snap__guess">
							<form onSubmit={handleSubmit} noValidate>
								<label htmlFor="guess"></label>
								<Input
									type="text"
									name="guess"
									id="guess"
									value={data.guess}
									onChange={handleChange}
								/>
								<button type="submit" className="snap__verify">
									Try
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>
		</main>
	) : (
		<Loader />
	);
};

export default Play;

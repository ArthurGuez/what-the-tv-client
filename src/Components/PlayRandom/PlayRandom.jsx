import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import { AuthContext } from '../../Context/auth';

const API = process.env.REACT_APP_API;

const PlayRandom = () => {
	const { state: authState } = useContext(AuthContext);
	const history = useHistory();

	useEffect(() => {
		const fetchSnap = async () => {
			const res = await axios.get(`${API}/snapshots/random`, {
				headers: {
					Authorization: `Bearer ${authState.token}`,
				},
			});
			history.push(`/play/${res.data.id}`);
		};
		fetchSnap();
	});

	return null;
};

export default PlayRandom;

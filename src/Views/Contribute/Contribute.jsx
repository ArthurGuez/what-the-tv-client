// A REPRENDRE DANS LE FRONT ---> findShow: (search) => {
// 	const results = `https://api.themoviedb.org/3/search/tv?api_key=efbd136e89c83ddcf195e48a61327f4a&language=en-US&page=1&query=${search}&include_adult=false`;
// },

import React, { useContext, useState } from 'react';
import axios from 'axios';

import { AuthContext } from '../../Context/auth';

import useForm from '../../CustomHooks/useForm';

import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';

import './Contribute.scss';

const API = process.env.REACT_APP_API;

const Contribute = () => {
	const { state: authState } = useContext(AuthContext);
	const [show, setShow] = useState({});

	const initialState = {
		title: '',
	};

	const { handleChange, handleSubmit, data, setData, setIsSubmitting } = useForm(
		initialState,
		null,
		submit
	);

	async function submit() {
		try {
			const res = await axios.post(
				`${API}/shows/find`,
				{ title: data.title },
				{
					headers: {
						Authorization: `Bearer ${authState.token}`,
					},
				}
			);
			if (res.status === 200) {
				setShow(res.data);
				setIsSubmitting(false);
			}
		} catch (error) {
			setData({
				...data,
				errorMessage: error.response.data.description,
			});
			setIsSubmitting(false);
		}
	}

	return (
		<main className="contribute">
			<h1>Contribute</h1>
			<section className="contribute__selection">
				<h2>Find Your TV Show</h2>
				<form onSubmit={handleSubmit} noValidate>
					<label htmlFor="title"></label>
					<Input type="text" name="title" id="title" value={data.title} onChange={handleChange} />
					<Button type="submit">Search</Button>
				</form>
				<div></div>
				{data.errorMessage ? (
					<div>
						<span>{data.errorMessage}</span> <Button>Add a show</Button>
					</div>
				) : null}
				{show.title ? <span>You've selected {show.title}</span> : null}
				<h2>Which Season?</h2>
				<h2>Which Episode?</h2>
			</section>
			<section className="contribute__verify">
				<h2>Already Uploaded Snapshots</h2>
				<div></div>
				<button>My bad it's already there</button>
				<button>I double checked. It has not been uploaded yet</button>
			</section>
		</main>
	);
};

export default Contribute;

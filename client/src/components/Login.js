import { React, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Login() {
	const [data, setData] = useState({ email: '', password: '' });
	const [error, setError] = useState('');

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = 'http://localhost:8080/api/auth';
			const { data: res } = await axios.post(url, data);
			localStorage.setItem('token', res.data);
			window.location = '/';
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div>
			<div class='h-screen bg-indigo-100 flex justify-center items-center'>
				<div class='lg:w-2/5 md:w-1/2 w-2/3'>
					<form
						class='bg-white p-10 rounded-lg shadow-lg min-w-full'
						onSubmit={handleSubmit}
					>
						<h1 class='text-center text-2xl mb-6 text-gray-600 font-bold font-sans'>
							LOGIN
						</h1>

						<div>
							<label
								class='text-gray-800 font-semibold block my-3 text-md'
								for='email'
							>
								Email
							</label>
							<input
								class='w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none'
								type='text'
								name='email'
								id='email'
								onChange={handleChange}
								value={data.email}
								required
								placeholder='@email'
							/>
						</div>

						<div>
							<label
								class='text-gray-800 font-semibold block my-3 text-md'
								for='password'
							>
								Password
							</label>
							<input
								class='w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none'
								type='password'
								name='password'
								id='password'
								onChange={handleChange}
								value={data.password}
								required
								placeholder='password'
							/>
						</div>

						{error && (
							<div class='flex mt-3 items-center bg-red-500 text-white text-sm font-bold px-4 py-3'>
								{error}
							</div>
						)}
						<div></div>
						<button
							type='submit'
							class='w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans'
						>
							Login
						</button>
						<div>
							<Link to='/register'>
								<button
									type='submit'
									class='w-full mt-6 mb-3 bg-indigo-100 rounded-lg px-4 py-2 text-lg text-gray-800 tracking-wide font-semibold font-sans'
								>
									Register
								</button>
								<p class='text-center'>New Here?</p>
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;

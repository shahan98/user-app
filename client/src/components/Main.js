const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem('token');
		window.location.reload();
	};

	return (
		<div class='flex items-center sticky top-0 z-50 bg-white p-2 lg:px-5 shadow-md'>
			<nav class=' items-center flex h-20'>
				<h1 class='text-blue-500'>Welcome!</h1>
				<button
					class='border-2 border-blue-500 rounded-lg mt-6 font-bold text-blue-500 px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white mr-6 absolute inset-y-0 right-0 h-12 w-28 items-center'
					onClick={handleLogout}
				>
					Logout
				</button>
			</nav>
		</div>
	);
};

export default Main;

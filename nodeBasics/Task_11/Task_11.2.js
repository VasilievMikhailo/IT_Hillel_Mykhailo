// function newRequest_to_Server () {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(data => {
//         console.log('GET Response:', data);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });
// }

// newRequest_to_Server()

// function newRequest_to_Server_2 () {
//     return fetch('https://jsonplaceholder.typicode.com/users/1')
//     .then(response => response.json())
//     .then(user_page => {
//         return user_page
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         throw error
//     });
// }

// newRequest_to_Server_2()
//     .then(user_page => {
//         console.log('Getting user', user_page)
//     })
//     .catch(error => {
//         console.log('Error in request :', error.massage);
//     })

function newRequest_UserPage_1() {
	return fetch('https://jsonplaceholder.typicode.com/users/1')
		.then((response) => response.json())
		.then((user_page) => {
			return user_page;
		})
		.catch((error) => {
			console.error('Error:', error);
			throw error;
		});
}

function newRequest_UserPage_2() {
	return fetch('https://jsonplaceholder.typicode.com/users/2')
		.then((response) => response.json())
		.then((user_page) => {
			return user_page;
		})
		.catch((error) => {
			console.error('Error:', error);
			throw error;
		});
}

Promise.all([newRequest_UserPage_1(), newRequest_UserPage_2()])
	.then((result) => {
		const [user_page_1, user_page_2] = result;
		console.log('Resault of Promise.all: ');
		console.log('User_Page_1', user_page_1);
		console.log('User_Page_2', user_page_2);
	})
	.catch((error) => {
		console.error('Error for Promise.all', error.message);
	});

Promise.race([newRequest_UserPage_1(), newRequest_UserPage_2()])
	.then((first_request) => {
		console.log('Resault of Promise.race: ');
		console.log('First User Page:', first_request);
	})
	.catch((error) => {
		console.error('Error for Promise.race: ', error.message);
	});

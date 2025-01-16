// class Request_to_Server {
//     async newRequest_to_Server() {
//         try {
//             const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//             if (!response.ok) {
//                 throw new Error(`HTTP Error: ${response.status}`);
//             }
//             const userPage = await response.json();
//             return userPage;
//         } catch (error) {
//             console.error('Error in UserPage1:', error.message);
//             throw error;
//         }
//     }
// }

// const request = new Request_to_Server();

// (async () => {
//     try {
//         const result = await request.newRequest_to_Server();
//         console.log('Result:', result);
//     } catch (error) {
//         console.error('Error:', error.message);
//     }
// })();

// class Request_to_Server_2 {
//     async newRequest_to_Server_2() {
//         try {
//             const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
//             if (!response.ok) {
//                 throw new Error(`HTTP Error: ${response.status}`);
//             }
//             const userPage = await response.json();
//             return userPage;
//         } catch (error) {
//             console.error('Error in UserPage1:', error.message);
//             throw error;
//         }
//     }
// }

// const request = new Request_to_Server_2();

// request.newRequest_to_Server_2()
//     .then(result => {
//         console.log('Result:', result);
//     })
//     .catch(error => {
//         console.error('Error:', error.message);
//     });

class UserPage1 {
	async fetchUserPage() {
		try {
			const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
			if (!response.ok) {
				throw new Error(`HTTP Error: ${response.status}`);
			}
			const userPage = await response.json();
			return userPage;
		} catch (error) {
			console.error('Error in UserPage1:', error.message);
			throw error;
		}
	}
}

class UserPage2 {
	async fetchUserPage() {
		try {
			const response = await fetch('https://jsonplaceholder.typicode.com/users/2');
			if (!response.ok) {
				throw new Error(`HTTP Error: ${response.status}`);
			}
			const userPage = await response.json();
			return userPage;
		} catch (error) {
			console.error('Error in UserPage2:', error.message);
			throw error;
		}
	}
}

class Request_of_Users {
	async newRequest_of_Users() {
		try {
			const userPage1 = new UserPage1();
			const userPage2 = new UserPage2();

			const results = await Promise.all([userPage1.fetchUserPage(), userPage2.fetchUserPage()]);

			const [user1, user2] = results;

			console.log('Result of Promise.all:');
			console.log('User_Page_1:', user1);
			console.log('User_Page_2:', user2);

			const firstResult = await Promise.race([userPage1.fetchUserPage(), userPage2.fetchUserPage()]);

			console.log('Result of Promise.race:');
			console.log('First User Page:', firstResult);
		} catch (error) {
			console.error('Error in handleRequests:', error.message);
		}
	}
}

const Request_of_Users_Array = new Request_of_Users();
Request_of_Users_Array.newRequest_of_Users();

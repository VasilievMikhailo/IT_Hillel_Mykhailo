// async function newRequest_to_Server() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//         if (!response.ok) {
//             throw new Error(`HTTP Error: ${response.status}`);
//         }
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Error in UserPage_1:', error.message);
//         throw error;
//     }
// }

// (async () => {
//     try {
//         const newRequest = await newRequest_to_Server();
//         console.log('Request: ', newRequest);
//     } catch (error) {
//         console.error('Error in request: ', error.message);
//     }
// })();


async function newRequest_to_Server_2() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        const user_page = await response.json();
        return user_page;
    } catch (error) {
        console.error('Error in UserPage_1:', error.message);
        throw error;
    }
}

newRequest_to_Server_2()
    .then(userPage => console.log('User Page:', userPage))
    .catch(error => console.error('Error:', error.message));

// (async () => {
//     try {
//         const newRequest = await newRequest_to_Server_2();
//         console.log('Request: ', newRequest);
//     } catch (error) {
//         console.error('Error in request: ', error.message);
//     }
// })();


// async function newRequest_UserPage_1() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
//         if (!response.ok) {
//             throw new Error(`HTTP Error: ${response.status}`);
//         }
//         const user_page = await response.json();
//         return user_page;
//     } catch (error) {
//         console.error('Error in UserPage_1:', error.message);
//         throw error;
//     }
// }

// async function newRequest_UserPage_2() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users/2');
//         if (!response.ok) {
//             throw new Error(`HTTP Error: ${response.status}`);
//         }
//         const user_page = await response.json();
//         return user_page;
//     } catch (error) {
//         console.error('Error in UserPage_1:', error.message);
//         throw error;
//     }
// }

// async function runRequests() {
//     try {
//         const results = await Promise.all([
//             newRequest_UserPage_1(),
//             newRequest_UserPage_2()
//         ]);
//         const [user_page_1, user_page_2] = results;

//         console.log('Result of Promise.all:');
//         console.log('User_Page_1:', user_page_1);
//         console.log('User_Page_2:', user_page_2);

//         const first_request = await Promise.race([
//             newRequest_UserPage_1(),
//             newRequest_UserPage_2()
//         ]);

//         console.log('Result of Promise.race:');
//         console.log('First User Page:', first_request);

//     } catch (error) {
//         console.error('Error during Requests:', error.message);
//     }
// }

// runRequests();
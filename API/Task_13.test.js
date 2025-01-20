const { default: axios } = require('axios');

describe('API Tests for GET', () => {
  test('GET list of posts', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  
    expect(response.status).toBe(200);

    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0);

    const firstPost = response.data[0];
    expect(firstPost).toHaveProperty('userId');
    expect(firstPost).toHaveProperty('id');
    expect(firstPost).toHaveProperty('title');
    expect(firstPost).toHaveProperty('body');
  });

  test('GET fisrt post', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
  
    expect(response.status).toBe(200);

    expect(typeof response.data).toBe('object');
    expect(response.data).not.toBeNull();

    const post = response.data;
    expect(post).toHaveProperty('userId');
    expect(post).toHaveProperty('id');
    expect(post).toHaveProperty('title');
    expect(post).toHaveProperty('body');
  });

  
  test('GET comments for post 1', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1/comments');
  
    expect(response.status).toBe(200);

    expect(typeof response.data).toBe('object');
    expect(response.data).not.toBeNull();

  });
});

describe('API Tests for POST', () => {
  test('POST new Post', async () => {
    const newPost = {
      title: 'TEST',
      body: 'TEST_FOR_TASK_13',
      userId: 1,
    };

    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
    
    expect(response.status).toBe(201);
  
    const createdPost = response.data;
    expect(createdPost).toHaveProperty('id');
    expect(createdPost.title).toBe(newPost.title);
    expect(createdPost.body).toBe(newPost.body);
    expect(createdPost.userId).toBe(newPost.userId);
  
  });
  
  test('POST with check for userID integer number', async () => {
    const newPost = {
      title: 'TEST',
      body: 'TEST_FOR_TASK_13',
      userId: 'test',
    };
  
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
    
    expect(response.status).toBe(201);

    const createdPost = response.data;
    expect(createdPost).toHaveProperty('id');
    expect(createdPost.title).toBe(newPost.title);
    expect(createdPost.body).toBe(newPost.body);
    expect(Number.isInteger(createdPost.userId)).toBe(true);  
    expect(createdPost.userId).toBe(newPost.userId);  
  });
});  


// axios.interceptors.request.use(
//   (config) => {
//     console.log('Запит:', {
//       url: config.url,
//       method: config.method,
//       headers: config.headers,
//       data: config.data,
//     });
//     return config;
//   },
//   (error) => {
//     console.error('Помилка запиту:', error);
//     return Promise.reject(error);
//   }
// );

// axios.interceptors.response.use(
//   (response) => {
//     console.log('Відповідь:', {
//       status: response.status,
//       data: response.data,
//     });
//     return response;
//   },
//   (error) => {
//     console.error('Помилка відповіді:', error);
//     return Promise.reject(error);
//   }
// );

// axios.get('https://jsonplaceholder.typicode.com')
//   .then((response) => console.log('Результат:', response.data))
//   .catch((error) => console.error('Помилка:', error));
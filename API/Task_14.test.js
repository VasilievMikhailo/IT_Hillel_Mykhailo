const { default: axios } = require('axios');
const fs = require('fs');
const jsonData = require('./env.json');
// const { error } = require('console');

async function InvalidURL() {
  try {
    await axios.get('https://jsonplaceholder.typicode.com/post');
  } catch (error) {
    return error.response?.status === 404
      ? 'Resource not found'
      : 'An unexpected error';
  }
}

describe('API Tests for GET with invalid URL', () => {
  test('404 error should be handled', async () => {
    const errorMessage = await InvalidURL();
    
    expect(errorMessage).toBe('Resource not found');

    console.log(errorMessage)
  });
});


let createdPostID;
let cretedPostFromTest_1;

describe('API Tests with Params', () => {
  test('Test for POST with "postsUrl" param', async () => {
    console.log('postUrl:', jsonData.postsUrl);

    let response = await axios.post(`${jsonData.postsUrl}`,
        {
            "title": "TEST",
            "body": "TEST_FOR_TASK_14",
            "userId": "14"
        });
      
    expect(response.status).toBe(201);

    expect(response.data.id).toBeDefined();
    expect(response.data.title).toBeDefined();

    createdPostID = response.data.id;
    console.log(createdPostID);
    cretedPostFromTest_1 = response.data.body;
    });

  test('Test for PATCH with "postsUrl" and "createdPostID" params', async () => {
    console.log("Test before new response: ", `${createdPostID}`);
    console.log("Test for URL for userID: ", `${jsonData.postsUrl}/${createdPostID}`);

    let response_2 = await axios.patch(`${jsonData.postsUrl}/${createdPostID}`,
      {
          "body": "NEW BODY for TASK_14",
      });

    
    expect(response_2.status).toBe(200);
    
    expect(response_2.data.body).toBe("NEW BODY for TASK_14");
    console.log(cretedPostFromTest_1);
    console.log(response_2.data.body);
    
  });
});


describe('Mocked tests for 200 and 404 errors', () => {
  test('Mocked 404 error', async () => {
    const mockAxiosGet = jest.fn().mockRejectedValue({
      response: { status: 404 },
    });

    try {
      await mockAxiosGet();
    } catch (error) {
      const errorMessage =
        error.response?.status === 404
          ? 'Resource not found'
          : 'An unexpected error occurred';

      expect(errorMessage).toBe('Resource not found');

      console.log(error.response);
    }
  });

  test('Mocked 200 error', async () => {
    const mockAxiosGet = jest.fn().mockRejectedValue({
      response: { status: 200 },
    });

    try {
      await mockAxiosGet();
    } catch (error) {
      const errorMessage =
        error.response?.status === 200
          ? 'Resource not found'
          : 'An unexpected error occurred';

      expect(errorMessage).toBe('Resource not found');

      console.log(error.response);
    }
  });
});
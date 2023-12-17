const request = require('supertest');
const chai = require('chai');
const app = require('../../../app'); 
const expect = chai.expect;
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const userData = {
  username: 'freshuser88',
  email: 'freshuser88@example.com',
  password: 'password123'
};

// Test for POST /api/v1/users/register
describe('POST /api/v1/users/register', () => {
  let createdUserId; // Define createdUserId here to make it accessible in all hooks and tests

  // Before each test, create a new user
  beforeEach(async () => {
    const res = await request(app)
      .post('/api/v1/users/register')
      .send(userData);

    if (res.body.user) {
      createdUserId = res.body.user.id;
      // Test if user is created
      expect(res.body.user).to.be.an('object');
    } else {
      throw new Error('User was not created');
    }
  });

  //Test If Duplicate User is Created
  it('Should not create a duplicate user', async () => {
    const res = await request(app)
      .post('/api/v1/users/register')
      .send(userData);
    expect(res.status).to.equal(400);
    expect(res.body.error).to.equal('User with this email already exists');
  });

  // After each test, delete the user
  afterEach(async () => {
    if (createdUserId) {
      await prisma.user.delete({
        where: { id: createdUserId }
      });
    }
  });
});

// Test GET /api/v1/users/
describe('GET /api/v1/users/', () => {

  // Test if user is retrieved
  it('Should retrieve all users', async () => {
    const res = await request(app).get('/api/v1/users/');
    expect(res.status).to.equal(200);
  });

});

// Test  GET /api/v1/users/<id>
describe('GET /api/v1/users/:id', () => {
  let createdUserId; // Define createdUserId here to make it accessible in all hooks and tests

  // Before each test, create a new user
  beforeEach(async () => {
    const res = await request(app)
      .post('/api/v1/users/register')
      .send(userData);

    if (res.body.user) {
      createdUserId = res.body.user.id;
    } else {
      throw new Error('User was not created');
    }
  });

  // Test if user is retrieved
  it('Should retrieve a user', async () => {
    const res = await request(app).get(`/api/v1/users/${createdUserId}`);
    expect(res.status).to.equal(200);
  });

  // After each test, delete the user
  afterEach(async () => {
    if (createdUserId) {
      await prisma.user.delete({
        where: { id: createdUserId }
      });
    }
  });
});

// Test POST /api/v1/users/login
describe('POST /api/v1/users/login', () => {
  let createdUserId; // Define createdUserId here to make it accessible in all hooks and tests

  // Before each test, create a new user
  beforeEach(async () => {
    const res = await request(app)
      .post('/api/v1/users/register')
      .send(userData);

    if (res.body.user) {
      createdUserId = res.body.user.id;
    } else {
      throw new Error('User was not created');
    }
  });

  // Test if user is retrieved
  it('Should login a user', async () => {
    const res = await request(app)
      .post('/api/v1/users/login')
      .send(userData);
    expect(res.status).to.equal(200);
  });

  // After each test, delete the user
  afterEach(async () => {
    if (createdUserId) {
      await prisma.user.delete({
        where: { id: createdUserId }
      });
    }
  });
});

// Test GET /api/v1/users/logout
describe('GET /api/v1/users/logout', () => {
  let createdUserId; // Define createdUserId here to make it accessible in all hooks and tests

  // Before each test, create a new user
  beforeEach(async () => {
    const res = await request(app)
      .post('/api/v1/users/register')
      .send(userData);

    if (res.body.user) {
      createdUserId = res.body.user.id;
    } else {
      throw new Error('User was not created');
    }
    // Login the user
    await request(app)
      .post('/api/v1/users/login')
      .send(userData);
  });

  // Test if user is retrieved
  it('Should logout a user', async () => {
    const res = await request(app).get('/api/v1/users/logout');
    expect(res.status).to.equal(200);
    expect(res.body.message).to.equal('Logged out successfully');
  });

  // After each test, delete the user
  afterEach(async () => {
    if (createdUserId) {
      await prisma.user.delete({
        where: { id: createdUserId }
      });
    }
  });
});

// describe('PUT /api/v1/users/change-username', () => {
//   let createdUserId;
//   let authToken; // Define authToken here to make it accessible in all hooks and tests

//   // Before each test, create a new user and log in
//   beforeEach(async () => {
//     const registerRes = await request(app)
//       .post('/api/v1/users/register')
//       .send(userData);

//     if (registerRes.body.user) {
//       createdUserId = registerRes.body.user.id;
//     } else {
//       throw new Error('User was not created');
//     }

//     // Login the user
//     const loginRes = await request(app)
//       .post('/api/v1/users/login')
//       .send(userData);

//     // Store the auth token
//     authToken = loginRes.body.token;
//   });

//   // Test if username is changed
//   it('Should change username', async function() {
//     this.timeout(5000);
//     const res = await request(app)
//       .put('/api/v1/users/change-username')
//       .set('Authorization', `Bearer ${authToken}`) // Include auth token in Authorization header
//       .send({ username: 'newusername' });
//     expect(res.status).to.equal(200);
//     expect(res.body.message).to.equal('Username changed successfully');
//   });

//   // After each test, delete the user
//   afterEach(async () => {
//     if (createdUserId) {
//       await prisma.user.delete({
//         where: { id: createdUserId }
//       });
//     }
//   });
// });

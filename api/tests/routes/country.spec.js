/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
  id:'ARG',
  name: 'Argentina',
  continent: 'Americas',
  area: 2780400,
  population: 45370000,
  capital: ['Buenos Aires']
};

describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Country.sync({ force: true })
    .then(() => Country.create(country)));
  describe('GET /countries', () => {
    xit('should get 200', () =>
      agent.get('/countries').expect(200)
    );
  });
});

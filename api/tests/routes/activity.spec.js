/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Activity, conn } = require('../../src/db.js');

const agent = session(app);
const activity = {
  
  name: 'Caminito',
  duration: '30 minutos',
  difficulty: '2',
  season: 'Verano',
  paises: ['ARG']
};

describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Activity.sync({ force: true })
    /* .then(() => Activity.create(activity)) */);
  describe('POST /activity', () => {
    xit('responde con 302', () =>
      agent.post('/activity').send({...activity}).expect(302)
    );
  });
});

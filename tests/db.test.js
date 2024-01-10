import dbClient from '../utils/db.js';
import { expect } from 'chai';
import Sinon from 'sinon';

describe('DBClient', () => {
  before(function () {
    const dbClientStub = Sinon.stub(dbClient);
  });
});

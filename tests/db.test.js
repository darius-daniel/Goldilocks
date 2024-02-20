import dbClient from '../utils/db';
import { expect } from 'chai';
import Sinon from 'sinon';

describe('DBClient', () => {
  before(function () {
    const dbClientStub = Sinon.stub(dbClient);
  });
});

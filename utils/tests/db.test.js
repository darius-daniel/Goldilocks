import dbClient from '../db';
import { expect } from 'chai';
import Sinon from 'sinon';

describe('DBClient', () => {
  before(function () {
    const dbClientStub = Sinon.stub(dbClient);
  });
});

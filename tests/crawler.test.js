import Crawler from '../crawler.js';
import { expect } from 'chai';
import Sinon from 'sinon';

describe('Crawler', () => {
  before(function () {
    const stub = Sinon.stub(Crawler);
  })

  it('create new:', function () {
    expect(new Crawler()).to.throw(Error);
  });

  it('normalizeURL', function () {
    const bot = new Crawler('www.facebook.com');

    expect(bot.normalizeURL()).to.be.a('string');
    expect(bot.normalizeURL()).to.equal('http://www.facebook.com');
  })
})
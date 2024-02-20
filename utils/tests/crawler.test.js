import Crawler from '../crawler.js';
import { expect } from 'chai';
import Sinon from 'sinon';

describe('Crawler', () => {
  before(function () {
    const crawlerStub = Sinon.stub(Crawler);
  });


  it('parseURL (absolute urls)', function () {
    const bot = new Crawler();
    const url = 'www.facebook.com';

    expect(bot.parseURL(url)).to.be.a('string');
    expect(bot.parseURL(url)).to.equal(`http://${url}/`);
  });

  it('parseURL (relative urls)', function () {
    const bot = new Crawler();
    const url = 'www.facebook.com';
    const path = '/login'

    expect(bot.parseURL(path, url)).to.be.a('string');
    expect(bot.parseURL(path, url)).to.equal(`http://${url}${path}`);
    expect(bot.parseURL(path) instanceof Error).to.be.true;
  });

  it('webCrawler', function () {
    const bot = new Crawler();
    const url = 'www.facebook.com';
    const path = '/login';

    
  })
});

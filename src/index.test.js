import axios from 'axios';
import MockAxios from 'axios-mock-adapter';
import { youtubeSearch, ROOT_URL } from './index';

describe('YoutubeSearch', () => {
  beforeEach(() => {
    const mock = new MockAxios(axios);
    mock.onGet(ROOT_URL).reply(200, {
      items: ['item1', 'item2'],
      test: 'passed',
    });
  });

  it('Returns error if required parameters are not passed in', () => youtubeSearch({
    key: 'API_KEY',
    term: 'John Cena',
    part: 'snippet',
  }).catch((error) => {
    expect(error).toEqual(new Error('Please make sure that the required fields are inserted'));
  }));

  it('Return correct data when arguments are correct', () => youtubeSearch({
    key: 'API_KEY',
    term: 'John Cena',
    part: 'snippet',
    type: 'video',
  })
    .then((data) => expect(data).toEqual(['item1', 'item2']))
    .catch((error) => expect(error).toBeNull()));
});

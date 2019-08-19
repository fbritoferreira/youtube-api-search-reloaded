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
    key: '1',
    term: 'test',
    part: '1',
  }).catch((error) => {
    expect(error).toEqual(new Error('Please make sure that the required fields are inserted'));
  }));

  it('Return correct data when arguments are correct', () => youtubeSearch({
    key: '1',
    term: 'test',
    part: '1',
    type: 'video',
  })
    .then((data) => {
      expect(data).toEqual(['item1', 'item2']);
    })
    .catch((error) => {
      expect(error).toBeNull();
    }));
});

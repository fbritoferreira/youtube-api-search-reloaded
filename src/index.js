import axios from 'axios';

export const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';

export const youtubeSearch = ({
  key,
  part,
  term,
  type,
  forContentOwner,
  forDeveloper,
  forMine,
  relatedToVideoId,
  channelId,
  channelType,
  eventType,
  location,
  maxResults,
  onBehalfOfContentOwner,
  order,
  pageToken,
  publishedAfter,
  regionCode,
  relevanceLanguage,
  safeSearch,
  topicId,
  videoCaption,
  videoCategoryId,
  videoDefinition,
  videoDimension,
  videoDuration,
  videoEmbeddable,
  videoLicense,
  videoSyndicated,
  videoType,
}) => new Promise((resolve, reject) => {
  if (!key || !term || !part || !type) {
    reject(new Error('Please make sure that the required fields are inserted'));
  }

  axios
    .get(ROOT_URL, {
      key,
      part,
      term,
      type,
      forContentOwner,
      forDeveloper,
      forMine,
      relatedToVideoId,
      channelId,
      channelType,
      eventType,
      location,
      maxResults,
      onBehalfOfContentOwner,
      order,
      pageToken,
      publishedAfter,
      regionCode,
      relevanceLanguage,
      safeSearch,
      topicId,
      videoCaption,
      videoCategoryId,
      videoDefinition,
      videoDimension,
      videoDuration,
      videoEmbeddable,
      videoLicense,
      videoSyndicated,
      videoType,
    })
    .then((response) => resolve(response.data.items))
    .catch((error) => reject(new Error(error)));
});

export default youtubeSearch;

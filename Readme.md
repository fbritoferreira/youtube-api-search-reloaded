# Youtube seach

Based on `https://www.npmjs.com/package/youtube-api-search` added all available option in the yotube api.

Avaiable parameters : `https://developers.google.com/youtube/v3/docs/search/list#parameters`


### Required arguments

There are 4 required params there are `part`, `key`, `term` and `type`.


### Example: 
```javascript
import YoutubeSearch from 'youtube-api-search-reloaded';

        
const params = {
        part,
        key,
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
        locationRadius,
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
        videoType
    };


YoutubeSearch({params}(video) => {
    handleVideos(videos);
});

```


### License
MIT

### Copyright

iTsFILIPOficial
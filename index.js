var axios = require('axios');

var ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';

module.exports = function (options, callback) {
    if (!options.key) {
        throw new Error('Youtube Search expected key, received undefined');
    }
    var params = {
        part: 'snippet',
        key: options.key,
        q: options.term,
        type: 'video',
        forContentOwner: options.forContentOwner,
        forDeveloper: options.forDeveloper,
        forMine: options.forMine,
        relatedToVideoId: options.relatedToVideoId,
        channelId: options.channelId,
        channelType: options.channelType,
        eventType: options.eventType,
        location: options.location,
        locationRadius: options.location,
        maxResults: options.maxResults,
        onBehalfOfContentOwner: options.onBehalfOfContentOwner,
        order: options.order,
        pageToken: options.pageToken,
        publishedAfter: options.publishedAfter,
        regionCode: options.regionCode,
        relevanceLanguage: options.relevanceLanguage,
        safeSearch: options.safeSearch,
        topicId: options.topicId,
        videoCaption: options.videoCaption,
        videoCategoryId: options.videoCategoryId,
        videoDefinition: options.videoDefinition,
        videoDimension: options.videoDimension,
        videoDuration: options.videoDuration,
        videoEmbeddable: options.videoEmbeddable,
        videoLicense: options.videoLicense,
        videoSyndicated: options.videoSyndicated,
        videoType: options.videoType,

    };


    axios.get(ROOT_URL, {params: params})
        .then(function (response) {
            if (callback) {
                callback(response.data.items);
            }
        })
        .catch(function (error) {
            console.error(error);
        });
};
import axios from 'axios';

const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';

export default function (options, callback) {

    if(!options.key || !options.term || !options.part || !options.type){
        throw new Error('Please make sure you that the required fields are completed');
    }

    const params = {
        part: options.part,
        key: options.key,
        q: options.term,
        type: options.type,
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

    axios.get(ROOT_URL, {params})
        .then(response => {
            callback(response.data.items);
        })
        .catch(error => {
            throw new Error(error);
        })
}
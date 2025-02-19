const SpotifyAPIMusicalParams = [
    // [ readableName, spotifyResponseName, [ optionalMinValue, optionalMaxValue, optionalTippingPoint ] ]

    // basic parameters
    [ "Duration", "duration_ms" ],                    // expressed in milliseconds
    [ "Key", "key", [ -1, 11 ] ],                     // 0=C, 1=C#/Db, 2=D, etc. — no detected key returns -1
    [ "Mode", "mode", [ 0, 1 ] ],                     // 0=minor, 1=major, no in-between
    [ "Loudness", "loudness" ],                       // in decibels; range is usually -60db to 0db, but not certain
    [ "Tempo", "tempo" ],                             // in BPM
    [ "Time Signature", "time_signature", [ 3, 7 ] ], // as an estimation of x/4 time, e.g. 3 refers to 3/4 time

    // musical parameters
    [ "Acoustic", "acousticness", [ 0, 1 ] ],
    [ "Danceable", "danceability", [ 0, 1 ] ],
    [ "Energetic", "energy", [ 0, 1 ] ],             // intensity, activity - mostly tempo and loudness
    [ "Vocal <--> Instrumental", "instrumentalness", [ 0, 1, 0.5 ] ],
    [ "Speechy", "speechiness", [ 0, 1, 0.33 ] ],  // likelihood of spoken words in track, maybe redundant
    [ "Recorded <--> Live", "liveness", [ 0, 1 ] ],
    [ "Mood", "valence", [ 0, 1 ] ],                 // 0: mostly negative (sad/angry); 1: mostly positive (cheerful/euphoric)
]


const SpotifyAPIMetadataParams = [
    ["Analysis URL", "analysis_url" ],
    ["ID", "id" ],
    ["Track URL", "track_href" ],
    ["Type", "type" ], // should always come back as "audio_features"
    ["URI", "uri" ],
]


function buildSpotifyAPIParams(SpotifyAPIMusicalParams, SpotifyAPIMetadataParams) {

    // first, map out the musical params
    const musicalParams = SpotifyAPIMusicalParams.map(param => {

        const [readableName, spotifyResponseName, range ] = param;

        const musicalParam = {
            name: readableName,
            apiName: spotifyResponseName
        };

        // if range data exists, add it
        if (range && range.length > 0) {
            musicalParam.range = range.slice(0, 2)    // first two range values are min & max
            if (range.length === 3) {
                musicalParam.tippingPoint = range[2]; // third value, if present, is the tippingPoint
            }
        }

        return musicalParam
    });

    // then, map out the metadata params
    const metadataParams = SpotifyAPIMetadataParams.map(param => {
        const [readableName, spotifyResponseName] = param;
        return { name: readableName, apiName: spotifyResponseName };
    });

    // finally, return the composite object
    return {
        musicalParams: musicalParams,
        metadataParams: metadataParams
    };
}

export const spotifyAPIParams = buildSpotifyAPIParams(SpotifyAPIMusicalParams, SpotifyAPIMetadataParams);
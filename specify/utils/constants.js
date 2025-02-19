const SpotifyAPIParamData = {
    // [ readableName, spotifyFieldName, [ optionalMinValue, optionalMaxValue, optionalTippingPoint ], leftIcon, rightIcon ]

    basicParams: [
        [ "Duration", "duration_ms", null, "HourglassEmpty", "HourglassFull" ],                    // expressed in milliseconds
        [ "Key", "key", [ -1, 11 ], "Start", "KeyboardTab" ],                     // 0=C, 1=C#/Db, 2=D, etc. — no detected key returns -1
        [ "Tempo", "tempo", null, "FastRewind", "FastForward" ],                             // in BPM
        [ "Mode", "mode", [ 0, 1 ], "KeyboardArrowDown", "KeyboardCapslock" ],                     // 0=minor, 1=major, no in-between
        [ "Time Signature", "time_signature", [ 1, 11 ], "Filter3", "Filter7" ], // as an estimation of x/4 time, e.g. 3 refers to 3/4 time
        [ "Loudness", "loudness", null, "VolumeDown", "VolumeUp" ],                       // in decibels; range is usually -60db to 0db, but not certain
    ],

    musicalParams: [
        [ "Acoustic", "acousticness", [ 0, 1 ], "Cable", "Hearing" ],
        [ "Danceable", "danceability", [ 0, 1 ], "Hotel", "SportsMartialArts" ],
        [ "Instrumental", "instrumentalness", [ 0, 1, 0.5 ], "RecordVoiceOver", "Straighten"],
        [ "Energetic", "energy", [ 0, 1 ], "Battery1Bar", "BatterySaver" ],             // intensity, activity - mostly tempo and loudness
        [ "Vocal", "speechiness", [ 0, 1, [ 0.33, 0.66 ] ], "CommentsDisabled", "Lyrics"],  // likelihood of spoken words in track, maybe redundant
        [ "Mood", "valence", [ 0, 1 ], "SentimentVeryDissatisfied", "EmojiEmotions" ],                 // 0: mostly negative (sad/angry); 1: mostly positive (cheerful/euphoric)
        [ "Live", "liveness", [ 0, 1 ], "Album", "Groups" ],
        [ "Popularity", "popularity", [ 0, 1 ], "PersonRemove", "GroupAdd" ]
    ],

    metadataParams: [
        ["Analysis URL", "analysis_url" ],
        ["ID", "id" ],
        ["Track URL", "track_href" ],
        ["Type", "type" ], // should always come back as "audio_features"
        ["URI", "uri" ],
    ],
};


function buildSpotifyAPIParams(desiredSubgroupNames) {
    // since the param subgroups have mostly the same shape,
    // we'll write a function that handles a subgroup generically!
    
    const result = {};

    desiredSubgroupNames.forEach(subgroupName => {
        if (SpotifyAPIParamData[subgroupName]) {
            result[subgroupName] = SpotifyAPIParamData[subgroupName].map(param => {
                const [ readableName, apiName, optionalRange, leftIcon, rightIcon ] = param;

                // we'll always have these values:
                const extractedElement = {
                    name: readableName,
                    apiName: apiName,
                    leftIcon: leftIcon,
                    rightIcon: rightIcon,
                };

                // but we need to check for min/max and tippingPoint:
                if (optionalRange) {
                    if (optionalRange.length === 2) {
                        extractedElement.range = optionalRange;
                    }
                    if (optionalRange.length === 3) {
                        extractedElement.range = optionalRange.slice(0, 2);
                        extractedElement.tippingPoint = optionalRange[2];
                    }
                }

                return extractedElement;
            });
        }
    });

    return result;
}

export const spotifyAPIParams = buildSpotifyAPIParams(['basicParams', 'musicalParams', 'metadataParams'])

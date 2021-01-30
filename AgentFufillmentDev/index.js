// The following imports are also available on dialogflow but not to be copied between the two.
var keyword_extractor = require("keyword-extractor");
var Sentiment = require('sentiment');
var sentiment = new Sentiment();

// The following function is for the complex Get Support intent.
function support(agent) {
    let query = agent.query;
    console.log("The user stated: " + query);
    var extraction_result = keyword_extractor.extract(query, {
        language: "english",
        remove_digits: true,
        return_changed_case: true,
        remove_duplicates: false
    });
    console.log("The keywords are: " + extraction_result);
    var analysis_result = sentiment.analyze(query);
    console.log("The sentiment of the statement was: " + JSON.stringify(analysis_result));
    // The following is replaced by agent.add instead of console.log
    console.log('Here to help!');

}


// The following is not located within the live Dialogflow Index folder.
// To run a different query update the string below.
let agent = { query: "I need help with my addiction" };
support(agent);
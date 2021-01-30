// The following imports are also available on dialogflow but not to be copied between the two.
var keyword_extractor = require("keyword-extractor");
var Sentiment = require('sentiment');
var sentiment = new Sentiment();

// The following function uses the keyword extractor package to pull out the keywords as a list from the query.
function getKeywords(query) {
    var extraction_result = keyword_extractor.extract(query, {
        language: "english",
        remove_digits: true,
        return_changed_case: true,
        remove_duplicates: false
    });
    extraction_result.length == 1 ? console.log("The keyword is: " + extraction_result) : console.log("The keywords are: " + extraction_result);
    return extraction_result;
}
// The following fuction return the Sentiment Score of the query as determined by the sentiment package.
function getSentimentScore(query) {
    var analysis_result = sentiment.analyze(query);
    console.log("The sentiment of the statement was: " + JSON.stringify(analysis_result));
    return analysis_result.score;
}

// The following function is for the complex Get Support intent.
function support(agent) {
    let query = agent.query;
    console.log("The user stated: " + query);
    let keywords = getKeywords(query);
    let sentimentScore = getSentimentScore(query);
    // The following is replaced by agent.add instead of console.log when inside of Dialogflow.
    console.log('Here to help!');

}


// The following is not located within the live Dialogflow Index folder.
// To run a different query update the string below.
let agent = { query: "I need help with my addiction" };
support(agent);
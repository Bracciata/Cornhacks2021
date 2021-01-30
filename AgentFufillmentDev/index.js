
// The following imports are also available on dialogflow but not to be copied between the two.
var keyword_extractor = require("keyword-extractor");
var Sentiment = require('sentiment');
var sentiment = new Sentiment();

// This categories variables is referneced later.
let categories = []

// The following function is for the complex Get Support intent.
class Category {
    constructor(keywords, resources, name, assistance_phrases) {
        this.keywords = keywords;
        this.resources = resources;
        this.name = name;
        this.assistance_phrases = assistance_phrases;
    }
}

function setCategories() {

    const youth = new Category();
    youth.keywords = ["teen", "teens", "minor", "adolescence", "child", "young", "youth", "puberty", "youngness", "middle school", "elementary", "high school", "teenager", "boy", "girl", "kid"];
    youth.resources = ["https://youmatter.suicidepreventionlifeline.org/", "https://www.activeminds.org/", "https://www.thetrevorproject.org/", "https://www.loveisrespect.org/"];
    youth.name = "youth";
    youth.assistance_phrases = ["I understand the struggles of being a youth may I reccomend you check out "];
    categories.push(youth);

    const disaster_survivors = new Category();
    disaster_survivors.keywords = ["disaster", "flood", "typhoon", "storm", "storm surge", "earthquake", "fire", "cyclone", "hurricane", "drought", "snow", "thunderstorm", "thunder", "lightning", "volcano", "landslide", "tsunami", "tornadoes", "avalanche", "blizzard", "meteorite", "hail", "sinkhole", "riot", "terrorist","bomb"];
    disaster_survivors.resources = ["https://www.samhsa.gov/find-help/disaster-distress-helpline", "https://www.samhsa.gov/find-help/disaster-distress-helpline", "https://www.ready.gov/coping-disaster"];
    disaster_survivors.name = "disaster survivor"
    categories.push(disaster_survivors);

    const native_americans = new Category();
    native_americans.keywords = ["native American", "tribe", "american indian", "indian", "native", "amerind", "amerindian", "injun", "indigenous", "natives", "amerindic", "cherokee", "sioux", "ute", "modoc", "sauk", "apache", "iroquois", "lakota", "navajo", "pawnee", "ho-chunk", "crow", "odawa", "arikara"];
    native_americans.resources = ["https://www.ihs.gov/suicideprevention/", "https://www.wernative.org/articles/wanting-to-end-your-life", "https://www.aspeninstitute.org/programs/center-for-native-american-youth/"];
    native_americans.name = "Native American";
    categories.push(native_americans);

    const veterans = new Category();
    veterans.keywords = ["war", "veterans", "vet", "army", "navy", "air force", "national guard", "space force", "marines", "coast guard", "casualty", "soldier", "battle", "troop", "armed forces", "world war", "military", "military personnel", "captain", "recruit", "private", "private first class", "corporal", "sergeant", "major", "lieutenant", "colonel", "general"];
    veterans.resources = ["https://www.veteranscrisisline.net/", "https://www.maketheconnection.net/family-friends"];
    veterans.name = "Veteran";
    categories.push(veterans);

    const loss_survivors = new Category();
    loss_survivors.keywords = ["parent","aunt","uncle","death", "family", "friend", "loss", "loved one", "son", "daughter", "mother", "father", "grandparents", "grandmother", "grandfather", "wife", "husband", "child", "mom", "dad"];
    loss_survivors.resources = ["http://www.personalgriefcoach.net/", "https://save.org/what-we-do/grief-support/", "https://afsp.org/ive-lost-someone", "http://www.survivorsofsuicide.com/help_heal.shtml"];
    loss_survivors.name = "Loss Survivor";
    categories.push(loss_survivors);

    const LGBTQ = new Category();
    LGBTQ.keywords = ["asexual","nonbinary","gender","lesbian", "gay", "transgender", "cisgender", "homosexual", "homophile", "queer", "intersex", "agender", "androgyny", "androsexual", "aromantic", "bi", "bigender", "bisexual", "coming out", "lbgtq", "trans", "transgender", "transitioning"];
    LGBTQ.resources = ["https://www.plannedparenthood.org/learn", "https://www.glaad.org/publications/talkingabout/terminology", "https://youmatter.suicidepreventionlifeline.org/how-to-be-an-ally/", "https://itgetsbetter.org/"];
    LGBTQ.name = "LGBTQ";
    categories.push(LGBTQ);

    const attempted_survivors = new Category();
    attempted_survivors.keywords = ["suicide", "previously done", "attempted", "survived", "past",];
    attempted_survivors.resources = ["https://lifelineforattemptsurvivors.org/", "https://store.samhsa.gov/product/A-Journey-Toward-Health-and-Hope-Your-Handbook-for-Recovery-After-a-Suicide-Attempt/SMA15-4419", "https://suicidology.org/"];
    attempted_survivors.name = "Attempt Survivor"
    categories.push(attempted_survivors);

    const disabled_individuals = new Category();
    disabled_individuals.keywords = ["disability","abled","disabilities", "disable", "injured", "impairment", "impaired", "disease", "disorder", "incapable", "special needs", "illness", "condition", "dysfunction", "attention deficit hyperactivity disorder", "adhd", "mobility disabled", "heart", "lung", "respiratory", "mental illness", "depression", "diabetes", "stroke", "cancer"];
    disabled_individuals.resources = ["http://liveon.net/", "https://www.usa.gov/disability-financial-support", "https://www.aapd.com/"];
    disabled_individuals.name = "disabled";
    categories.push(disabled_individuals);

    const ptsd = new Category();
    ptsd.keywords = ["flash back","trauma", "traumatic", "stress", "battle fatigue", "shell-shock", "railway spines", "disorder"];
    ptsd.resources = ["https://www.ptsd.va.gov/index.asp", "https://adaa.org/understanding-anxiety/posttraumatic-stress-disorder-ptsd/resources"];
    ptsd.name = "PTSD";
    categories.push(ptsd);

    const addiction = new Category();
    addiction.keywords = ["addicted", "addiction", "drugs", "smoke", "drink", "alcohol", "weed", "stimulants", "depressants", "cocaine", "heroin", "opiums", "painkillers", "cigarette", "beer", "medications", "overdose", "marijuana", "lsd", "crach"];
    addiction.resources = ["https://www.samhsa.gov/find-help/national-helpline", "https://www.helpguide.org/home-pages/addictions.htm"];
    addiction.name = "Addiction";
    categories.push(addiction);

    const homeless_individuals = new Category();
    homeless_individuals.keywords = ["homeless", "foodless", "refugee", "displaced", "vagrant", "bankrupt", "beg", "poor", "poverty", "unemployed", "streets"];
    homeless_individuals.resources = ["https://www.211.org/", "http://nationalhomeless.org/references/need-help/", "https://www.feedingamerica.org/find-your-local-foodbank"];
    homeless_individuals.name = "Homeless";
    categories.push(homeless_individuals);

    console.log(categories);
}


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

function generateResponse(keywords) {
    // The following builds a randomly selected list of responses with resources based on what the user is experiencing in life.
    let suffering_from = [];
    let response_statemets = [];
    let response_resources = [];
    for (var word of keywords) {
        for (var category of categories) {
            for (var categoryWord of category.keywords) {
                if (!suffering_from.includes(category.name)) {
                    if (word.toLowerCase() == categoryWord || categoryWord.includes(word.toLowerCase())) {
                        suffering_from.add(category.name);
                        response_statemets.add(category.assistance_phrases[Math.floor(Math.random() * category.assistance_phrases.length)]);
                        response_resources.add(category.resources[Math.floor(Math.random() * category.resources.length)]);
                    }
                }
            }
        }
    }
    console.log("The user is suffering from: " + suffering_from);
}

// The following function is for the complex Get Support intent.
function support(agent) {
    let query = agent.query;
    console.log("The user stated: " + query);
    let keywords = getKeywords(query);
    let sentiment_score = getSentimentScore(query);
    let response = generateResponse(keywords);
    // The following is replaced by agent.add instead of console.log when inside of Dialogflow.

    console.log(response);

}
setCategories();


// The following is not located within the live Dialogflow Index folder.
// To run a different query update the string below.
let agent = { query: "I need help with my addiction" };
support(agent);
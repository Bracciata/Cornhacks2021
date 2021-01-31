
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
    youth.assistance_phrases = ["I understand the struggles of being a youth may I recommend you check out these helpful responses: RESOURCE . ", "I am aware you are going through a tough time at this age, have you tried looking at RESOURCE . ", "Growing up can be very rough. Just remember to there are always resources to help like RESOURCE . "];
    categories.push(youth);

    const disaster_survivors = new Category();
    disaster_survivors.keywords = ["disaster", "flood", "typhoon", "storm", "storm surge", "earthquake", "fire", "cyclone", "hurricane", "drought", "snow", "thunderstorm", "thunder", "lightning", "volcano", "landslide", "tsunami", "tornadoes", "avalanche", "blizzard", "meteorite", "hail", "sinkhole", "riot", "terrorist","bomb"];
    disaster_survivors.resources = ["https://www.samhsa.gov/find-help/disaster-distress-helpline", "https://www.samhsa.gov/find-help/disaster-distress-helpline", "https://www.ready.gov/coping-disaster"];
    disaster_survivors.name = "disaster survivor"
    disaster_survivors.assistance_phrases = ["You are not alone. We are greatful that you have survived through your hardship. To help you move forward, please consider RESOURCE . ", "I know things look bleak right now, but theres are going to get better. This too shall pass. To help, consider RESOURCE . ", "I understand that you're upset. That's a normal and natural reaction to this situation. I believe that you can get through this. To help, consider RESOURCE . "];
    categories.push(disaster_survivors);

    const native_americans = new Category();
    native_americans.keywords = ["native American", "tribe", "american indian", "indian", "native", "amerind", "amerindian", "injun", "indigenous", "natives", "amerindic", "cherokee", "sioux", "ute", "modoc", "sauk", "apache", "iroquois", "lakota", "navajo", "pawnee", "ho-chunk", "crow", "odawa", "arikara"];
    native_americans.resources = ["https://www.ihs.gov/suicideprevention/", "https://www.wernative.org/articles/wanting-to-end-your-life", "https://www.aspeninstitute.org/programs/center-for-native-american-youth/"];
    native_americans.name = "Native American";
    native_americans.assistance_phrases = ["Times like these could be rough. However, I believe you can get through this. Try using RESOURCE . ", "I know this must be a hard time for you, and I know that you are hurting. Let me lend you a helping hand with RESOURCE . ", "I understand that you are upset, and I know that you could move forward. Remember to take small steps and consider RESOURCE . "];
    categories.push(native_americans);

    const veterans = new Category();
    veterans.keywords = ["war", "veterans", "vet", "army", "navy", "air force", "national guard", "space force", "marines", "coast guard", "casualty", "soldier", "battle", "troop", "armed forces", "world war", "military", "military personnel", "captain", "recruit", "private", "private first class", "corporal", "sergeant", "major", "lieutenant", "colonel", "general"];
    veterans.resources = ["https://www.veteranscrisisline.net/", "https://www.maketheconnection.net/family-friends"];
    veterans.assistance_phrases = ["Thank you for your services, I understand that you are facing a difficult time. However, remember there is always a brighter future. To help you find your path, try looking at RESOURCE . ", "Thank you for your courage, dedication, and for keeping us safe. Your time out of the arms forces can be tough. However, I believe that you could progress with the help of RESOURCE . ", "I understand that times like these can be very difficult, but I believe in you. To cope, try taking a look at RESOURCE . "]; 
    veterans.name = "Veteran";
    categories.push(veterans);

    const loss_survivors = new Category();
    loss_survivors.keywords = ["parent","aunt","uncle","death", "family", "friend", "loss", "loved one", "son", "daughter", "mother", "father", "grandparents", "grandmother", "grandfather", "wife", "husband", "child", "mom", "dad"];
    loss_survivors.resources = ["http://www.personalgriefcoach.net/", "https://save.org/what-we-do/grief-support/", "https://afsp.org/ive-lost-someone", "http://www.survivorsofsuicide.com/help_heal.shtml"];
    loss_survivors.name = "Loss Survivor";
    loss_survivors.assistance_phrases = ["I am sorry for your loss, times like these could be hard. Understand that there are always resources to help. Consider RESOURCE . ", "We all need help at times like this, I am here for you. When you are ready to move forward, take small sets at a time and remember that you will see a brighter day. To help, consider RESOURCE . ", "Resources like RESOURCE can definitely help. I understand that you are having a hard time, but I believe you can get through it."];
    categories.push(loss_survivors);

    const LGBTQ = new Category();
    LGBTQ.keywords = ["asexual","nonbinary","gender","lesbian", "gay", "transgender", "cisgender", "homosexual", "homophile", "queer", "intersex", "agender", "androgyny", "androsexual", "aromantic", "bi", "bigender", "bisexual", "coming out", "lbgtq", "trans", "transgender", "transitioning"];
    LGBTQ.resources = ["https://www.plannedparenthood.org/learn", "https://www.glaad.org/publications/talkingabout/terminology", "https://youmatter.suicidepreventionlifeline.org/how-to-be-an-ally/", "https://itgetsbetter.org/"];
    LGBTQ.name = "LGBTQ";
    LGBTQ.assistance_phrases = ["Times like these could be diffuclt, just know that I support you. It's always small steps at a time from here. You can learn more at RESOURCE . ", "Know that times like these could be very hard, but there is always a brighter day. Know that there are resources like RESOURCE . ", "I support you. Know that there are resources like RESOURCE . "];
    categories.push(LGBTQ);

    const attempted_survivors = new Category();
    attempted_survivors.keywords = ["suicide", "previously done", "attempted", "survived", "past",];
    attempted_survivors.resources = ["https://lifelineforattemptsurvivors.org/", "https://store.samhsa.gov/product/A-Journey-Toward-Health-and-Hope-Your-Handbook-for-Recovery-After-a-Suicide-Attempt/SMA15-4419", "https://suicidology.org/"];
    attempted_survivors.name = "Attempt Survivor"
    attempted_survivors.assistance_phrases = ["I’m sorry you’ve been feeling so awful. I’m so glad you’re still here. When you have the chance, consider looking at RESOURCE . ", "There are always people there for you. Remember that you can always talk to me if you need to. For more help, look at RESOURCE . ", "I understand that times can be rough, however remember that you can always find happiness. Consider RESOURCE . " ];
    categories.push(attempted_survivors);

    const disabled_individuals = new Category();
    disabled_individuals.keywords = ["disability","abled","disabilities", "disable", "injured", "impairment", "impaired", "disease", "disorder", "incapable", "special needs", "illness", "condition", "dysfunction", "attention deficit hyperactivity disorder", "adhd", "mobility disabled", "heart", "lung", "respiratory", "mental illness", "depression", "diabetes", "stroke", "cancer"];
    disabled_individuals.resources = ["http://liveon.net/", "https://www.usa.gov/disability-financial-support", "https://www.aapd.com/"];
    disabled_individuals.name = "disabled";
    disabled_individuals.assistance_phrases = ["Thanks for sharing that with me. It could be very diffcult at times like these. Know that there are resources like RESOURCE . ", "It's not always easy, but know that there are resources out there to help. When you are ready, look at RESOURCE . ", "This can definitely be a hard time. Resources like RESOURCE can be helpful."];
    categories.push(disabled_individuals);

    const ptsd = new Category();
    ptsd.keywords = ["flash back","trauma", "traumatic", "stress", "battle fatigue", "shell-shock", "railway spines", "disorder"];
    ptsd.resources = ["https://www.ptsd.va.gov/index.asp", "https://adaa.org/understanding-anxiety/posttraumatic-stress-disorder-ptsd/resources"];
    ptsd.name = "PTSD";
    ptsd.assistance_phrases = ["Times like these are hard. I recommend looking at RESOURCE . ", "These are definitely difficult times. Remember that you can always look at RESOURCE . ", "Times like these, are hard consider these RESOURCE . "];
    categories.push(ptsd);

    const addiction = new Category();
    addiction.keywords = ["addicted", "addiction", "drugs", "smoke", "drink", "alcohol", "weed", "stimulants", "depressants", "cocaine", "heroin", "opiums", "painkillers", "cigarette", "beer", "medications", "overdose", "marijuana", "lsd", "crach"];
    addiction.resources = ["https://www.samhsa.gov/find-help/national-helpline", "https://www.helpguide.org/home-pages/addictions.htm"];
    addiction.name = "Addiction";
    addiction.assistance_phrases = ["I understand that the first steps may be difficult. Resources like RESOURCE are very helpful.", "Thank you for taking the first step of pursuing a healthier future. Consider RESOURCE . ", "It may be hard to overcome this problem, but you can do it. Resources like RESOURCE can be very helpful."];
    categories.push(addiction);

    const homeless_individuals = new Category();
    homeless_individuals.keywords = ["homeless","homelessness", "foodless", "refugee", "displaced", "vagrant", "bankrupt", "beg", "poor", "poverty", "unemployed", "streets"];
    homeless_individuals.resources = ["https://www.211.org/", "http://nationalhomeless.org/references/need-help/", "https://www.feedingamerica.org/find-your-local-foodbank"];
    homeless_individuals.name = "Homeless";
    homeless_individuals.assistance_phrases = ["Times like these are hard for many financially. I recommend looking at RESOURCE . ", "I respect your courage to continue fighting I believe RESOURCE may be able to help you.", "You are not alone in financial struggles try looking to RESOURCE . "];
    categories.push(homeless_individuals);

    const bullied = new Category();
    bullied.keywords = ["bully", "oppressor", "rascal", "annoyer", "annoying", "rude", "tough", "tease", "harass", "terrorize", "threaten", "torment", "torture", "fought", "fight", "intimidate", "persecute"];
    bullied.resources = ["https://www.stopbullying.gov/resources/get-help-now", "https://www.psychologytoday.com/us/basics/bullying", "https://www.psychologytoday.com/us/blog/rethinking-your-teenager/202004/new-approach-stop-bullying", "https://kidshealth.org/en/teens/bullies.html"];
    bullied.name = "Bullied";
    bullied.assistance_phrases = ["Bullying should not be tolerated in any environment. If you feel like you are being bullied remember that you have resources like RESOURCE . ", "Stop immediately and look at RESOURCE . These should help provide the next steps moving forward. You should not have to deal with this by yourself. ", "Bullying is unwanted, aggressive behavior that involves a real or perceived power imbalance. You do not have to deal with this bully. I recommend using RESOURCE to learn how to deal with it. "];
    categories.push(bullied);

    const elderly = new Category();
    elderly.keywords = ["old", "age", "elderly", "elder"," senior", "senior citizen", "ancient", "oldster", "patriarch", "oldest"];
    elderly.resources = ["http://www.ncmha.org/resources/", "https://eldercare.acl.gov/Public/Resources/Topic/Behavioral_Health.aspx", "https://www.ncoa.org/center-for-healthy-aging/behavioral-health/"];
    elderly.name = "Elderly";
    elderly.assistance_phrases = ["Growing up is never easy, but know that resources like RESOURCE can help. ", "As life goes know, remember that there is always help. I recommend looking at RESOURCE . ", "I understand that life can be hard, but remember the happy things. Remember that here is always a brighter day. Please look at RESOURCE for more helpful tips!"];
    categories.push(elderly);

    return categories;
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

function generatePhrase(keyword, categories) {
    let group = ''
    let statement = ''
    let resource = ''
    for (var category of categories) {
        for (var categoryWord of category.keywords) {
            if (keyword.toLowerCase() == categoryWord || categoryWord.includes(keyword.toLowerCase())|| keyword.includes(categoryWord.toLowerCase())) {
                group = category.name;
                statement = category.assistance_phrases[Math.floor(Math.random() * category.assistance_phrases.length)];
                resource = category.resources[Math.floor(Math.random() * category.resources.length)];
                return [group, statement, resource]
            }
        }
    }
    return []
}
function generateResponse(keywords) {
    // The following code determines what the user is suffering from based on their querys keywords and the grabs a respective resource and statement to be used when building the response.
    let suffering_from = [];
    let response_statemets = [];
    let response_resources = [];
    let categories = setCategories();
    for (var word of keywords) {
        let single_phase = generatePhrase(word, categories);
        if (single_phase != []){
            if (!suffering_from.includes(single_phase[0]) && single_phase[0]){
                suffering_from.push(single_phase[0]);
                response_statemets.push(single_phase[1]);
                response_resources.push(single_phase[2]);
            }
        }
    }
    let response = "";
    for (var i = 0; i < suffering_from.length; i++) {
        phrase = response_statemets[i].replace("RESOURCE", response_resources[i]);;
        if(i>0 && phrase.charAt(0)!="I"){
            phrase = phrase.charAt(0).toLowerCase() + phrase.slice(1);
        }
        response += phrase;
        if (i + 1 < suffering_from.length){
            response += " In addition, ";
        } 
    }
    return response;
    // Build the response based on what they are suffering from and randomly selected associated responses and resources.
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


// The following is not located within the live Dialogflow Index folder.
// To run a different query update the string below.
let agent = { query: "I need help with age" };
support(agent);
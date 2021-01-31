# Teddy

The problem we identified for our project was the high number of suicides in the U.S. In 2019 alone 47,511 people died of suicide, which is 14.5 deaths per 100,000 population. Suicide was also ranked the 10th cause of death in 2019. To mitigate this problem, we decided we wanted to create an application that would intervene in times of crisis. We decided to name this application Teddy. Teddy is a crisis intervention AI intended to step in during emergency situations. Our goal is that Teddy is able to intervene, assist, and provide comfort during user’s times of need.

Teddy works by utilizing a Dialogflow chat agent. This allows Teddy to get the information needed to be able to quickly and accurately direct users to potential resources to assist them. The information Teddy extracts is both sentiments and keywords to correctly identify what resources are the best fit for the user. After identification, Teddy redirects users to the correct resource successfully providing users with positive reinforcement and necessary feedback immediately

## Development

To test the offline version of the agent's fufillment run `node .` inside of AgentFufillmentDev.

## Technologies and Tools Used:

- [Dialogflow](https://cloud.google.com/dialogflow) for the Chat Agent
- [React](https://reactjs.org/) website with [Bootstrap](https://react-bootstrap.github.io/)
- [NPM Keyword Extractor](https://www.npmjs.com/package/keyword-extractor)
- [NPM Sentiment](https://www.npmjs.com/package/sentiment)
- [Flaticon](https://www.flaticon.com/free-icon/teddy-bear_771988?term=teddy%20bear&page=3&position=79&page=3&position=79&related_id=771988&origin=search)

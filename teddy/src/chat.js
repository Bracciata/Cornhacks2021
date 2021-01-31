import { Form, Button } from 'react-bootstrap';

function Chat(messages, sendMessageFunction){

console.log(messages);
let messageList = []
for( var message of messages.Messages){
    if(message[0]==1){
        messageList.push(<p class="from-them">{message[1]}</p>);
    }else{
        messageList.push(<p class="from-me">{message[1]}</p>);

    }
    }
return(<div class="chat">
{messageList}

</div>);
}
export default Chat;
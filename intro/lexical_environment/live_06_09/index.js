/* eslint-disable */
/*

// global
{
  'environmentRecord': {
    'message': 'Test',
    'weight': 55,
    'createMessenger': func,
    .....
  },
  'outherLexicalEnv': null,
}

// 'createMessanger': {
  'environmentRecord': {
    'message': 'Just learn it',
    'sender': 'Gromcode',
    'senDmessage': func,
  },
    'outherLexicalEnv': global,
    
// run : {
  'environmentRecord': {
  },
    'outherLexicalEnv': createMessanger,
}
*/

const message = 'Test';
const weight = 55;

for (let i = 0; i < 5; i += 1) {
  console.log(i);
}

if (true) {
  const currentDay = 'Monday';
  console.log(message);
}

console.log(currentDay);

function run() {
  console.log('RUN');
}

function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';

  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setSender(newSender) {
    sender = newSender;
  }

  function setMessage(text) {
    message = text;
  }

  return {
    sendMessage,
    setMessage,
    setSender,
  };
}

const messanger = createMessenger();
messanger.sendMessage('TestName');
run();

const messanger1 = createMessenger();
messanger1.setSender('Nova poshta');
messanger1.sendMessage('Andrey');

const messanger2 = createMessenger();
messanger2.setSender('Rozetca');
messanger2.sendMessage('Denis');
messanger2.sendMessage('Yevgen');

import { TextField, Button, Box, Avatar, Text, Link } from '@shopify/polaris'
import { SendMajor } from '@shopify/polaris-icons'
import { useState, useCallback } from 'react'

const Chatbot = () => {
  const [textFieldValue, setTextFieldValue] = useState('');
  const [isDisabled, setDisabled] = useState(false);
  const [messages, setMessages] = useState([])
  function createId() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < 6) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}
  const handleTextFieldChange = useCallback(
    (value) => {
      setTextFieldValue(value) 
    },
    [],
  )
  const handleClearButtonClick = useCallback(() => setTextFieldValue(''), []);
  const getQuestion = () => {
    console.log("textField", textFieldValue)
    const id = createId();
    messages.push({id, by: 'user', value: textFieldValue});
    setTextFieldValue("");
    setDisabled(true);
    (async function () {
      try {
      const response = await fetch("http://127.0.0.1:5000/ask", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
         body: JSON.stringify({question: textFieldValue})
      });
      const res = await response.json();
      console.log(res);
      setDisabled(false);
      const chatId = createId();
      messages.push({id: chatId, by: 'ShopiChat', value: res.answer});
    } catch (error) {
      const errorId = createId();
      messages.push({id: errorId, by: 'ShopiChat', value: "something went wrong. Try again."});
      console.log(error)
    }
    } )()
  }
  return (
    <Box as='div'  minWidth='20rem' style={{backgroundColor: 'white', padding:'8'}}>
      <div style={{padding: '10px', backgroundColor: '#FBFBFB'}}>
        <Text as='h4' alignment='center' variant='bodyLg'>ShopiChat</Text>
      </div>
      <Box as='div' paddingBlockStart='4' paddingBlockEnd='4' style={{maxHeight: '400px', minHeight: '400px', display: 'flex', flexDirection: 'column', overflow: 'auto'}}>
        {messages.map((msg) => (
          <div id={msg.id} style={{
            textAlign: `${msg.by === 'ShopiChat' ? 'left' : 'right'}`,
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: '#FBFBFB',
            padding: '1rem 0',
            height: '100%'
          }}>
            {msg.by === 'ShopiChat' ?
              <div style={{
                display: 'flex',
                gap: '1rem',
                padding: '1rem',
                borderRadius: '4px',
              }}>
                <div style={{height: '60px'}}>
                <Avatar source='https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg' />
                </div>
                <p style={{
                  backgroundColor: '#87E2AC',
                  flexGrow: '1',
                  width: '100%',
                  borderRadius: '4px',
                  padding: '5px',
                  maxWidth: '280px',
                  height: 'fit-content'
                }}>
                  {msg.value}
                </p>
              </div>
              :
              <div style={{
                display: 'flex',
                gap: '1rem',
                padding: '1rem',
                marginLeft: 'auto',
              }}>
                <p style={{
                  backgroundColor: '#FFFFFF',
                  flexGrow: '1',
                  width: '100%',
                  borderRadius: '4px',
                  textAlign: 'left',
                  padding: '3px',
                  maxWidth: '200px',
                }}>
                  {msg.value}
                </p>
                <div style={{height: '60px'}}>
                  <Avatar size='small' initials='XA' />
                </div>
              </div>
            }
          </div>
        ))}
      </Box>
      <div style={{padding: '12px'}}>
        <TextField
          value={textFieldValue}
          onChange={handleTextFieldChange}
          placeholder='Ask a question...'
          autoComplete='off'
          clearButton
          onClearButtonClick={handleClearButtonClick}
          connectedRight={<Button color='success' icon={SendMajor} onClick={getQuestion} disabled={isDisabled}></Button>}
        />
        <div style={{padding: '4px', paddingTop: '7px', minWidth: '290px'}}>
          <Text>Learn more about <Link>ShopiChat</Link></Text>
        </div>
      </div>
    </Box>
  )
}

export default Chatbot

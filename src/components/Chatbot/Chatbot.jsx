import { TextField, Button, Box, Avatar } from '@shopify/polaris'
import { SendMajor } from '@shopify/polaris-icons'
import { useState, useCallback } from 'react'

const Chatbot = () => {
  const [textFieldValue, setTextFieldValue] = useState('')
  const [messages, setMessages] = useState([
    {
      id: '1',
      by: 'user',
      value: 'Hello there!',
    },
    {
      id: '2',
      by: 'Chat Bot',
      value: 'Hello there!',
    },
    {
      id: '3',
      by: 'user',
      value: 'Hello there!',
    },
    {
      id: '4',
      by: 'Chat Bot',
      value: 'Hello there!',
    },
  ])

  const handleTextFieldChange = useCallback(
    (value) => setTextFieldValue(value),
    [],
  )

  return (
    <Box as='div' padding='4' minWidth='20rem'>
      <Box as='div' overflowY='auto' paddingBlockStart='4' paddingBlockEnd='4'>
        {messages.map((msg) => (
          <div id={msg.id} style={{
            textAlign: `${msg.by === 'Chat Bot' ? 'left' : 'right'}`,
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            borderRadius: '8px',
            padding: '1rem 0'
          }}>
            {msg.by === 'Chat Bot' ?
              <div style={{
                display: 'flex',
                gap: '1rem',
                padding: '1rem',
              }}>
                <Avatar source='https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg' />
                <p style={{
                  backgroundColor: '#87E2AC',
                  flexGrow: '1',
                  width: '100%'
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
                  backgroundColor: '#E1ECFD',
                  flexGrow: '1',
                  width: '100%'
                }}>
                  {msg.value}
                </p>
                <Avatar customer={true} />
              </div>
            }
          </div>
        ))}
      </Box>
      <div>
        <TextField
          value={textFieldValue}
          onChange={handleTextFieldChange}
          placeholder='Ask a question...'
          autoComplete='off'
          connectedRight={<Button color='success' icon={SendMajor}></Button>}
        />
      </div>


    </Box>
  )
}

export default Chatbot

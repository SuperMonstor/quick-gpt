import openai from './chatgpt'

async function query (prompt: string, chatId: string, model: string)  {
  const res = await openai.chat.completions.create({
    
  })
}
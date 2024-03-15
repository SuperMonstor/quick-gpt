import openai from "./chatgpt"

async function query(prompt: string, chatId: string, model: string) {
	const res = await openai.chat.completions.create({
		model: model,
		messages: [
			{
				role: "user",
				content: prompt,
			},
		],
		temperature: 0.9,
		max_tokens: 1000,
		top_p: 1,
		frequency_penalty: 0,
		presence_penalty: 0,
	}).then(res => res.choices[0].message).catch(
    (err) => `ChatGPT was unable to find an answer for that! (Error: ${ err.message})`
  )
  return res
}

export default query
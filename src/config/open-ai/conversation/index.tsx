const { Configuration, OpenAiApi } = require('openai');
const configuration = new Configuration({apiKey : "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"})
const openai = new OpenAiApi(configuration)

export async function sendMsgToOpenAi(message : any){
        const res = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: message,
                temperature:0.7,
                max_tokens:256,
                top_p:1,
                frequency_penalty:0,
                presense_penalty:0
            })
            return res.data.choices[0].text;
}
        

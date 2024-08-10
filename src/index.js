require('dotenv').config();
const {Client, IntentsBitField} = require('discord.js');
const eventHandler = require('./handlers/eventHandler');
const mysql = require('mysql');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});



/**(async () => {
    try{
        const db = await mysql.createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        });
        console.log("connected to database");
        eventHandler(client);
        client.login(process.env.TOKEN);
    }catch(error) {
        console.log(`Error connecting to database: ${error}`);
    }
})();**/

eventHandler(client);
client.login(process.env.TOKEN);

(async () => {
    const OpenAI = (await import('openai')).default;
  
    const openai = new OpenAI();
  
    async function main() {
      const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "You are a helpful assistant." }],
        model: "gpt-4o-mini",
      });
  
      console.log(completion.choices[0]);
    }
  
    //main();
})();
require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');

const commands = [
    {
        name: 'hey',
        description: 'Replies with hey!',
    },
    /**{
        name: 'borrow',
        description: 'one user borrowing from another',
        options: [
            {
                name: 'user',
                description: 'person borrowing from',
                type: ApplicationCommandOptionType.User,
                required: true
            },
            {
                name: 'amount',
                description: 'amount of card borrowed',
                type: ApplicationCommandOptionType.Integer,
                required: true
            },
            {
                name: 'card',
                description:  'name of card borrowed',
                type: ApplicationCommandOptionType.String,
                required: true
            }
        ]
    },
    {
        name: 'loan',
        description: 'one user loaning to another',
        options: [
            {
                name: 'user',
                description: 'person loaning to',
                type: ApplicationCommandOptionType.User,
                required: true
            },
            {
                name: 'amount',
                description: 'amount of card loaned',
                type: ApplicationCommandOptionType.Integer,
                required: true
            },
            {
                name: 'card',
                description:  'name of card loaned',
                type: ApplicationCommandOptionType.String,
                required: true
            }
        ]
    },
    {
        name: 'return',
        description: 'one user returning items to another',
        options: [
            {
                name: 'user',
                description: 'person loaning to',
                type: ApplicationCommandOptionType.User,
                required: true
            },
            {
                name: 'amount',
                description: 'amount of card loaned',
                type: ApplicationCommandOptionType.Integer,
                required: true
            },
            {
                name: 'card',
                description:  'name of card loaned',
                type: ApplicationCommandOptionType.String,
                required: true
            }
        ]
    },
    {
        name: 'recieve',
        description: 'one user recieving items back from reanother',
        options: [
            {
                name: 'user',
                description: 'person loaning to',
                type: ApplicationCommandOptionType.User,
                required: true
            },
            {
                name: 'amount',
                description: 'amount of card loaned',
                type: ApplicationCommandOptionType.Integer,
                required: true
            },
            {
                name: 'card',
                description:  'name of card loaned',
                type: ApplicationCommandOptionType.String,
                required: true
            }
        ]
    },**/
];

const rest = new REST({version: '10'}).setToken(process.env.TOKEN);

(async () => {
    try{
        console.log('Registering slash commands...');
        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            {body: commands}
        )
        console.log('Slash commands registered');
    }catch (error){
        console.log('An error occured: $')
    }
})();
const {
    ApplicationCommandOptionType,
    PermissionFlagsBits,
  } = require('discord.js');

module.exports = {
    name: 'recieve',
    description: 'one user recieving items back from reanother',
    options: [
        {
            name: 'user',
            description: 'person recieving from',
            type: ApplicationCommandOptionType.User,
            required: true
        },
        {
            name: 'amount',
            description: 'amount of card recieved',
            type: ApplicationCommandOptionType.Integer,
            required: true
        },
        {
            name: 'card',
            description:  'name of card recieved',
            type: ApplicationCommandOptionType.String,
            required: true
        }
    ],
    callback: (client, interaction) => {
        let username = interaction.options.get('user').user.globalName;
        let num = interaction.options.get('amount').value;
        let card = interaction.options.get('card').value;
        interaction.reply(interaction.user.globalName + ' recieved ' + num + ' ' + card + ' back from ' + username);
    },
};
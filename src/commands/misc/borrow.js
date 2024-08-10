const {
    ApplicationCommandOptionType,
    PermissionFlagsBits,
  } = require('discord.js');

const pool = require('../../models/database');

module.exports = {
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
    ],
    callback: (client, interaction) => {
        let username = interaction.options.get('user').user.globalName;
        let num = interaction.options.get('amount').value;
        let card = interaction.options.get('card').value;
        let borrower_id = interaction.user.id;
        let lender_id = interaction.options.get('user').user.id;
        const query = `
            INSERT INTO loans (amount, borrower_id, loaner_id, card_name)
            VALUES (?, ?, ?, ?)
        `;
        pool.query(query, [num, borrower_id, lender_id, card], (err, results) => {
            if (err) {
                console.error('Error inserting into loans table:', err);
                interaction.reply('There was an error processing your request.');
                return;
            }

            console.log('Loan record inserted:', results.insertId);
            interaction.reply(`${interaction.user.globalName} is borrowing ${num} ${card} from ${username}`);
        });
        //interaction.reply(interaction.user.globalName + ' is borrowing ' + num + ' ' + card + ' from ' + username);
    },
};
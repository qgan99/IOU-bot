const {devs, testServer} = require('../../../config.json');
const getLocalCommands = require('../../utils/getLocalCommands');


module.exports = async (client, interaction) => {
    if (!interaction.isChatInputCommand()) return;

    const localCommands = getLocalCommands();

    try {
        const commandObject = localCommands.find(
            (cmd) => cmd.name === interaction.commandName
        );

        if (!commandObject) return; //check if the command even exists
        //if command is dev only, check if person running command is a dev
        if (commandObject.devOnly) {
            if (!devs.includes(interaction.member.id)){
                interaction.reply({
                    content: 'Not available to you',
                    ephemeral : true,
                })
                return;
            }
        }
        //if command is testonly, check if is on the testserver before running
        if (commandObject.testOnly) {
            if (!(interaction.guild.id === testServer)){
                interaction.reply({
                    content: 'This command cannot be run here',
                    ephemeral : true,
                })
                return;
            }
        }
        //check if the user has the required permissiosn to run the command
        if (commandObject.permissionsRequired?.length){
            for (const permission of commandObject.permissionsRequired){
                if (!interaction.member.permissions.has(permission)){
                    interaction.reply({
                        content: 'Not enough permissions to run this.',
                        ephemeral: true,
                    });
                    return;
                }
            }
        }
        //check if the bot has enough permissions
        if (commandObject.botPermissions?.length) {
            for (const permission of commandObject.botPermissions) {
                const bot = interaction.guild.member.me;

                if (!bot.permissions.has(permission)){
                    interaction.reply({
                        content: "I don't have enough permissions.",
                        ephemeral: true,
                    });
                    return;
                }
            }
        }
        
        await commandObject.callback(client, interaction);
    } catch (error) {
        console.log(`There was an error running this command: ${error}`);
    }
};
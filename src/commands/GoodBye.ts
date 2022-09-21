import { CommandInteraction, Client } from "discord.js";
import { Command } from "src/Command";

export const GoodBye: Command = {
    name: "goodbye",
    description: "Says goodbye",
    type: 1,
    run:async (client: Client, interaction: CommandInteraction) => {
        const content = "Goodbye!";

        await interaction.followUp({
            ephemeral:true,
            content
        });
    }
};
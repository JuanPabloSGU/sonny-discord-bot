import { CommandInteraction, Client } from "discord.js";
import { Command } from "src/Command";

export const Hello: Command = {
    name: "hello",
    description: "Returns a greeting",
    type: 1,
    run:async (client: Client, interaction: CommandInteraction) => {
        const content = "hello doo doo fart!";

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
};
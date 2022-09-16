import { Client } from "discord.js";
import interactionCreate from "./listeners/interactionCreate";
import ready from "./listeners/ready";

const token = "MTAwNjAzODg4OTE3OTM5MDA3Mg.GSAhfE.DMAafSCwval5Bh5aS28fnKf469yVq-WFDdoLMY";

console.log("Bot is starting...");

const client = new Client({
    intents: []
});

ready(client);
interactionCreate(client);
client.login(token);
const util = require('../util');

const runCommand = async (client, message) => {
  if (!util.isCommand(message)) return;

  const args = message.content
    .slice(process.env.COMMAND_PREFIX.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  const cmd = client.commands.get(command);

  if (!cmd) return;

  message.delete().catch(() => {});

  console.log(
    '[#LOG]',
    `${message.author.username} (${message.author.id}) executou o comando: ${cmd.command.name}`,
  );

  try {
    if (cmd.validate) {
      await cmd.validate(client, message, args);
    }
    await cmd.run(client, message, args);
    if (cmd.success) {
      await cmd.success(client, message, args);
    }
  } catch (err) {
    console.error(err);
    if (cmd.fail) {
      await cmd.fail(err, client, message, args);
      return;
    }
    return;
  } finally {
    if (cmd.after) {
      await cmd.after(client, message, args);
    }
  }
};

module.exports = async (client, message) => {
  await Promise.all([runCommand(client, message)]);
};

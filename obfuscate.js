export default function handler(req, res) {
  const code = req.body?.code || '';
  const obfuscated = `([[This file was protected with Obfuscator Bot,
https://discord.gg/VwTM63a38Y]]):gsub('.+', function(a) __ObfVar=a end)`;

  res.status(200).send({ obfuscated });
}
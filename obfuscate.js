export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

  const { code } = req.body;

  if (!code || typeof code !== 'string') {
    return res.status(400).json({ error: 'Invalid Lua code' });
  }

  const header = "([[This file was protected with Obfuscator Bot,\\nhttps://discord.gg/VwTM63a38Y]]):gsub('.+', (function(a) __Obfuscated = a; end)); ";
  const encoded = Buffer.from(code).toString('base64').replace(/=/g, '');
  const payload = `__payload='${encoded}'`;

  const final = `${header}${payload}`;
  res.status(200).json({ obfuscated: final });
}
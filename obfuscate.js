export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { code } = req.body;

  if (!code || typeof code !== 'string') {
    return res.status(400).json({ error: 'Invalid code input' });
  }

  // Basic obfuscation logic (does not use loadstring)
  const obfuscated = code
    .replace(/([a-zA-Z_][a-zA-Z0-9_]*)/g, (_, v) => {
      if (['if', 'then', 'end', 'function', 'local', 'return', 'true', 'false', 'nil', 'for', 'do', 'repeat', 'until', 'while', 'break', 'and', 'or', 'not'].includes(v)) {
        return v;
      }
      return '_' + Math.random().toString(36).substring(2, 8);
    })
    .split('').reverse().join(''); // Example transformation

  res.status(200).json({ obfuscated });
}

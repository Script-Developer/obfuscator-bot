export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Only POST allowed");
  }

  try {
    const { code } = req.body;

    if (!code || typeof code !== "string") {
      return res.status(400).json({ result: "Invalid code input." });
    }

    const encoded = code
      .split("")
      .map(c => `\\${c.charCodeAt(0)}`)
      .join("");

    const wrapped = `-- [Made By Obfuscator Bot, https://discord.gg/VwTM63a38Y]\nlocal a="${encoded}"\nfor i in a:gmatch("\\%d+") do io.write(string.char(tonumber(i:sub(2)))) end`;

    res.status(200).json({ result: wrapped });
  } catch (e) {
    res.status(500).json({ result: "Internal error." });
  }
}

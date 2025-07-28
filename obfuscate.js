const http = require("http");

const PORT = process.env.PORT || 3000;

http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/obfuscate") {
    let body = "";

    req.on("data", chunk => (body += chunk));
    req.on("end", () => {
      try {
        const { code } = JSON.parse(body);
        if (!code) throw new Error("No code provided");

        obfuscated = `[Made By Obfuscator Bot, https://discord.gg/VwTM63a38Y]\n` + obfuscated;

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ result: obfuscated }));
      } catch (e) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ result: "❌ failed to obfuscate." }));
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ result: "❌ Not Found" }));
  }
}).listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

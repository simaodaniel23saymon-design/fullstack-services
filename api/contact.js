export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método não permitido" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Dados incompletos" });
  }

  // 👉 Aqui entra Gmail / WhatsApp / BD depois

  return res.status(200).json({
    message: "Mensagem enviada com sucesso!"
  });
}

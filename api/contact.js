export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método não permitido" });
  }

  const { name, email, message } = req.body;

  return res.status(200).json({
    success: true,
    message: "Mensagem recebida",
    data: { name, email, message }
  });
}

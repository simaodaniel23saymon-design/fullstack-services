const form = document.getElementById("contactForm");
const responseText = document.getElementById("response");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  responseText.textContent = "A enviar...";

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (response.ok) {
      responseText.textContent = result.message;
      form.reset();
    } else {
      responseText.textContent = "Erro ao enviar mensagem.";
    }

  } catch (error) {
    responseText.textContent = "Erro de ligação com o servidor.";
  }
});

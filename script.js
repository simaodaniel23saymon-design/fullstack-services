const form = document.getElementById("contactForm");
const responseEl = document.getElementById("response");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    responseEl.innerText = result.message || "Mensagem enviada!";
    form.reset();
  } catch (err) {
    responseEl.innerText = "Erro ao enviar mensagem.";
  }
});

const API = "http://localhost:3000/api/items";

async function addItem() {
    const nome = document.getElementById("nome").value;
    const categoria = document.getElementById("categoria").value;

    if (!nome) return alert("Digite um item!");

    await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, categoria })
    });

    document.getElementById("nome").value = "";
    loadItems();
}

async function loadItems() {
    const res = await fetch(API);
    let items = await res.json();

    const cat = document.getElementById("filtroCategoria").value;
    const status = document.getElementById("filtroStatus").value;

    if (cat) items = items.filter(i => i.categoria === cat);
    if (status !== "") items = items.filter(i => i.comprado == (status === "true"));

    const lista = document.getElementById("lista");
    lista.innerHTML = "";

    items.forEach(item => {
        const li = document.createElement("li");

        li.className = `item ${item.comprado ? "comprado" : "pendente"}`;

        li.innerHTML = `
      <span>${item.nome} (${item.categoria})</span>
      <div>
        <button onclick="toggle(${item.id})">✔️</button>
        <button onclick="removeItem(${item.id})">❌</button>
      </div>
    `;

        lista.appendChild(li);
    });
}

async function toggle(id) {
    await fetch(`${API}/${id}/toggle`, { method: "PATCH" });
    loadItems();
}

async function removeItem(id) {
    await fetch(`${API}/${id}`, { method: "DELETE" });
    loadItems();
}

loadItems();
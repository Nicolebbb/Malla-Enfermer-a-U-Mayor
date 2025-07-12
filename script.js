const ramos = [
  { id: 1, nombre: "Fundamentos de Enfermería", prereqs: [4] },
  { id: 2, nombre: "Biología celular e histoembriología", prereqs: [6] },
  { id: 3, nombre: "Genética", prereqs: [6] },
  { id: 4, nombre: "Química y bioquímica", prereqs: [6] },
  { id: 5, nombre: "Psicología en el curso de la vida", prereqs: [4] },
  { id: 6, nombre: "Salud y Sociedad", prereqs: [4] },
  { id: 7, nombre: "Disciplina y profesión", prereqs: [6] },
  { id: 8, nombre: "Anatomía humana", prereqs: [6] },
  { id: 9, nombre: "Psicología para la atención en salud", prereqs: [4] },
  { id: 10, nombre: "Bioestadística", prereqs: [6] },
  { id: 11, nombre: "Electivo 1", prereqs: [4] },
  { id: 12, nombre: "Electivo 2", prereqs: [4] },
  { id: 13, nombre: "Bases conceptuales de enfermería", prereqs: [6, 7] },
  { id: 14, nombre: "Fundamento del cuidado en personas mayores", prereqs: [4] },
  { id: 15, nombre: "Integrado en ciencias de la salud I", prereqs: [4, 8] },
  { id: 16, nombre: "Microbiología", prereqs: [6] },
  { id: 17, nombre: "Salud pública", prereqs: [6] },
  { id: 18, nombre: "Bases clínicas y comunitarias de enfermería", prereqs: [8, 13, 15] },
  { id: 19, nombre: "Educación para la salud", prereqs: [4] },
  { id: 20, nombre: "Integrado en ciencias de la salud II", prereqs: [8, 15] },
  { id: 21, nombre: "Salud basada en la evidencia", prereqs: [4] },
  { id: 22, nombre: "Electivo 3", prereqs: [4] },
  { id: 23, nombre: "Enfermería en la persona adulta y persona mayor", prereqs: [18, 20, 28] },
  { id: 24, nombre: "Enfermería en salud mental", prereqs: [8, 18, 20] },
  { id: 25, nombre: "Informática para ciencias de la salud", prereqs: [4] },
  { id: 26, nombre: "Métodos de investigación en salud", prereqs: [6, 10] },
  { id: 27, nombre: "Liderazgo en la gestión del cuidado", prereqs: [4] },
  { id: 28, nombre: "Inteligencia artificial aplicada a la salud", prereqs: [4] },
  { id: 29, nombre: "Fundamentos de calidad y seguridad de los cuidados", prereqs: [4, 18] },
  { id: 30, nombre: "Electivo 4", prereqs: [4] },
  { id: 31, nombre: "Enfermería en la infancia y adolescencia", prereqs: [23, 24, 28] },
  { id: 32, nombre: "Cuidados paliativos", prereqs: [4, 23, 24] },
  { id: 33, nombre: "Proyecto de investigación en enfermería I", prereqs: [4, 26] },
  { id: 34, nombre: "Calidad en los cuidados clínicos y comunitarios", prereqs: [4, 29] },
  { id: 35, nombre: "Electivo 5 - Salud Digital", prereqs: [4] },
  { id: 36, nombre: "Proyecto de investigación en enfermería II", prereqs: [6, 33] },
  { id: 37, nombre: "Innovación en calidad y seguridad en los cuidados", prereqs: [6, 34] },
  { id: 38, nombre: "Electivo 6 - Bioética", prereqs: [4] },
  { id: 39, nombre: "Internado de Enfermería en Urgencia", prereqs: [10] },
  { id: 40, nombre: "Internado de Enfermería Hospitalario", prereqs: [20] },
  { id: 41, nombre: "Internado de Enfermería Comunitario", prereqs: [20] },
  { id: 42, nombre: "Internado de Enfermería Electivo", prereqs: [10] },
];

const mallaDiv = document.getElementById("malla");

function renderMalla() {
  mallaDiv.innerHTML = "";
  ramos.forEach((ramo) => {
    const div = document.createElement("div");
    div.className = "ramo bloqueado";
    div.textContent = ramo.nombre;
    div.dataset.id = ramo.id;
    div.onclick = () => toggleAprobado(ramo.id);
    mallaDiv.appendChild(div);
  });
  actualizarEstados();
}

function toggleAprobado(id) {
  const div = document.querySelector(`[data-id='${id}']`);
  if (!div.classList.contains("bloqueado")) {
    div.classList.toggle("aprobado");
    actualizarEstados();
  }
}

function actualizarEstados() {
  ramos.forEach((ramo) => {
    const div = document.querySelector(`[data-id='${ramo.id}']`);
    const requisitosCumplidos = ramo.prereqs.every((req) => {
      const reqDiv = document.querySelector(`[data-id='${req}']`);
      return reqDiv && reqDiv.classList.contains("aprobado");
    });
    if (ramo.prereqs.length === 0 || requisitosCumplidos) {
      div.classList.remove("bloqueado");
    } else {
      div.classList.add("bloqueado");
    }
  });
}

function aprobarTodos() {
  document.querySelectorAll(".ramo").forEach((el) => {
    el.classList.remove("bloqueado");
    el.classList.add("aprobado");
  });
}

function reiniciarMalla() {
  document.querySelectorAll(".ramo").forEach((el) => {
    el.classList.remove("aprobado");
  });
  actualizarEstados();
}

renderMalla();

const fetchBtn = document.getElementById("fetchBtn");
const result = document.getElementById("result");

fetchBtn.addEventListener("click", () => {
  const entity = document.getElementById("entity").value;
  const id = document.getElementById("id").value;

  fetch(`https://swapi.nomoreparties.co/${entity}/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Ошибка ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      //console.log(data);
      console.log(entity);
      if (id === "") {
        result.textContent = "Введите номер ID (от 1 до 10)";
      } else if (entity === "films") {
        result.textContent = `Film: ${data.title}`;
      } else if (entity === "species") {
        result.textContent = `Species: ${data.name}`;
      } else {
        result.textContent = `Name: ${data.name}`;
      }
    })
    .catch((error) => {
      result.textContent = error;
    })
    .finally(() => {
      console.log("finally");
    });
});

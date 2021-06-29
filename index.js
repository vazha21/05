const table = document.getElementById("table");
const error = document.getElementById("error");

// map for displaying properties in UI. a.k.a table headings.
const map = new Map([
  ["id", "id"],
  ["year", "year"],
  ["color", "color"],
  ["name", "name"],
  ["pantone_value", "value"],
]);

fetch("https://reqres.in/api/unknown")
  .then((result) => result.json())
  .then((data) => populateTable(data))
  .catch(() => {
    error.style.display = "block";
  });

function populateTable(result) {
  const data = result.data;
  data.forEach((item, index) => {
    if (index === 0) {
      // create header.
      const tr = document.createElement("tr");
      for (const key in item) {
        const td = document.createElement("td");
        td.innerText = map.get(key);
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }
    // creating rows
    const tr = document.createElement("tr");
    for (const key in item) {
      const td = document.createElement("td");
      td.innerText = item[key];
      tr.appendChild(td);
    }
    table.appendChild(tr);
  });
}

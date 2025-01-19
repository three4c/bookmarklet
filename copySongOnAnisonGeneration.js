export default () => {
  const table = document.querySelectorAll("tbody");
  const lastTable = table[table.length - 1];
  const row = lastTable.querySelectorAll("tr");
  const td = Array.from(row).map((item) => item.querySelectorAll("td"));

  const targets = [];

  td.forEach((item) => {
    const lastTd = item[item.length - 1];
    const isMatch = /OP|ED/.test(lastTd.innerText);
    if (isMatch) {
      targets.push(
        `${item[2].innerText}「${item[3].innerText}」${lastTd.innerText.replace(/ /g, "")}`,
      );
    }
  });

  const div = document.createElement("div");
  const onClick = (text) => () => prompt("コピーしてね👇", text);

  targets.forEach((item) => {
    const button = document.createElement("button");
    button.innerText = item;
    button.addEventListener("click", onClick(item));
    div.appendChild(button);
  });

  document.body.appendChild(div);
};

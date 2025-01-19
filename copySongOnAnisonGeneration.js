export default () => {
  const table = document.querySelectorAll("tbody");
  const lastTable = table[table.length - 1];
  const row = lastTable.querySelectorAll("tr");
  const td = Array.from(row).map((item) => item.querySelectorAll("td"));
  const targets = [];

  td.forEach((item) => {
    const target = document.querySelector(".searchPanelBox input").value;
    const regExp = new RegExp(`^${target}`);
    const [first, second] = item[4].innerText.split(" ");
    const text = second
      ? /[a-zA-Z0-9]/.test(second)
        ? `${first}${second}`
        : `${first}（${second}）`
      : first;

    if (regExp.test(item[0].innerText)) {
      targets.push(`${item[2].innerText}「${item[3].innerText}」${text}`);
    }
  });

  const div = document.createElement("div");
  div.classList.add("copySongOnAnisonGeneration");

  const onClick = (text) => () => {
    prompt("Copy here👇", text);
    document.body.removeChild(div);
  };

  targets.forEach((item) => {
    const button = document.createElement("button");
    button.innerText = item;
    button.addEventListener("click", onClick(item));
    div.appendChild(button);
  });

  const style = document.createElement("style");
  style.innerHTML = `
    .copySongOnAnisonGeneration {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 9999;
      background-color: #0d1117;
      border: 1px solid #3d444d;
      border-radius: 0 0 8px 0; 
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }
    
    .copySongOnAnisonGeneration button {
      background-color: #0d1117;
      border: none;
      color: #f0f6fc;
      font-size: 14px;
      padding: 12px 16px;
    }

    .copySongOnAnisonGeneration button:not(:last-of-type) {
      border-bottom: 1px solid #3d444d;
    }

    button:hover {
      background: #151b23;
      cursor: pointer;
    }
  `;
  div.appendChild(style);
  document.body.appendChild(div);
};

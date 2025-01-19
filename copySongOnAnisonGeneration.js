export default () => {
  const table = document.querySelectorAll("tbody");
  const lastTable = table[table.length - 1];
  const row = lastTable.querySelectorAll("tr");
  const td = Array.from(row).map((item) => item.querySelectorAll("td"));

  const targets = [];

  td.forEach((item) => {
    const target = document.querySelector(".searchPanelBox input").value;
    const regExp = new RegExp(`^${target}`);
    const text = item[0].innerText;

    if (regExp.test(text)) {
      targets.push(
        `${item[2].innerText}「${item[3].innerText}」${item[4].innerText.replace(/ /g, "")}`,
      );
    }
  });

  const div = document.createElement("div");
  div.classList.add("copySongOnAnisonGeneration");

  const onClick = (text) => () => {
    prompt("コピーしてね👇", text);
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
      background: #fff;
      border-radius: 0 0 8px 0; 
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
      display: flex;
      flex-direction: column;
      padding: 16px 16px 8px 16px;
    }
    
    .copySongOnAnisonGeneration button {
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #333;
      font-size: 14px;
      margin: 0 8px 8px 0;
      padding: 4px 8px;
    }

    button:hover {
      background: #eee;
      cursor: pointer;
    }
  `;
  div.appendChild(style);
  document.body.appendChild(div);
};

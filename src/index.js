import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値取得，初期化
  const inputText = document.getElementById("added-text").value;
  document.getElementById("added-text").value = "";

  addIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除する関数
const deleteFromIncompleteList = (target) =>
  document.getElementById("incomplete-list").removeChild(target);

const deleteFromCompleteList = (target) =>
  document.getElementById("complete-list").removeChild(target);

const addIncompleteList = (text) => {
  // div生成
  const div = document.createElement("div");
  div.classList = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  // button(完了)タグ作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const completeTarget = completeButton.parentNode;
    deleteFromIncompleteList(completeTarget);
    const text = completeTarget.firstElementChild.innerText;

    // div以下を初期化
    completeTarget.textContent = null;

    // liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    // button(戻す)タグ作成
    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";

    completeTarget.appendChild(li);
    completeTarget.appendChild(returnButton);
    document.getElementById("complete-list").appendChild(completeTarget);

    returnButton.addEventListener("click", () => {
      const returnTarget = returnButton.parentNode;
      deleteFromCompleteList(returnTarget);
      const text = returnTarget.firstElementChild.innerText;
      addIncompleteList(text);
    });
  });

  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // alert("削除");
    // 押された削除ボタンの親要素を未完了リストから削除する
    const deleteTarget = deleteButton.parentNode;
    deleteFromIncompleteList(deleteTarget);
  });

  // divタグの子要素に書く要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  // console.log(div);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

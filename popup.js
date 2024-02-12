const nameList = [
  ["KashiuchiSotaroSub", "樫内サブ"], 
  ["TEST", "test"], 
];

// テキストを置換する関数
function searchName() {
  var elements = document.getElementById("name-list");
  
  var createElement = '';
  
  
  for(var i = 0; i < nameList.length; i++){
    createElement = createElement + '<option value="' + nameList[i][1] + '"></option>'
  }
  elements.insertAdjacentHTML("afterbegin", createElement)
}

function clickHandlerSearchName(e) {
  let textInput = document.getElementById('search-box').value;
  let result = ""
  for(let i=0; i<nameList.length; i++){
    if(textInput != nameList[i][1])continue
    result = nameList[i][0]
  }

  let textOutput = document.getElementById('resolt-box')
  textOutput.value = result;
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('search-button').addEventListener('click', clickHandlerSearchName);
});

// ページ読み込み時にテキストを置換
searchName();

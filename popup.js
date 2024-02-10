
];

// テキストを置換する関数
function searchName() {
  var elements = document.getElementById("name-list");
  
  var createElement = '';
  
  
  for(var i = 0; i < nameList.length; i++){
    // createElement = createElement + '<option value="' + '"></option>'
    createElement = createElement + '<option value="' + nameList[i][1] + '"></option>'
  }
  elements.insertAdjacentHTML("afterbegin", createElement)
}

// ページ読み込み時にテキストを置換
searchName();

const nameList = [
    ["NickName", "FluuName"], 
    ["KashiuchiSotaroSub", "樫内サブ"], 
];

// テキストを置換する関数
function replaceText() {
    let elements = document.getElementsByTagName('a');

    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];

        for (let j = 0; j < element.childNodes.length; j++) {
            let node = element.childNodes[j];

            if (node.nodeType === 3) {
                let text = node.nodeValue;
                let replacedText = text;
                for(let k = 0; k < nameList.length; k++){
                    replacedText = replacedText.replace(nameList[k][0], nameList[k][1]); // 置換する文字列を指定
                }
                
                if (replacedText !== text) {
                    element.replaceChild(document.createTextNode(replacedText), node);
                }
            }
        }
    }
}

// ページ読み込み時にテキストを置換
replaceText();

// ページのDOM変更を監視して動的にテキストを置換
let observer = new MutationObserver(function(mutations) {
mutations.forEach(function(mutation) {
    if (mutation.type === 'childList') {
        replaceText();
    }
});
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});

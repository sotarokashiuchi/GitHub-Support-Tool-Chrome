const nameList = [
];

// テキストを置換する関数
function replaceText() {
    var elements = document.getElementsByTagName('a');

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];

            if (node.nodeType === 3) {
                var text = node.nodeValue;
                var replacedText = text;
                for(var k = 0; k < nameList.length; k++){
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
var observer = new MutationObserver(function(mutations) {
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

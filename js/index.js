
console.log ("rodsen")

var oOl_1 = document.getElementById("catalog_1").lastElementChild;
// console.log (oOl_1)
var alis_1 = ["人工智能","芯片软硬件"];
// console.log (alis_1)
fnCreateLi(alis_1,oOl_1);

var oOl_2 = document.getElementById("catalog_2").lastElementChild;
var alis_2 = ["前端","后端","小程序","AI","云计算","区块链","安全","Android","iOS","工具","程序员","行业","SF官方","更多标签"];

fnCreateLi(alis_2,oOl_2);

function fnCreateLi (arr,parent) {
    for (var i = 0;i<arr.length;i++) {
        var oLi = document.createElement("li");
        oLi.innerText = arr[i];
        parent.appendChild(oLi);
        
    }
}



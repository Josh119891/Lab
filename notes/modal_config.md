# modal无法闪退

- 禁止回车自动提交

  `<form onsubmit="return false;">`


- 关闭ESC和点击modal外部分，不推出modal

   `$("#myModal").modal({backdrop: "static", keyboard: false});`

- 全局关闭enter
```javascript
  document.onkeydown=function(e){
    var e = event.srcElement;
    if (event.keyCode == 13) {
      return false;
    }
  }
```

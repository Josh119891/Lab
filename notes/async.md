# Async

```javascript
function resolveAfterSeconds(x) { 
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 1500)
  }
}
  
async function f1() {
  var x = await resolveAfterSeconds(10);
  console.log(x); // 10
}
  
f1();
function fetchDemo(){
  fetch('url')
  .then(res=>{
    return res.json();
  }).then(todos=>{
    this.todos=tods;
  })
}
```

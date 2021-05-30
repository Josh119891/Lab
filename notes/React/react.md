# 数值校验 和 默认值

```javascript
import PropTypes from 'prop-types'

function Hello({ name }) {
  return (
      //如果是inline配置，需要两对大括号 {{}}
    <div style={helloStyle}>Hello, {name}</div>
  )
}
//设置类别校验
Hello.propTypes = {
  name: PropTypes.string
}
//设置默认值
Hello.defaultProps = {
  name: 'Stranger'
};

const helloStyle ={
    color: "red"
}
export default Hello
```


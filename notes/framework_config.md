# framework

## import all files at once

  ```javascript
    //controller/index
    module.exports = {
        user: require('./user'),
        substation: require('./substation'),
        transformer: require('./transformer'),
        worklog: require('./worklog'),
        transbox: require('./transbox'),
        voltage: require('./voltage'),
        lowvol: require('./lowvol'),
        lampins: require('./lampins')
    };
    //router/index.js
    const {
        user,
        substation,
        lampins,
        transbox,
        transformer,
        voltage,
        lowvol,
        worklog
        } = require('../controller');
  ```

const app = require('./app')
console.log(app.xyz())

let arr = [4,5,2,6,8,54,4,2];
const result = arr.filter((item)=>{
    return item>=5
});
console.warn(result);
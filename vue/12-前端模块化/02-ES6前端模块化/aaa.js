let name = '小明'
let age = 18
let flag = true

function sum(num1, num2) {
  return num1 + num2
}

if (flag) {
  console.log(sum(20, 30));
}

//1.导出方式一
export {
  flag,
  sum
}

//2.导出方式二
export let num1 = 1000;
export let height = 160

//3.导出函数/类
export function mul(num1, num2) {
  return num1 * num2
}

export class Person {
  run() {
    console.log('sadasd')
  }
}

//5.export default 不允许存在多个
// const address = '北京市'
// export default address

export default function(aaa){
  console.log(aaa);
  
}
const app = new Vue({
  el: '#app',
  data: {
    books: [{
        id: 1,
        name: '《算法导论》',
        date: '2006-9',
        price: 85.00,
        count: 1
      },
      {
        id: 2,
        name: '《UNIX编程艺术》',
        date: '2006-2',
        price: 59.00,
        count: 1
      },
      {
        id: 3,
        name: '《编程珠玑》',
        date: '2008-10',
        price: 39.00,
        count: 1
      },
      {
        id: 4,
        name: '《代码大全》',
        date: '2006-3',
        price: 128.00,
        count: 1
      },
    ]
  },
  computed: {
    totalPrice() {
      //1.普通的for循环
      // let totalPrice = 0;
      // for(let i=0;i<this.books.length;i++){
      //   totalPrice += this.books[i].count * this.books[i].price
      // }
      // return totalPrice ;

      //for(let i in this.books)
      // let totalPrice = 0;
      // for(let i in this.books){
      //   totalPrice += this.books[i].count * this.books[i].price
      // }
      // return totalPrice;

      //3.for(let i of this.books)
      // let totalPrice = 0;
      // for(item of this.books){
      //   totalPrice += item.count * item.price;
      // }
      // return totalPrice;

      //reduce
      return this.books.reduce(function (preValue, book) {
        return preValue + book.count * book.price;
      }, 0)
    }
  },
  methods: {
    // getFinalPrice(price){
    //   return "￥"+price.toFixed(2);
    // }
    increament(index) {
      this.books[index].count++;
    },
    decreament(index) {
      this.books[index].count--;
    },
    removeHandle(index) {
      this.books.splice(index, 1);
    }
  },
  filters: { //过滤器
    showPrice(price) {
      return "￥" + price.toFixed(2);
    }
  }
})


//编程范式：命令式编程/声明式编程
//编程范式：面向对象编程（第一公民：对象）/函数式编程（第一公民：函数）
//filter/map/reduce
//filter中的回调函数有一个要求：必须返回一个boolean值
//true：当返回true时，函数内部会自动将这次回调的n加入到新的数组中
//false：当返回false时，函数内部会过滤掉这次的n
const nums = [10, 40, 111, 20, 222, 30, 333]

let total = nums.filter(n => n < 100).map(n => n * 2).reduce((pre, n) => pre + n)
console.log(total)

// let total = nums.filter(function(n){
//   return n < 100;
// }).map(function(n){
//   return n*2;
// }).reduce(function(preValue,n){
//   return preValue + n;
// },0);
// console.log(total);


// //1.filter函数的使用
// //10 40 20 30
// let newNums = nums.filter(function(n){
//   return n < 100
// })
// console.log(newNums);

// // 2.map函数的使用
// //20 80 40 60
// let new2Nums = newNums.map(function(n){
//   return n*2
// })
// console.log(new2Nums);

// // 3.reduce函数的使用
// //reduce作用：对数组中所有的内容进行汇总
// let total = new2Nums.reduce(function(preValue,n){
//   return preValue + n;
// },0)
// console.log(total);

//第一次 preValue 0 n 20
//第二次 preValue 0+20 n 40
//第三次 preValue 20+40 n 80
//第四次 preValue 60+80 n 60
//total 140+60


// //1.需求：取出所有小于100的数字
// let newNums = [];
// for(let n of nums){
//   if(n < 100){
//     newNums.push(n)
//   }
// }

// //2.将所有小于100的数字进行转化：全部*2
// let new2Nums = [];
// for(let n of newNums){
//   new2Nums.push(n*2)
// }

// //3.需求：将所有new2Nums数字相加，得到最终的结果
// let total = 0;
// for(let n of new2Nums){
//   total += n;
// }

// console.log(total)
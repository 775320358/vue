const app = new Vue({
  el:'#app',
  data:{
    books: [
			{
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
  computed:{
    totalPrice(){
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

    }
  },
  methods:{
    // getFinalPrice(price){
    //   return "￥"+price.toFixed(2);
    // }
    increament(index){
      this.books[index].count++;
    },
    decreament(index){
      this.books[index].count--;
    },
    removeHandle(index){
      this.books.splice(index,1);
    }
  },
  filters:{//过滤器
    showPrice(price){
      return "￥"+price.toFixed(2);
    }
  }
})


//编程范式：命令式编程/声明式编程
//编程范式：面向对象编程（第一公民：对象）/函数式编程（第一公民：函数）
const nums = [10,40,111,20,222,30,333]

//1.需求：取出所有小于100的数字
let newNums = [];
for(let n of nums){
  if(n < 100){
    newNums.push(n)
  }
}

//2.将所有小于100的数字进行转化：全部*2
let new2Nums = [];
for(let n of newNums){
  new2Nums.push(n*2)
}
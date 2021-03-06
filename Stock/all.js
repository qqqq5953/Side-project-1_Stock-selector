const App = {
  data() {
    return {
      numCart: [],
      amountCart: [],
      stock: [
        {
          name: "VTI",
          priceFixNum: 229.64,
          priceFixAnount: 100,
          numIsChecked: false,
          amountIsChecked: false,
          stockNum: "" || 1
        },
        {
          name: "XLF",
          priceFixNum: 37.50,
          priceFixAnount: 100,
          numIsChecked: false,
          amountIsChecked: false,
          stockNum: "" || 1
        },
        {
          name: "XLK",
          priceFixNum: 156.48,
          priceFixAnount: 100,
          numIsChecked: false,
          amountIsChecked: false,
          stockNum: "" || 1
        },
        {
          name: "XLY",
          priceFixNum: 182.74,
          priceFixAnount: 100,
          numIsChecked: false,
          amountIsChecked: false,
          stockNum: "" || 1
        },
        {
          name: "GOOGL",
          priceFixNum: 2844.30,
          priceFixAnount: 100,
          numIsChecked: false,
          amountIsChecked: false,
          stockNum: "" || 1
        },
        {
          name: "AAPL",
          priceFixNum: 146.92,
          priceFixAnount: 100,
          numIsChecked: false,
          amountIsChecked: false,
          stockNum: "" || 1
        },
        {
          name: "NVDA",
          priceFixNum: 220.81,
          priceFixAnount: 100,
          numIsChecked: false,
          amountIsChecked: false,
          stockNum: "" || 1
        },
        {
          name: "V",
          priceFixNum: 223.03,
          priceFixAnount: 100,
          numIsChecked: false,
          amountIsChecked: false,
          stockNum: "" || 1
        },
        {
          name: "PYPL",
          priceFixNum: 278.11,
          priceFixAnount: 100,
          numIsChecked: false,
          amountIsChecked: false,
          stockNum: "" || 1
        },
        {
          name: "WMT",
          priceFixNum: 144.3,
          priceFixAnount: 100,
          numIsChecked: false,
          amountIsChecked: false,
          stockNum: "" || 1
        },
      ]
    };
  },
  methods: {
    addStockNum(stock) {
      stock.numIsChecked = !stock.numIsChecked; //???false ??? true??????
      if (stock.numIsChecked === true) {
        this.numCart.push(stock);
      } else {
        this.numCart.forEach((item, i, arr) => {
          if (item.name === stock.name) {
            arr.splice(i, 1);
          }
        });
      }
    },
    addStockAmount(stock) {
      // console.log("cart ??????", this.amountCart);
      // console.log("cart ?????????????????????", this.amountCart === []); //?????????false?
      // console.log("stock", stock);
      // stock.numIsChecked = !stock.numIsChecked; //???false ??? true??????
      stock.amountIsChecked = !stock.amountIsChecked;
      if (stock.amountIsChecked === true) {
        this.amountCart.push(stock);
      } else {
        this.amountCart.forEach((item, i, arr) => {
          if (item.name === stock.name) {
            arr.splice(i, 1);
          }
        });
      }
    }
  },
  computed: {
    total() {
      // ??????????????????
      let totalPriceFixNum = 0;
      this.numCart.forEach((item) => {
        totalPriceFixNum += item.priceFixNum * item.stockNum;
      });
      // ??????????????????
      let totalPriceFixAnount = 0;
      this.amountCart.forEach((item) => {
        totalPriceFixAnount += item.priceFixAnount;
      });
      // console.log(totalPriceFixNum,totalPriceFixAnount);
      return totalPriceFixNum + totalPriceFixAnount;
    }
  },
  created() { }
};

Vue.createApp(App).mount("#app");


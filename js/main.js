const app = {
  data() {
    return {
      products: [
        {
          id: 1,
          title: "Latte",
          description: "Enjoy a creamy latte.",
          price: 5,
          stock: 10,
          images: ["img/latte.png"],
        },
        {
          id: 2,
          title: "Cappuccino",
          description: "Say hello to a classic cappuccino.",
          price: 12,
          stock: 9,
          images: ["img/organic.png"],
        },
        {
          id: 3,
          title: "Espresso",
          description: "Start your morning with a strong espresso.",
          price: 14,
          stock: 15,
          images: ["img/espoo.png"],
        },
        {
          id: 4,
          title: "Mocha",
          description: "A delicious blend of coffee and chocolate.",
          price: 8,
          stock: 12,
          images: ["img/mocha.png"],
        },
        {
          id: 5,
          title: "Americano",
          description: "A bold and smooth black coffee.",
          price: 6,
          stock: 20,
          images: ["img/americano.png"],
        },
        {
          id: 6,
          title: "Ice coffee",
          description: "Espresso with a dash of frothy milk.",
          price: 7,
          stock: 18,
          images: ["img/3333.png"],
        },
      ],
      isCartVisible: false,
      cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
      formSubmitted: false, // For contact form
    };
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0
      );
    },
  },
  methods: {
    toggleCart() {
      this.isCartVisible = !this.isCartVisible;
    },
    addToCart(product) {
      const existingItem = this.cartItems.find(
        (item) => item.product.id === product.id
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.cartItems.push({
          product: product,
          quantity: 1,
        });
      }
      this.saveCart();
    },
    removeFromCart(index) {
      this.cartItems.splice(index, 1);
      this.saveCart();
    },
    saveCart() {
      localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
    },
    submitForm() {
      // Simulate form submission
      this.formSubmitted = true;
      setTimeout(() => {
        this.formSubmitted = false;
      }, 3000); // Hide success message after 3 seconds
    },
  },
};

Vue.createApp(app).mount("#app");

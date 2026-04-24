<template>
  <div class="counter-container">
    <h1>Counter - State Management</h1>
    <div class="counter-display">
      <p>Current Count: <span class="count-value">{{ count }}</span></p>
    </div>
    <div class="button-group">
      <button @click="decrement" class="btn btn-danger">
        Decrement -
      </button>
      <button @click="increment" class="btn btn-success">
        Increment +
      </button>
    </div>
    <div class="reset-section">
      <button @click="reset" class="btn btn-warning">
        Reset
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CountPage1',
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
    reset() {
      this.count = 0
    }
  }
}
</script>

<style scoped>
.counter-container {
  padding: 40px;
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  margin: 20px auto;
  max-width: 500px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
}

h1 {
  color: #fff;
  margin-bottom: 30px;
  font-size: 2.5rem;
}

.counter-display {
  background: rgba(255, 255, 255, 0.2);
  padding: 30px;
  border-radius: 10px;
  margin: 20px 0;
}

.counter-display p {
  font-size: 1.5rem;
  color: #fff;
  margin: 0;
}

.count-value {
  font-size: 3rem;
  font-weight: bold;
  color: #4ade80;
  display: block;
  margin: 15px 0;
}

.button-group {
  display: flex;
  gap: 15px;
  justify-content: center;
  margin: 30px 0;
}

.reset-section {
  margin-top: 20px;
}

.btn {
  padding: 12px 30px;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.btn:active {
  transform: translateY(0);
}

.btn-success {
  background: linear-gradient(135deg, #4ade80, #22c55e);
}

.btn-success:hover {
  background: linear-gradient(135deg, #22c55e, #16a34a);
}

.btn-danger {
  background: linear-gradient(135deg, #f87171, #ef4444);
}

.btn-danger:hover {
  background: linear-gradient(135deg, #ef4444, #dc2626);
}

.btn-warning {
  background: linear-gradient(135deg, #facc15, #eab308);
}

.btn-warning:hover {
  background: linear-gradient(135deg, #eab308, #ca8a04);
}
</style>
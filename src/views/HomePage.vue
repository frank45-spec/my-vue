<template>
  <section class="home">
    <div class="hero">
     <h1>Welcome - feature-a version</h1>
      <p>
        Build fast, modern, and scalable web applications using
        <strong>Vue 3</strong> and <strong>Vite</strong>.
      </p>

      <div class="buttons">
        <RouterLink to="/about" class="btn primary">Learn More</RouterLink>
        <RouterLink to="/contact" class="btn secondary">Contact Us</RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.home {
  padding: 40px;
}

.hero {
  text-align: center;
  margin-bottom: 60px;
}

.hero h1 {
  font-size: 36px;
  color: #0f172a;
}

.hero p {
  font-size: 18px;
  color: #475569;
  margin: 15px 0 30px;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 12px;
}

.btn {
  display: inline-block;
  padding: 10px 18px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.15s ease, opacity 0.15s ease;
}

.btn:hover {
  transform: translateY(-1px);
  opacity: 0.95;
}

.primary {
  background: #2563eb;
  color: #ffffff;
}

.secondary {
  background: #e2e8f0;
  color: #0f172a;
}
</style>

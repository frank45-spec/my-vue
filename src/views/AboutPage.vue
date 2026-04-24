<template>
  <section class="about">
    <h1>About Us</h1>

    <p class="intro">
      We are a passionate team building modern web applications using
      <strong>Vue.js</strong> and the latest web technologies.
    </p>

    <div class="cards">
      <div class="card">
        <h3>Our Mission</h3>
        <p>
          To create fast, reliable, and user-friendly applications that solve
          real-world problems.
        </p>
      </div>
      <div class="card">
        <h3>Our Vision</h3>
        <p>
          To become a trusted technology partner by delivering high-quality
          digital solutions.
        </p>
      </div>

      <div class="card">
        <h3>Why Choose Us?</h3>
        <p>
          Clean code, modern design, and continuous improvement are at the heart
          of everything we do.
        </p>
      </div>
    </div>
  </section>
</template>
 
<script setup>
// No logic needed for now
</script>

<style scoped>
.about {
  padding: 40px;
  max-width: 1000px;
  margin: auto;
}

h1 {
  text-align: center;
  color: #e4e6eb;
  margin-bottom: 20px;
}

.intro {
  text-align: center;
  font-size: 18px;
  margin-bottom: 40px;
  color: #eaecee;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.card {
  background: #f8fafc;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
}

.card h3 {
  color: #0f172a;
  margin-bottom: 10px;
}

.card p {
  color: #334155;
  line-height: 1.6;
}
</style>

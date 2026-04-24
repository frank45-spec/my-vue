<template>
  <nav class="navbar">
    <div class="navbar-wrapper">
      <router-link to="/" class="logo">MyApp</router-link>
      <div class="dropdown-wrapper">
        <button class="dropdown-toggle">
          <i class="fas fa-bars"></i>
        </button>
        <ul class="dropdown-menu">
          <li><router-link to="/" class="menu-item"><i class="fas fa-home"></i> Home</router-link></li>
          <li><router-link to="/dashboard" class="menu-item"><i class="fas fa-tachometer-alt"></i> Dashboard</router-link></li>
          <li><router-link to="/dashboard/profile" class="menu-item"><i class="fas fa-user"></i> Profile</router-link></li>
          <li><router-link to="/api" class="menu-item"><i class="fas fa-cloud"></i> API</router-link></li>
          <li><router-link to="/form" class="menu-item"><i class="fas fa-edit"></i> Form</router-link></li>
          <li><router-link to="/about" class="menu-item"><i class="fas fa-info-circle"></i> About</router-link></li>
          <li><router-link to="/setting" class="menu-item"><i class="fas fa-cog"></i> Settings</router-link></li>
          <li><router-link to="/count1" class="menu-item"><i class="fas fa-plus"></i> Counter</router-link></li>
          <li><router-link to="/not-found" class="menu-item"><i class="fas fa-question-circle"></i> Not Found</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
.navbar {
  background-color: #1e293b;
  padding: 0;
  margin: 0;
  width: 100%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.navbar-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  width: 100%;
}

.logo {
  color: #38bdf8;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  margin: 0;
}

.logo:hover {
  color: #0ea5e9;
}

.dropdown-wrapper {
  position: relative;
}

.dropdown-toggle {
  background: none;
  border: none;
  color: #f8fafc;
  font-size: 28px;
  cursor: pointer;
  padding: 8px 12px;
  transition: color 0.3s ease;
}

.dropdown-toggle:hover {
  color: #38bdf8;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #2d3748;
  list-style: none;
  margin: 8px 0 0 0;
  padding: 8px 0;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  min-width: 200px;
  display: none;
  z-index: 1000;
}

.dropdown-wrapper:hover .dropdown-menu {
  display: block;
}

.menu-item {
  display: flex;
  align-items: center;
  color: #f8fafc;
  text-decoration: none;
  padding: 12px 20px;
  transition: all 0.3s ease;
  border-bottom: 1px solid #4a5568;
  gap: 12px;
}

.menu-item:last-child {
  border-bottom: none;
}

.menu-item:hover {
  background-color: #4a5568;
  color: #38bdf8;
  padding-left: 25px;
}

.menu-item i {
  width: 18px;
  text-align: center;
  font-size: 16px;
}
</style>

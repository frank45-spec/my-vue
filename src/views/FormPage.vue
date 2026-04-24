<template>
  <section class="login form">
    <h1>Login</h1>

    <form @submit.prevent="handleSubmit" class="form">
      <!-- Name -->
      <div class="field">
        <label>Name</label>
        <input
          type="text"
          v-model="form.name"
          placeholder="Enter your name"
          required
        />
      </div>

      <!-- Email -->
      <div class="field">
        <label>Email</label>
        <input
          type="email"
          v-model="form.email"
          placeholder="Enter your email"
          required
        />
      </div>

      <!-- Message -->
      <div class="field">
        <label>password</label>
        <textarea
          v-model="form.password"
          placeholder="Password"
          required
        ></textarea>
      </div>

      <!-- Button -->
      <button type="submit">login</button>
    </form>

    <!-- Submissions Table -->
    <div v-if="submissions.length > 0" class="table-container">
      <h2>Submissions</h2>
      <table class="submissions-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>password</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(submission, index) in submissions" :key="index">
            <td>{{ submission.name }}</td>
            <td>{{ submission.email }}</td>
            <td>{{ submission.password }}</td>
            <td>{{ submission.date }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
import { reactive } from 'vue'

export default {
  name: 'LoginForm',
  setup() {
    const form = reactive({
      name: '',
      email: '',
      password: ''
    })

    const submissions = reactive([])

    function handleSubmit() {
      const now = new Date()
      const dateString = now.toLocaleDateString() + ' ' + now.toLocaleTimeString()
      
      submissions.push({
        name: form.name,
        email: form.email,
        password: form.password,
        date: dateString
      })

      console.log('Form data:', form)
      alert('login successful!')

      // Clear form
      form.name = ''
      form.email = ''
      form.password = ''
    }

    return {
      form,
      handleSubmit,
      submissions
    }
  }
}
</script>

<style scoped>
.contact {
  max-width: 500px;
  margin: auto;
  padding: 40px;
}

h1 {
  text-align: center;
  margin-bottom: 25px;
  color: #d8dee4;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.field {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 5px;
  font-weight: 600;
}

input,
textarea {
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #cbd5f1;
  font-size: 15px;
}

textarea {
  resize: none;
  height: 100px;
}

button {
  padding: 12px;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  background: #1d4ed8;
}

.table-container {
  margin-top: 50px;
  padding: 20px;
  background: #f8fafc;
  border-radius: 8px;
}

.table-container h2 {
  color: #1e293b;
  margin-bottom: 20px;
  text-align: center;
}

.submissions-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.submissions-table thead {
  background: #2563eb;
  color: white;
}

.submissions-table th {
  padding: 12px;
  text-align: left;
  font-weight: 600;
  border: none;
}

.submissions-table td {
  padding: 12px;
  border-bottom: 1px solid #e2e8f0;
}

.submissions-table tbody tr:hover {
  background: #f1f5f9;
}

.submissions-table tbody tr:last-child td {
  border-bottom: none;
}</style>
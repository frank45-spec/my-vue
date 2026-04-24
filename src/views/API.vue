<template>
  <div class="container"></div>
    <header>
      <h1><i class="fas fa-cloud-download-alt"></i> API Data Fetcher</h1>
      <p class="subtitle">
        Make HTTP requests to any API endpoint using GET, POST, PUT, PATCH, or DELETE methods
      </p>
    </header>

    <!-- COMPONENTS DROPDOWN -->
    <div class="components-dropdown-section">
      <label><i class="fas fa-cube"></i> View Components:</label>
      <select v-model="selectedComponent" @change="loadComponent">
        <option value="">-- Select a Component --</option>
        <option v-for="comp in componentList" :key="comp" :value="comp">
          {{ comp }}
        </option>
      </select>
    </div>

    <!-- COMPONENT PREVIEW -->
    <div v-if="selectedComponent && loadedComponent" class="component-preview">
      <h3>{{ selectedComponent }}</h3>
      <div class="component-container">
        <component :is="loadedComponent"></component>
      </div>
    </div>

    <div class="api-info">
      <h3><i class="fas fa-info-circle"></i> Try these example APIs:</h3>
      <ul>
        <li><strong>GET:</strong> https://jsonplaceholder.typicode.com/posts/1</li>
        <li><strong>POST:</strong> https://jsonplaceholder.typicode.com/posts</li>
        <li><strong>PUT:</strong> https://jsonplaceholder.typicode.com/posts/1</li>
      </ul>
    </div>

    <div class="content-wrapper">
      <!-- LEFT PANEL -->
      <div class="panel">
        <h2><i class="fas fa-sliders-h"></i> Request Configuration</h2>

        <div class="input-group">
          <label>API Endpoint URL</label>
          <input v-model="apiUrl" type="text" />
        </div>

        <div class="input-group">
          <label>HTTP Method</label>
          <div class="methods">
            <button
              v-for="m in methods"
              :key="m"
              :class="['method-btn', m.toLowerCase(), { active: method === m }]"
              @click="selectMethod(m)"
            >
              {{ m }}
            </button>
          </div>
        </div>

        <div class="input-group">
          <label>Request Body (JSON)</label>
          <textarea
            v-model="requestBody"
            :disabled="method === 'GET' || method === 'DELETE'"
          ></textarea>
        </div>

        <button class="btn-large" @click="sendRequest" :disabled="loading">
          <i class="fas fa-paper-plane"></i> Send Request
        </button>

        <div v-if="loading" class="loading">
          <div class="spinner"></div>
          <p>Sending request...</p>
        </div>
      </div>

      <!-- RIGHT PANEL -->
      <div class="panel">
        <div class="response-container">
          <div class="response-header">
            <h2><i class="fas fa-reply"></i> API Response</h2>
            <div class="status info">{{ statusText }}</div>
          </div>

          <button class="copy-btn" @click="copyResponse">
            <i class="far fa-copy"></i> Copy
          </button>

          <div class="response-body">
            {{ response }}
          </div>
        </div>

        <div class="history-container">
          <h3><i class="fas fa-history"></i> Request History</h3>

          <div
            v-for="(item, index) in history"
            :key="index"
            class="history-item"
            @click="loadHistory(item)"
          >
            <span class="history-method">{{ item.method }}</span>
            <span class="history-url">{{ item.url }}</span>
            <span class="history-time">{{ item.time }} • {{ item.ms }}ms</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "ApiFetcher",

  data() {
    return {
      apiUrl: "https://jsonplaceholder.typicode.com/posts/1",
      method: "GET",
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
      requestBody: `{
  "title": "Example",
  "body": "Test body",
  "userId": 1
}`,
      response: "// Response will appear here",
      statusText: "Ready",
      loading: false,
      history: [],
      selectedComponent: "",
      loadedComponent: null,
      componentList: [
        "AboutPage",
        "Dashboard",
        "FormPage",
        "HomePage",
        "NotfoundPage",
        "countpage1",
        "profilepage",
        "settingpage",
        "Userpage"
      ]
    };
  },

  mounted() {
    const saved = localStorage.getItem("apiHistory");
    if (saved) this.history = JSON.parse(saved);
  },

  methods: {
    selectMethod(m) {
      this.method = m;
    },

    async loadComponent() {
      if (!this.selectedComponent) {
        this.loadedComponent = null;
        return;
      }

      try {
        this.loadedComponent = await import(`../views/${this.selectedComponent}.vue`).then(m => m.default);
      } catch (error) {
        console.error(`Failed to load component: ${this.selectedComponent}`, error);
        this.loadedComponent = null;
      }
    },

    async sendRequest() {
      if (!this.apiUrl) return;

      this.loading = true;
      this.statusText = "Loading...";

      const options = {
        method: this.method,
        headers: { "Content-Type": "application/json" },
      };

      if (this.method !== "GET" && this.method !== "DELETE") {
        try {
          JSON.parse(this.requestBody);
          options.body = this.requestBody;
        } catch {
          this.response = "Invalid JSON";
          this.loading = false;
          return;
        }
      }

      const start = Date.now();
      try {
        const res = await fetch(this.apiUrl, options);
        const data = await res.json();
        const time = Date.now() - start;

        this.response = JSON.stringify(data, null, 2);
        this.statusText = `${res.status} ${res.statusText}`;

        this.history.unshift({
          url: this.apiUrl,
          method: this.method,
          time: new Date().toLocaleTimeString(),
          ms: time,
        });

        this.history = this.history.slice(0, 10);
        localStorage.setItem("apiHistory", JSON.stringify(this.history));
      } catch (e) {
        this.response = e.message;
        this.statusText = "Error";
      }

      this.loading = false;
    },

    copyResponse() {
      navigator.clipboard.writeText(this.response);
    },

    loadHistory(item) {
      this.apiUrl = item.url;
      this.method = item.method;
    },
  },
};
</script>

<style scoped>
/* 🔹 PASTE YOUR SAME CSS HERE 🔹 */
/* (No change needed – Vue supports normal CSS) */

/* COMPONENTS DROPDOWN STYLING */
.components-dropdown-section {
  background: #f0f4f8;
  padding: 20px;
  margin: 20px 0;
  border-radius: 8px;
  border-left: 4px solid #4CAF50;
}

.components-dropdown-section label {
  display: block;
  font-weight: 600;
  margin-bottom: 10px;
  color: #333;
  font-size: 16px;
}

.components-dropdown-section select {
  width: 100%;
  padding: 12px;
  font-size: 14px;
  border: 2px solid #ddd;
  border-radius: 6px;
  background-color: white;
  cursor: pointer;
  transition: all 0.3s ease;
}

.components-dropdown-section select:hover {
  border-color: #4CAF50;
  box-shadow: 0 0 5px rgba(76, 175, 80, 0.3);
}

.components-dropdown-section select:focus {
  outline: none;
  border-color: #4CAF50;
  box-shadow: 0 0 8px rgba(76, 175, 80, 0.5);
}

/* COMPONENT PREVIEW STYLING */
.component-preview {
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.component-preview h3 {
  color: #333;
  margin-top: 0;
  padding-bottom: 15px;
  border-bottom: 2px solid #4CAF50;
}

.component-container {
  margin-top: 15px;
  padding: 15px;
  background: #fafafa;
  border-radius: 6px;
  border-left: 3px solid #2196F3;
}
</style>

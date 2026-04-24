<template>
    <div class="dashboard">
        <h1>Dashboard</h1>
        <p>Welcome to your dashboard!</p>
        <RouterLink to="/dashboard/profile" class="btn btn-primary">Go to Profile</RouterLink>
        <RouterLink to="/dashboard/settings" class="btn btn-secondary">Go to Settings</RouterLink>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'DashboardPage'
}
</script>
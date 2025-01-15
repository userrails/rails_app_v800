import consumer from "channels/consumer"

consumer.subscriptions.create("NotificationChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
    console.log("Connected to notifications channel!")
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
    console.log("Disconnected from notifications channel!")
  },

  received(data) {
    console.log("Received notification:", data)
    if (data.message) {
      this.showToast(data.message, data.type || 'default')
    }
  },

  showToast(message, type = 'default') {
    const container = document.getElementById('toast-container')
    if (!container) return

    const toast = document.createElement('div')
    toast.className = `toast ${type}`
    toast.textContent = message
    
    container.appendChild(toast)

    // Remove the notification after 6 seconds
    setTimeout(() => {
      toast.classList.add('fade-out')
      setTimeout(() => {
        toast.remove()
      }, 600)
    }, 5000)
  }
});

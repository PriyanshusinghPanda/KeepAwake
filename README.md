# 🟢 KeepAwake

**KeepAwake** is a simple tool designed to prevent your web service from going to sleep due to inactivity.  
It works by sending periodic HTTP requests (pings) to your app’s endpoint (such as `/healthz`),  
keeping it active and ready to respond instantly.

This is especially useful for services hosted on free tiers  
(like Render, Railway, or Heroku), where idle apps are put to sleep after a period of inactivity.  
With **KeepAwake**, your service stays online, ensuring fast response times and uninterrupted availability.

---

## ✨ Key Features

- 🔄 **Automatic Pings** – Sends requests at regular intervals  
- ⚙️ **Configurable** – Choose your own endpoints and ping frequency  
- 🚀 **Always Ready** – Prevents slow cold starts  
- 🌐 **Universal** – Works with any publicly accessible web app or API  

---

## 🎯 Ideal For

- 👨‍💻 Developers running side projects on free hosting tiers  
- 🌐 Small web apps that need to stay online 24/7  
- 🔗 APIs that shouldn’t go idle between requests  
- 📈 Simple uptime monitoring solutions  

---

> **Keep your service alive — with KeepAwake!**

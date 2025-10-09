# 📱 Hero app io - React Application

A modern, responsive **React-based App Store showcase** built using **HTML, Tailwind CSS, DaisyUI, Recharts, Axios, React Router, and SweetAlert2 (SweetTwis JS)**.  
This project demonstrates clean UI design, data visualization, state management, and localStorage-based app installation functionality.

---

## 🚀 Technologies Used

- **HTML5**
- **Tailwind CSS** & **DaisyUI**
- **React.js** (with React Router)
- **Axios**
- **Recharts**
- **SweetAlert2 (SweetTwis)**
- **LocalStorage**

---

## 🧭 Project Structure & Functionality

### 🧩 Header
- Includes a **logo** (clicking navigates to the Home page).  
- A **navigation bar** with active route indication:  
  `[ Home | Apps | Installation ]`
- A **"Contribution" button** linking to my GitHub profile.

---

### 🦶 Footer
- A **custom footer** designed creatively using Tailwind and DaisyUI components.

---
🏠 Home Page
🎯 Banner

Center-aligned heading, text, and two buttons:

🛒 “App Store” → redirects to App Store

▶ “Play Store” → redirects to Play Store

📊 States Section

Displays three cards (statistics) based on Figma design.

⭐ Top Apps Section

Shows 8 apps in a 4-column layout.

Each card includes:

App title

Image

Download count

Average rating

Clicking a card navigates to App Details Page.

Includes a “Show All” button → navigates to All Apps Page.

📱 All Apps Page
Title & Search Section

Displays a page title and subtitle.

Left side: total app count

Right side: live search bar

Filters apps by title (case-insensitive)

If no app matches → shows “No App Found” message

App Section

Displays all apps from JSON data.

Each app card includes title, image, downloads & rating.

Clicking navigates to the App Details Page.

📊 App Details Page
App Information

Left side: App image

Right side: App details (title, rating, downloads, reviews)

Install Button:

When clicked → becomes disabled & text changes to “Installed”

Shows success toast via SweetTwis

Review Chart

Interactive chart built with Recharts

Displays ratings data visually

Description

App description displayed following the Figma layout.

⚙️ Challenge & Bonus Features
🧩 LocalStorage Features
App Installation

Clicking Install:

Saves app info to localStorage

If already installed → button stays disabled with text “Installed”

My Installation Page

Displays all installed apps as cards.

Includes Uninstall button:

Removes app from UI and localStorage.

Shows toast message confirming uninstall.

Sort by Downloads

Dropdown with two options:

High–Low: Sort by descending downloads

Low–High: Sort by ascending downloads

🧭 Navigation & Error Handling

Custom Error Page for invalid routes.

Loading animations during:

Page navigation

Search operations

Not Found message for invalid app details route.

Supports reload on any route after deployment (no crash).

🎉 Features Summary

✅ Responsive design (Tailwind + DaisyUI)
✅ Recharts data visualization
✅ SweetTwis toasts & alerts
✅ LocalStorage app installation system
✅ Dynamic search & sorting
✅ Custom error and loading states

🧑‍💻 Author

Developed by: MD perbej Bhuiyan Akib


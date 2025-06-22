# React + Vite

# 🚀 Two-Step User Registration Form

A responsive, multi-step user registration form built with **React** and **Tailwind CSS**, showcasing key front-end development skills including state management, client-side validation, and API integration. This project provides a smooth and intuitive user experience across all devices.

---

## 📌 Features

### 🧩 Two Distinct Steps

**Step 1: Personal Information**
- ✅ Full Name (Required)
- ✅ Email (Required, must be valid)
- ✅ Phone Number (Optional)

**Step 2: Security Information**
- 🔒 Password (Required, min 6 characters)
- 🔒 Confirm Password (Must match Password)

---

### 🔁 Navigation & Controls
- Step indicator/progress bar to track progress
- "Next" button (Step 1) – disabled until validations pass
- "Back" button (Step 2) to return to Step 1
- "Submit" button replaces "Next" in Step 2

---

### ✅ Client-Side Validation
- Required field checks
- Email format validation
- Password length and match validation
- Inline error messages
- Visual highlighting for invalid fields

---

### 🔗 API Integration
- Submits data to backend: `POST /api/register`
- Uses **Fetch API** for asynchronous requests
- Simulates reading the base API URL from `.env` file

---

### 🎯 User Feedback
- Loading indicator during submission
- Success and error messages after API response

---

### 📱 Responsive Design
- Styled with **Tailwind CSS** for a clean and mobile-friendly layout

---

## 🛠️ Technologies Used

- **React** – Frontend library
- **Tailwind CSS** – Utility-first CSS framework
- **JavaScript (ES6+)** – Core scripting
- **Fetch API** – For HTTP requests
- **React Context API** – For global state management

---

## 📁 Project Structure
```
├── public/                 # Static assets
├── src/
│   ├── api/                # API functions (e.g., registerUser)
│   ├── components/         # Reusable UI components (InputField, StepIndicator)
│   ├── context/            # Global state via React Context (FormContext)
│   ├── pages/              # Page components (PersonalInformation, Security)
│   ├── service/            # Service layer (API interaction logic or helpers)
│   ├── utils/              # Validation and helper functions
│   ├── App.jsx             # Main app component
│   └── index.js            # React entry point
├── .env                    # Environment variables
├── package.json            # Project metadata and dependencies
└── README.md               # Project overview and instructions
```
## ⚙️ How to Run Locally

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

2️⃣ Install Dependencies
```
npm install
# or
yarn install
```
3️⃣ Configuration: .env File
```
//dummy one thare is
REACT_APP_API_BASE_URL=https://your-api-base.com
```
4️⃣ Start the App
```
npm run dev
# or
yarn run dev
```

# App will open at :
```
http://localhost:3000
```



 

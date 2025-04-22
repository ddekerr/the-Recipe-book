# 🍽️ Recipe App — Fullstack (Next.js + NestJS)

This project is a fullstack application with a **Next.js frontend** and a **NestJS backend**. It allows users to view a list of recipes with optional filters and see detailed information about a single recipe.

---

## 📁 Project Structure

```
/frontend   - Next.js (App Router)
/backend    - NestJS
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/recipe-app.git
cd recipe-app
```

---

## 🛠️ Backend Setup (NestJS)

### Navigate to the backend folder

```bash
cd backend
```

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run start:dev
```

### API Endpoints

#### ✅ Get list of recipes

- **GET** `/api/recipes`
- Supports optional query parameters:
  - `ingredient` — filter by ingredient
  - `country` — filter by country/area
  - `category` — filter by recipe category

**Example:**
```
GET /api/recipes?ingredient=chicken&country=Italy&category=Main
```

#### ✅ Get a single recipe by ID

- **GET** `/api/recipes/:id`

**Example:**
```
GET /api/recipes/53060
```

---

## 💻 Frontend Setup (Next.js)

### Navigate to the frontend folder

```bash
cd ../frontend
```

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

---

## 🌐 Environment Configuration

Make sure your **NestJS backend** is running on `http://localhost:5001` (or update the base URL in the frontend fetch/axios methods).

If you are using external images (e.g. from [themealdb.com](https://www.themealdb.com)), add this to `next.config.js`:

```js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.themealdb.com',
      },
    ],
  },
};
```

---

## 📦 Build (optional)

### Backend

```bash
npm run build
```

### Frontend

```bash
npm run build
```

Then run:

```bash
npm start
```

---

## 📫 Contact

Feel free to reach out if you have any questions or issues!

# 🍽 Recipe App — Fullstack (Next.js + NestJS)

This project is a fullstack application with a **Next.js frontend** and a **NestJS backend**. It allows users to view a list of recipes with optional filters and see detailed information about a single recipe.

---

## 📁 Project Structure

```
/front   - Next.js (App Router)
/back    - NestJS
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/the-Recipe-book.git
cd the-Recipe-book
```

---

## 🛠 Backend Setup (NestJS)

### Navigate to the backend folder

```bash
cd backend
```

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run start:dev
```

### API Endpoints

#### ✅ Get list of recipes

- **GET** `/api/recipes`
- Supports optional query parameters:
  - `ingredient` — filter by ingredient
  - `country` — filter by country/area
  - `category` — filter by recipe category

**Example:**
```
GET /api/recipes?ingredient=chicken&country=Italy&category=Main
```

#### ✅ Get a single recipe by ID

- **GET** `/api/recipes/:id`

**Example:**
```
GET /api/recipes/53060
```

---

## 💻 Frontend Setup (Next.js)

### Navigate to the frontend folder

```bash
cd ../frontend
```

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

---

## 🌐 Environment Configuration

Make sure your **NestJS backend** is running on `http://localhost:5001` (or update the base URL in the frontend fetch/axios methods).

If you are using external images (e.g. from [themealdb.com](https://www.themealdb.com)), add this to `next.config.js`:

```js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.themealdb.com',
      },
    ],
  },
};
```

---

## 📦 Build (optional)

### Backend

```bash
npm run build
```

### Frontend

```bash
npm run build
```

Then run:

```bash
npm start
```

---

## 📫 Contact

Feel free to reach out if you have any questions or issues!

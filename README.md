# pagination.js — Simple JavaScript Pagination System

`pagination.js` is a lightweight JavaScript module that helps you add client-side pagination to lists, tables, cards, API data, or any dataset.
It works with plain JavaScript — no frameworks required.

---

## 🚀 Features

* Easy to integrate into any HTML/JS project
* Supports any data array (JSON, API results, static data, etc.)
* Customizable items per page
* Previous / Next page navigation
* Page number buttons
* Clean and simple pagination logic
* Works in both browser and Node.js environments

---

## 📁 File Structure

```
pagination.js      # Main JavaScript pagination logic
index.html         # (Optional) Demo UI using pagination.js
data.json          # (Optional) Dataset to paginate
```

---

## 🧠 How It Works

The script accepts:

* an **array of items**
* the **current page number**
* **items per page**

And returns:

* items to display on the current page
* total pages
* next & previous page indicators

---

## 🧩 Example Usage

### **1. Basic Pagination Logic**

```javascript
import paginate from "./pagination.js";

const items = [1,2,3,4,5,6,7,8,9,10];
const currentPage = 1;
const limit = 3;

const result = paginate(items, currentPage, limit);

console.log(result);
```

### **Output Example**

```js
{
  page: 1,
  totalPages: 4,
  data: [1,2,3],
  hasNext: true,
  hasPrev: false
}
```

---

## 📘 Example Function (inside pagination.js)

```javascript
function paginate(items, page = 1, limit = 5) {
  const start = (page - 1) * limit;
  const end = start + limit;

  const data = items.slice(start, end);

  return {
    page,
    totalPages: Math.ceil(items.length / limit),
    data,
    hasNext: page * limit < items.length,
    hasPrev: page > 1
  };
}

export default paginate;
```

---

## 🖥️ Frontend Integration (HTML Example)

```html
<button onclick="prevPage()">Prev</button>
<span id="pageNumber"></span>
<button onclick="nextPage()">Next</button>

<div id="content"></div>

<script src="pagination.js"></script>
```

---

## 🎯 Use Cases

* Blogs / articles list
* Product listing
* Admin dashboards
* Tables & reports
* Search result pagination
* Paginating API responses

---

## 🌐 Future Enhancements (Optional)

* Add page number buttons UI
* Add “Go to Page” input
* Add infinite scrolling mode
* Add support for server-side pagination

---



Created by **gautam050**
Feel free to modify or extend this script.

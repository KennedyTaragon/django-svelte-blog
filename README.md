# Django + Svelte Blog

A fullstack blog application built with **Django REST Framework** for the backend and **Svelte** for the frontend.  
The project demonstrates API-driven architecture, CRUD functionality, and clean separation between backend and frontend.

---

## 🧱 Project Structure

.
├── backend
│   ├── blog_system
│   │   ├── asgi.py
│   │   ├── __init__.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   ├── db.sqlite3
│   ├── manage.py
│   ├── posts
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── __init__.py
│   │   ├── models.py
│   │   ├── permissions.py
│   │   ├── serializers.py
│   │   ├── tests.py
│   │   ├── urls.py
│   │   └── views.py
│   ├── requirements.txt
│   └── start.sh
└── frontend
    ├── package.json
    ├── package-lock.json
    ├── README.md
    ├── rollup.config.js
    ├── scripts
    │   └── setupTypeScript.js
    └── src
        ├── App.svelte
        └── main.js 


---

## ⚙️ Backend (Django)

### Setup
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

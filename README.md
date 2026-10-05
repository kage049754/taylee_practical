# Taylee Team Directory

A React + Vite + Tailwind CSS team directory app built for the laboratory activity. It uses React Router, reusable components, local user data, search, favorites, loading/error states, user details, and dark/light mode.

## Pages

- `/` — Home
- `/users` — Users list with search and favorites
- `/users/:id` — User Details
- `/about` — About
- `*` — 404 Not Found

## Run locally

```bash
npm install
npm run dev
```

## Build and lint

```bash
npm run build
npm run lint
```


## Assignment Checklist

1. GitHub repository, clear commit history, and README
2. React Router routes: Home, Users, User Details, About, and 404
3. Navbar with active NavLink styling
4. Reusable Button component with props and children
5. Reusable UserCard with user props and details link
6. User cards rendered with map() and stable keys
7. Loading state with a one-second useEffect timeout and no-user message
8. Controlled name search using useState
9. Favorites stored in state and counted in the Navbar
10. Dark Mode / Light Mode using useState
11. User Details uses useParams and useEffect
12. Dynamic document.title for Users and User Details

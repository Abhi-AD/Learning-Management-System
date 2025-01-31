export const NavbarsLink = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Course",
    link: "/course",
  },
  {
    id: 3,
    name: "Teacher",
    link: "/teacher",
  },
  {
    id: 4,
    name: "About",
    link: "/about",
  },
  {
    id: 5,
    name: "Account",
    dropdown: [
      { id: 51, name: "Login", link: "/login" },
      { id: 52, name: "Register", link: "/register" },
      { id: 53, name: "Something else here", link: "/register" },
      { id: 54, name: "Dashboard", link: "/user-dashboard" },
      { id: 54, name: "Logout", link: "/logout" },
    ],
  },
];

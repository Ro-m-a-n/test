export const scrollToLoginForm = () => {
  const loginForm = document.getElementById("login-form");
  loginForm.scrollIntoView({ behavior: "smooth" });
};
export const scrollToUsers = () => {
  const usersPage = document.getElementById("users-page");
  usersPage.scrollIntoView({ behavior: "smooth" });
};

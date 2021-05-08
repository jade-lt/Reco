let headerOptions = {
  "Content-Type": "application/json",
  token: window.localStorage.getItem("token"),
};

export function updateHeaderOptions() {
  console.log("updating token for API requests"); //called on login

  headerOptions = {
    "Content-Type": "application/json",
    token: window.localStorage.getItem("token"),
  };
}

export async function login(userDetails) {
  const result = await fetch("/api/users/login", {
    method: "POST",
    body: JSON.stringify(userDetails),
    headers: headerOptions,
  });

  return result.headers.get("token");
}

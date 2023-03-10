import { json, redirect } from "react-router-dom";

import AuthForm from "../components/AuthForm";

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export const action = async ({ request }) => {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";

  if (mode !== "login" && mode !== "signup") {
    //  In the end I changed Logic on AuthForm, so now I think this is check IS NEVER true, because you can not submit form
    //    if mode is not in this 2 states. I will still leave this if check, mb smth will change in future.

    // throw json({ message: "Unsuported mode." }, { status: 500 });
    return redirect('/auth?mode=loginE')
  }

  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = await fetch("http://localhost:8080/" + mode, {
    method: "POST",
    headers: { "Content-Type": "application/json", },
    body: JSON.stringify(authData),
  });


  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Couldn`t authenticate user" }, { status: 500 });
  }

  const respData = await response.json()
  const token = respData.token

  localStorage.setItem('token', token)
  const expiration = new Date()
  expiration.setHours(expiration.getHours() + 1)
  localStorage.setItem('expiration', expiration.toISOString())

  return redirect("/");
};

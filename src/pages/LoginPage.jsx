import { useState } from "react";
import axios from "axios";
import { Button, Card, Label, TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState("");
  const navigate = useNavigate();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setNotification("");

    axios
      .post("https://reqres.in/api/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        const token = response.data.token;
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Token received:", token);
        localStorage.setItem("token", token);
        navigate("/quiz");
      })
      .catch((error) => {
        setNotification("Invalid email or password");
        console.log(error);
      });

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100">
      <Card className="max-w-sm w-full mx-auto">
        <h1 className="text-3xl font-bold mx-auto">Login</h1>
        <form className="flex flex-col gap-4">
          <div>
            {!!notification.length && (
              <p className="text-red-500 text-center">{notification}</p>
            )}
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="my@email.com"
              onChange={handleEmail}
              value={email}
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Password" />
            </div>
            <TextInput
              id="password1"
              type="password"
              onChange={handlePassword}
              value={password}
              required
            />
          </div>
          <Button type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </form>
      </Card>
    </div>
  );
}

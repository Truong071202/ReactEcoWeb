import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const API_REGISTER = "https://reqres.in/api/register";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(API_REGISTER, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Kiểm tra dữ liệu từ response để đảm bảo đăng ký thành công
        if (data.error) {
          toast.error("Registration failed. " + data.error);
        } else {
          toast.success("Registration successful!");
          navigate("/");
        }
      } else {
        // Hiển thị thông báo lỗi nếu response không thành công
        toast.error("Registration failed. Please try again.");
      }

      console.log("Registration response:", data);
    } catch (error) {
      console.error("Error registering:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <section className="section-login-form">
      <div className="container">
        <Form className="custom-login-form mt-5" onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default Login;

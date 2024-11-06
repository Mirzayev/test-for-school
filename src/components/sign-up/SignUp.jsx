import { Form, Input, Button } from "antd";
import { useState } from "react";

const SignUp = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("")

  const Rigester = () => {
    setIsAuthenticated(true);
  };

  const [data, setData] = useState("");

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-green-600 to-blue-600">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
        <Form name="register" layout="vertical">
          <Form.Item name="Username" label="Username" rules={[{ required: true }]}>
            <Input placeholder="Enter your name" onChange={(e) =>  setUserName(e.target.value)} />
          </Form.Item>
          {/* <Form.Item name="email" label="Email" rules={[{ required: true, type: 'Email' }]} >
                        <Input placeholder="Enter your email" />
                    </Form.Item> */}
          <Form.Item
            name="Password"
            label="Password"
            rules={[{ required: true }]}
          >
            <Input.Password
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </Form.Item>
          <Form.Item>
            <Button
              onClick={Rigester}
              type="primary"
              htmlType="submit"
              className="w-full"
            >
              Register
            </Button>
          </Form.Item>
          <Form.Item className={"flex justify-center text-center "}>
            <h4 className={""}>
              Lorem ipsum dolor sit amet,{" "}
              <a
                href=""
                className={"font-bold text-[16px] text-blue-400 font-mono"}
              >
                Sign in{" "}
              </a>{" "}
              consectetur adipisicing elit.
            </h4>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;

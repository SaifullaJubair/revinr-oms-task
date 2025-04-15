import Login from "@/pages/auth/login/Login";

export const metadata = {
  title: "SignIn",
  description: "Login to your MyApp account",
};

const SignInPage = () => {
  return (
    <div className=" min-h-screen">
      <Login />
    </div>
  );
};

export default SignInPage;

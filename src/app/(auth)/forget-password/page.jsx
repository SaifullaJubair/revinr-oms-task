import ForgetPassword from "@/pages/auth/forgetPassword/ForgetPassword";
export const metadata = {
  title: "Forgot Password",
  description: "Recover your account by resetting your password.",
};
const ForgetPasswordPage = () => {
  return (
    <div>
      <ForgetPassword />
    </div>
  );
};

export default ForgetPasswordPage;

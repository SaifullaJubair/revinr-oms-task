import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { Slide, ToastContainer } from "react-toastify";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToastContainer
          position="bottom-right"
          autoClose={1500}
          transition={Slide}
          closeOnClick
        />
        {children}
      </body>
    </html>
  );
}

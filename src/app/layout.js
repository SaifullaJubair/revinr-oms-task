import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { Slide, ToastContainer } from "react-toastify";
import { pt_sans_caption } from "@/utils/font";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={pt_sans_caption?.className}>
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

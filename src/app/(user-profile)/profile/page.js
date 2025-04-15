import Profile from "@/pages/profile/Profile";
import React from "react";

export const metadata = {
  title: "Company Profile",
  description: "View and update your company profile information.",
};

const ProfilePage = () => {
  return (
    <div>
      <Profile />
    </div>
  );
};

export default ProfilePage;

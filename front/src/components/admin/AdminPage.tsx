import React, { useEffect, useState } from "react";
import AdminHome from "./AdminHome";
import AdminLogin from "./AdminLogin";
import { AdminService } from "./AdminService";

type Props = {};

const adminService = new AdminService();

const AdminPage = (props: Props) => {
  const [isAdmin, setIsAdmin] = useState<Boolean | undefined>(false);

  useEffect(() => {
    setIsAdmin(adminService.isAdmin());
  }, []);

  return (
    <>
      {!isAdmin && <AdminLogin />}
      {isAdmin && <AdminHome />}
    </>
  );
};

export default AdminPage;

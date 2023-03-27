import { getAllUsers } from "@/api-services/users";
import useHeaders from "@/hooks/useHeaders";
import Layout from "@/layout/default";
import axios from "axios";
import Link from "next/link";
import React, { ReactElement, useEffect, useState } from "react";
import { userType } from "../../types/userType";
import { NextPageWithLayout } from "../_app";

const Users: NextPageWithLayout = () => {
  const [users, setUsers] = useState<userType[]>([]);
  const headers = useHeaders();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllUsers(headers);
        setUsers(result.data.data);
      } catch (e) {
        console.log({ e });
      }
    };
    fetchData();
  }, [headers]);

  return (
    <div className="py-10">
      <table className="table-auto m-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">First Name</th>
            <th className="px-4 py-2">Last Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Username</th>
            <th className="px-4 py-2">Phone Number</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border px-4 py-2">{user.id}</td>
              <td className="border px-4 py-2">{user.firstName}</td>
              <td className="border px-4 py-2">{user.lastName}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.username}</td>
              <td className="border px-4 py-2">{user.phoneNumber}</td>
              <td className="border px-4 py-2">
                <Link
                  href={`/users/${user.id}`}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div> */}
    </div>
  );
};

Users.getLayout = function getLayout(page: ReactElement) {
  return <Layout tabActive="List Users">{page}</Layout>;
};

export default Users;

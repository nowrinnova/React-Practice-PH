import { useLoaderData } from "react-router-dom";
import User from "./User";

export default function Users() {
  const users = useLoaderData();
  console.log(users);
  return (
    <>
      <h2 className="text-xl font-bold text-center p-10">
        users{users.length}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 p-10 justify-center items-center">
        {users.map((user, index) => (
          <User key={index} user={user}></User>
        ))}
      </div>
    </>
  );
}

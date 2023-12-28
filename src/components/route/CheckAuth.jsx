import { userRole } from "../../store";

// eslint-disable-next-line react/prop-types
export default function CheckAuth({ role, childern }) {
  console.log(role);
  console.log(userRole);

  // eslint-disable-next-line react/prop-types
  return role.some((el) => el === userRole) ? childern : <h1>Not Found</h1>;
}

import { createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import { RouterProvider } from "react-router-dom";
import Browse from "./Browse";

export function Body() {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/browse", element: <Browse /> },
  ]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}
export default Body;

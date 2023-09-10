import { createBrowserRouter } from "react-router-dom";
import Browse from "./browse";
import Header from "./header";
import Login from "./login";
import { RouterProvider } from "react-router-dom";
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

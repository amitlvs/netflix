import { createBrowserRouter } from "react-router-dom";
import Browse from "./browse";
import Login from "./login";
import { RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";

export function Body() {
  const dispatch = useDispatch();
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

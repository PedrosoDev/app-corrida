import { Toaster } from "react-hot-toast";
import { QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";
import reactQuery from "./lib/react-query";
import routes from "./routes";

export default function App() {
  return (
    <>
      <QueryClientProvider client={reactQuery}>
        <RouterProvider router={routes} />
        <Toaster />
      </QueryClientProvider>
    </>
  );
}

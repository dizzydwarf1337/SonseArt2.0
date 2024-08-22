import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import ProductDashboard from "../../features/Products/Dashboard/productDashBoard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: '/products', element: <ProductDashboard /> },
        ]
    },
]);




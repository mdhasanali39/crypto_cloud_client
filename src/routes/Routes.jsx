import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PaymentSuccess from "../pages/pamentSuccess/PaymentSuccess";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <div>Erroooooooooooooooooooooooor</div>,
		children: [
			{
				path: "/payment-success",
				element: <PaymentSuccess />,
			},
		],
	},
]);

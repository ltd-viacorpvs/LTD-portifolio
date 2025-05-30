import { useloginModel } from "./login.model";
import { LoginView } from "./login.view";

export const login = () => {
	const props = useloginModel();
  return (
	<LoginView {...props} />
  );
};
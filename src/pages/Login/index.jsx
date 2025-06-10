import { LoginForm } from "../../components/LoginForm";
import { Logo } from "../../components/Logo";
import backgroundImg from "../../assets/background-login.png";

export const Login = () => {
  return (
    <div className="min-h-screen w-full flex bg-gray-900">
      <div className="w-[40%] bg-white overflow-hidden">
        <img
          src={backgroundImg}
          alt="Gloves"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="w-[60%] bg-white flex flex-col justify-center items-center p-[140px]">
        <div className="w-full mb-6">
            <Logo height={"100"} width={"auto"} />
        </div>
        <div className="w-full mt-6">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

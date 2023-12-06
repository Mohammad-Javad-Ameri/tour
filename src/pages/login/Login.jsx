import React, { useEffect } from "react";
import LoginLayout from "./loginLayout";
// import OtherWaysButton from "../signup/otherWaysButton";
// import SignUpSubmit from "../signup/signUpSubmit";
import NameOrEmailField from "./nameOrEmailField";
import LoginPasswordField from "./loginPasswordField";
// import OtherWaysLink from "../changeProfile/common/otherWaysLink";
import authApi from "../../services/authApi";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  //calling useLoginUserMutation hook
    const [loginUser, { isLoading, isSuccess, error, isError }] =
    authApi.useLoginUserMutation();

  const navigate = useNavigate();

  const {
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful, errors },
    register,
  } = useForm();

  //perform login action and send the data
  const onSubmitHandler = (data) => {
    loginUser({ ...data });
  };

  // if the request is successful navigate to homePage
  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }

    if (isError) {
      console.log(error.data.errors);
    }
  }, [isLoading]);

  // if the request is sent , reset the form
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);

  return (
    <>
      <LoginLayout>
        <div className="pt-4">
          <div className="text-center">
            <h3 className="text-center text-white text-[35px] font-black mb-3">
              ورود
            </h3>
            <p className="text-center text-[#ccc] text-xs font-semibold">
              خوش برگشتی.دلمون برات تنگ شده بود!
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmitHandler)}
            className=" mt-10 self-center px-9  flex-col flex justify-center"
          >
            <NameOrEmailField errors={errors} register={register} />

            <LoginPasswordField errors={errors} register={register} />

            {isError && (
              <div className="text-xs mt-2 text-center text-gray-300">
                {error.data.errors[0].description}
              </div>
            )}
            {isSuccess && (
              <div className="text-xs mt-2 text-center text-gray-300">
                موفق شدید
              </div>
            )}
            {/* <SignUpSubmit loading={isLoading}>ورود</SignUpSubmit>

            <OtherWaysButton>راه های دیگر ورود</OtherWaysButton>
            <OtherWaysLink text={"ورود با شماره "} toPath={"#"} /> */}
          </form>
        </div>
      </LoginLayout>
    </>
  );
};

export default Login;

import React, { useEffect } from "react";
import SignupLayout from "./signupLayout";
import EmailField from "./emailField";
import UserNameField from "./usenameField";
import PasswordField from "./passwordField";
import SignUpSubmit from "./signUpSubmit";
import OtherWaysButton from "./otherWaysButton";
import { useNavigate } from "react-router-dom";
import authApi from "../../services/authApi";
import { useForm } from "react-hook-form";
const Signup = () => {
  //calling useRegisterUserMutation hook
  const [registerUser, { isLoading, isSuccess, error, isError }] =
    authApi.useRegisterUserMutation();
  const navigate = useNavigate();

  //calling useForm hook and getting the methods needed
  const {
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful, errors },
    register,
  } = useForm();
console.log(register);
  //perform signup action and send the data
  const onSubmitHandler = (data) => {
    registerUser({ ...data, confirmPassword: data.password });
  };

  //if the request is successful navigate to homePage
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
    <SignupLayout>
      <div className="pt-2">
        <div className="text-center">
          <h3 className="text-center text-white text-[35px] font-black mb-3">
            ثبت نام
          </h3>
          <p className="text-center text-[#ccc] text-xs font-semibold">
            با این اپ کاشف کشور خودت باش!
          </p>
        </div>
        <form
          noValidate
          onSubmit={handleSubmit(onSubmitHandler)}
          className=" mt-8 self-center px-9 flex-col flex justify-center"
        >
          {isSuccess && <div className="text-lg text-center">موفق شدید</div>}
          <EmailField register={register} errors={errors} />

          <UserNameField register={register} errors={errors} />

          <PasswordField register={register} errors={errors} />

          {isError && (
            <div className="text-xs mt-2 text-center text-gray-300">
              {error.data.errors[0].description}
            </div>
          )}
          <SignUpSubmit loading={isLoading}>ثبت نام</SignUpSubmit>

          <OtherWaysButton>راه های دیگر ثبت نام</OtherWaysButton>
          {/* <OtherWaysLink text={"ثبت نام با شماره"} toPath={"#"} /> */}
        </form>
      </div>
    </SignupLayout>
  );
};

export default Signup;
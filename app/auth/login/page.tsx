"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthSignInRequestDto } from "@/types/auth.types";
import Form from "@/components/shared/Form";
import Link from "next/link";
import { toast } from "react-toastify";
import getErrorMessageFromQuery from "@/utils/getErrorMessageFromQuery";
import { useDispatch } from "react-redux";
import { removeUser, setUser } from "@/store/slices";
import { useRouter } from "next/navigation";
import useAuthSignIn from "@/hooks/queryHooks/useAuthSignIn";
import { deleteCookie, setCookie } from "cookies-next";

type AuthSignInFormFields = AuthSignInRequestDto;

const LoginPage: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const methods = useForm({
    mode: "onChange",
  });

  const [formData, setFormData] = useState<AuthSignInFormFields>({
    username: "",
    password: "",
  });

  const AuthSignInMutation = useAuthSignIn();

  useEffect(() => {
    dispatch(removeUser());
    deleteCookie("iconic-fe-token");
  }, [dispatch]);

  useEffect(() => {
    if (AuthSignInMutation.isSuccess && AuthSignInMutation.data) {
      dispatch(setUser(AuthSignInMutation.data.payload));
      setCookie("iconic-fe-token", AuthSignInMutation.data.payload.accessToken);
      router.push("/");
    } else if (AuthSignInMutation.isError) {
      toast.error(getErrorMessageFromQuery(AuthSignInMutation.error));
    }
  }, [
    router,
    dispatch,
    AuthSignInMutation.isSuccess,
    AuthSignInMutation.data,
    AuthSignInMutation.isError,
    AuthSignInMutation.error,
  ]);

  const handleSubmit = () => {
    AuthSignInMutation.mutate(formData);
  };

  return (
    <div
      className={"w-full flex-col my-24 gap-8 flex justify-center items-center"}
    >
      <h2 className={"font-bold text-3xl"}>Sign In</h2>
      <Form
        className={"w-full flex max-w-lg flex-col"}
        methods={methods}
        onSubmit={handleSubmit}
      >
        <Form.TextField<AuthSignInFormFields>
          required
          label={"Username"}
          name={"username"}
          value={formData.username}
          placeholder="Enter username"
          onFieldChange={(value) => {
            setFormData((oldState) => ({
              ...oldState,
              username: value,
            }));
          }}
          rules={{
            required: {
              value: true,
              message: "Username is required",
            },
          }}
        />

        <Form.TextField<AuthSignInFormFields>
          required
          type={"password"}
          label={"Password"}
          name={"password"}
          value={formData.password}
          placeholder="Enter password"
          onFieldChange={(value) => {
            setFormData((oldState) => ({
              ...oldState,
              password: value,
            }));
          }}
          rules={{
            required: {
              value: true,
              message: "Password is required",
            },
          }}
        />

        <div className={"w-full flex flex-col mt-5"}>
          <Form.SubmitButton>Sign In</Form.SubmitButton>
          <div className={"w-full text-sm flex items-center justify-end"}>
            <span>Don&apos;t have an account?</span>
            <Link className={"btn btn-link"} href={"/auth/signup"}>
              Sign Up
            </Link>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default LoginPage;

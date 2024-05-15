"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthSignUpRequestDto } from "@/types/auth.types";
import Form from "@/components/shared/Form";
import Link from "next/link";
import useAuthSignUp from "@/hooks/queryHooks/useAuthSignUp";
import { toast } from "react-toastify";
import getErrorMessageFromQuery from "@/utils/getErrorMessageFromQuery";
import WelcomeModal from "@/components/auth/WelcomeModal";
import { useDispatch } from "react-redux";
import { removeUser, setUser } from "@/store/slices";
import { deleteCookie, setCookie } from "cookies-next";

type AuthSignUpFormFields = AuthSignUpRequestDto;

const SignUpPage: React.FC = () => {
  const dispatch = useDispatch();
  const methods = useForm({
    mode: "onChange",
  });

  const [formData, setFormData] = useState<AuthSignUpFormFields>({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    phone: "",
    address: "",
  });

  const [modalOpen, setModalOpen] = useState(false);

  const AuthSignUpMutation = useAuthSignUp();

  useEffect(() => {
    dispatch(removeUser());
    deleteCookie("iconic-fe-token");
  }, [dispatch]);

  useEffect(() => {
    if (AuthSignUpMutation.isSuccess && AuthSignUpMutation.data) {
      setModalOpen(true);
      setCookie("iconic-fe-token", AuthSignUpMutation.data.payload.accessToken);
      dispatch(setUser(AuthSignUpMutation.data.payload));
    } else if (AuthSignUpMutation.isError) {
      toast.error(getErrorMessageFromQuery(AuthSignUpMutation.error));
    }
  }, [
    dispatch,
    AuthSignUpMutation.isSuccess,
    AuthSignUpMutation.data,
    AuthSignUpMutation.isError,
    AuthSignUpMutation.error,
  ]);

  const handleSubmit = () => {
    AuthSignUpMutation.mutate(formData);
  };

  return (
    <div
      className={"w-full flex-col my-16 gap-8 flex justify-center items-center"}
    >
      <h2 className={"font-bold text-3xl"}>Sign Up</h2>
      <Form
        className={"w-full flex max-w-lg flex-col"}
        methods={methods}
        onSubmit={handleSubmit}
      >
        <Form.TextField<AuthSignUpFormFields>
          required
          label={"Name"}
          name={"name"}
          value={formData.name}
          placeholder="Enter full name"
          onFieldChange={(value) => {
            setFormData((oldState) => ({
              ...oldState,
              name: value,
            }));
          }}
          rules={{
            required: {
              value: true,
              message: "Name is required",
            },
          }}
        />

        <Form.TextField<AuthSignUpFormFields>
          required
          label={"Email"}
          name={"email"}
          value={formData.email}
          placeholder="Enter email address"
          onFieldChange={(value) => {
            setFormData((oldState) => ({
              ...oldState,
              email: value,
            }));
          }}
          rules={{
            required: {
              value: true,
              message: "Email is required",
            },
          }}
        />

        <Form.TextField<AuthSignUpFormFields>
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

        <Form.TextField<AuthSignUpFormFields>
          required
          type={"password"}
          label={"Confirm Password"}
          name={"passwordConfirm"}
          value={formData.passwordConfirm}
          placeholder="Enter password again"
          onFieldChange={(value) => {
            setFormData((oldState) => ({
              ...oldState,
              passwordConfirm: value,
            }));
          }}
          rules={{
            required: {
              value: true,
              message: "Confirm password is required",
            },
          }}
        />

        <Form.TextField<AuthSignUpFormFields>
          required
          label={"Phone"}
          name={"phone"}
          value={formData.phone}
          placeholder="Enter phone number"
          onFieldChange={(value) => {
            setFormData((oldState) => ({
              ...oldState,
              phone: value,
            }));
          }}
          rules={{
            required: {
              value: true,
              message: "Phone number is required",
            },
          }}
        />

        <Form.TextField<AuthSignUpFormFields>
          required
          rows={3}
          variant={"textarea"}
          className={"py-2"}
          label={"Shipping Address"}
          name={"address"}
          value={formData.address}
          placeholder="Enter your address"
          onFieldChange={(value) => {
            setFormData((oldState) => ({
              ...oldState,
              address: value,
            }));
          }}
          rules={{
            required: {
              value: true,
              message: "Address is required",
            },
          }}
        />

        <div className={"w-full flex flex-col mt-5"}>
          <Form.SubmitButton>Create Account</Form.SubmitButton>
          <div className={"w-full text-sm flex items-center justify-end"}>
            <span>Already have an account?</span>
            <Link className={"btn btn-link"} href={"/auth/login"}>
              Login
            </Link>
          </div>
        </div>
      </Form>
      <WelcomeModal open={modalOpen} setOpen={setModalOpen} />
    </div>
  );
};

export default SignUpPage;

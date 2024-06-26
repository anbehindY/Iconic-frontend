import {
  FieldValues,
  FormProvider,
  RegisterOptions,
  SubmitHandler,
  useController,
  useFormContext,
  UseFormReturn,
} from "react-hook-form";
import mergeClassNames from "@/utils/mergeClassnames";
import React from "react";

type FormProps<T extends FieldValues> = Omit<
  React.HTMLProps<HTMLFormElement>,
  "onSubmit"
> & {
  methods: UseFormReturn<T, any, any>;
  onSubmit: T extends undefined
    ? SubmitHandler<T>
    : T extends FieldValues
    ? SubmitHandler<T>
    : never;
  onFailed?: () => void;
};

type CompoundFormProps<T extends FieldValues> = FormProps<T> & {
  TextField?: React.FC<TextFieldProps<T>>;
  Select?: React.FC<SelectProps<T>>;
  SubmitButton?: React.FC<SubmitButtonProps>;
};

type TextFieldProps<T> = Omit<
  React.HTMLProps<HTMLInputElement | HTMLTextAreaElement>,
  "onChange"
> & {
  name: keyof T;
  wrapperClassName?: string;
  onFieldChange: (value: string) => void;
  label?: string;
  variant?: "input" | "textarea";
  rules?: Omit<
    RegisterOptions<FieldValues, string>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
};

export interface OptionType extends React.HTMLProps<HTMLOptionElement> {
  label: string;
  value: string;
}

type SelectProps<T> = Omit<React.HTMLProps<HTMLSelectElement>, "onChange"> & {
  name: keyof T;
  label?: string;
  value: string;
  wrapperClassname?: string;
  onFieldChange: (value: string) => void;
  rules?: Omit<
    RegisterOptions<FieldValues, string>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
  options: OptionType[];
};

function TextField<T>({
  name,
  label,
  rules,
  className,
  value,
  wrapperClassName,
  onFieldChange,
  required,
  variant = "input",
  ...props
}: TextFieldProps<T>) {
  const { control } = useFormContext();
  const { field, fieldState } = useController({
    name,
    control,
    defaultValue: value,
    rules: !props.readOnly ? rules : undefined,
  });

  return (
    <div className={mergeClassNames("flex flex-col gap-1", wrapperClassName)}>
      {label && (
        <label
          htmlFor={name}
          className={mergeClassNames("mb-[2px] cursor-pointer")}
        >
          {label}
          &nbsp;
          {required && !props.readOnly && <span className="text-error">*</span>}
        </label>
      )}
      {variant === "textarea" ? (
        <textarea
          id={name}
          name={name}
          className={mergeClassNames(
            "textarea textarea-bordered rounded-md textarea-sm text-sm textarea-primary w-full",
            className
          )}
          {...props}
          ref={field.ref}
          value={field.value}
          onChange={(e) => {
            field.onChange(e.target.value);
            onFieldChange(e.target.value);
          }}
        ></textarea>
      ) : (
        <input
          id={name}
          name={name}
          className={mergeClassNames(
            "input input-bordered rounded-md input-sm !h-[40px] input-primary w-full",
            className
          )}
          {...props}
          ref={field.ref}
          value={field.value}
          onChange={(e) => {
            field.onChange(e.target.value);
            onFieldChange(e.target.value);
          }}
        />
      )}
      <div className="mr-1 h-4 mt-[2px]">
        {fieldState.error && (
          <p
            className={mergeClassNames(
              "text-sm text-right text-error leading-4"
            )}
          >
            {fieldState.error.message}
          </p>
        )}
      </div>
    </div>
  );
}

function Select<T>({
  name,
  label,
  rules,
  className,
  onFieldChange,
  placeholder,
  value,
  required,
  options,
  wrapperClassname,
  ...props
}: SelectProps<T>) {
  const { control } = useFormContext();
  const { field, fieldState } = useController({
    name,
    control,
    defaultValue: value,
    rules,
  });

  return (
    <div className={mergeClassNames("flex flex-col gap-1", wrapperClassname)}>
      {label && (
        <label
          htmlFor={name}
          className={mergeClassNames("mb-1 cursor-pointer")}
        >
          {label}
          &nbsp;
          {required && <span className="text-error">*</span>}
        </label>
      )}
      {/*TODO - use  react-select*/}
      <select
        {...props}
        name={name}
        id={name}
        className={mergeClassNames(
          "select select-primary rounded-md select-sm !h-[40px] w-full text-base",
          !field.value || field.value === placeholder ? "text-gray-400" : "",
          className
        )}
        value={field.value || placeholder}
        onChange={(e) => {
          field.onChange(e.target.value);
          onFieldChange(e.target.value);
        }}
      >
        <option disabled value={placeholder}>
          {placeholder}
        </option>
        {options.map(({ value, label, selected, ...props }) => (
          <option {...props} key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      <div className="mr-1 h-4 mt-[2px]">
        {fieldState.error && (
          <p
            className={mergeClassNames(
              "text-sm text-right text-error leading-4"
            )}
          >
            {fieldState.error.message}
          </p>
        )}
      </div>
    </div>
  );
}

interface SubmitButtonProps {
  loading?: boolean;
  className?: React.HTMLProps<HTMLButtonElement>["className"];
  children: React.ReactNode;
  disabled?: boolean;
}

function SubmitButton({
  loading,
  disabled,
  className,
  children,
}: SubmitButtonProps) {
  return (
    <button
      type={"submit"}
      className={mergeClassNames(
        "btn btn-primary btn-sm h-10 rounded-md",
        className
      )}
      disabled={disabled}
    >
      {loading ? (
        <span className="loading loading-dots loading-md"></span>
      ) : (
        children
      )}
    </button>
  );
}

function Form<T extends FieldValues>({
  className,
  onSubmit,
  onFailed = () => {},
  children,
  methods,
}: CompoundFormProps<T>) {
  return (
    <FormProvider {...methods}>
      <form
        className={className}
        onSubmit={methods.handleSubmit(onSubmit, onFailed)}
      >
        {children}
      </form>
    </FormProvider>
  );
}

Form.TextField = TextField;

Form.Select = Select;

Form.SubmitButton = SubmitButton;

export default Form;

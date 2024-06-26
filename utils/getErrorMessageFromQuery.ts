import { GenericError } from "@/components/providers/QueryWrapper";

const getErrorMessageFromQuery = (error: GenericError) => {
  return (
    (typeof error.data?.message === "string"
      ? error.data?.message
      : error.data?.message[0]) || error.message
  );
};

export default getErrorMessageFromQuery;

import { IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Pagination() {
  return (
    <div className="flex items-center justify-center mt-10 sm:justify-start gap-5">
      <IconButton
        size="sm"
        aria-label="prev"
        rounded="full"
        color="#fff"
        bg="primary"
        _hover={{
          bg: "indigo2",
        }}
      >
        <ChevronLeftIcon className="w-5" />
      </IconButton>
      <IconButton
        size="sm"
        aria-label="next"
        rounded="full"
        variant="solid"
        color="#fff"
        bg="primary"
        _hover={{
          bg: "indigo2",
        }}
      >
        <ChevronRightIcon className="w-5" />
      </IconButton>
    </div>
  );
}

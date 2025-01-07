import { useEffect, useCallback } from "react";
import { useDisclosure } from "@chakra-ui/react";

interface Props {
  refSubMenuButton: any;
  refSubMenuList: any;
  isButton?: boolean;
}

function addEL(ref: any, event: any, handler: any) {
  if (ref) ref.addEventListener(event, handler);
}
function remEL(ref: any, event: any, handler: any) {
  if (ref) ref.removeEventListener(event, handler);
}

function useDropdown({
  refSubMenuButton,
  refSubMenuList,
  isButton = false,
}: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const subMenuButtonEnterHandle = useCallback(() => {
    onOpen();
    refSubMenuList.current.style.pointerEvents = "auto";
  }, [onOpen]);
  const subMenuButtonLeaveHandle = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!isButton) {
      if (!isOpen) {
        refSubMenuList.current.style.pointerEvents = "none";
      } else {
      }
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isButton) {
      addEL(refSubMenuButton.current, "mouseenter", subMenuButtonEnterHandle);
      addEL(refSubMenuList.current, "mouseenter", subMenuButtonEnterHandle);
      addEL(refSubMenuButton.current, "mouseleave", subMenuButtonLeaveHandle);
      addEL(refSubMenuList.current, "mouseleave", subMenuButtonLeaveHandle);

      return () => {
        remEL(refSubMenuButton.current, "mouseenter", subMenuButtonEnterHandle);
        remEL(refSubMenuList.current, "mouseenter", subMenuButtonEnterHandle);
        remEL(refSubMenuButton.current, "mouseleave", subMenuButtonLeaveHandle);
        remEL(refSubMenuList.current, "mouseleave", subMenuButtonLeaveHandle);
      };
    }
  }, [subMenuButtonEnterHandle, subMenuButtonLeaveHandle]);

  return {
    isOpen,
    onOpen,
    onClose,
  };
}

export default useDropdown;

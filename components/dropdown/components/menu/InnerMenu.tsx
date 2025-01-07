import React, { useRef } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  useMediaQuery,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { MenuItemSubMenu } from "./../";
import { useDropdown, useRedirect } from "hooks";

interface Props {
  title: string;
  childrenItems: Array<any>;
  sign?: any;
}

const InnerMenu = ({ title, childrenItems, sign }: Props) => {
  const refSubMenuButton = useRef<HTMLButtonElement | any>();
  const refSubMenuList = useRef<HTMLButtonElement | any>();

  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  const { isOpen } = useDropdown({ refSubMenuButton, refSubMenuList });
  const { redirect } = useRedirect();

  return (
    <Menu
      autoSelect={false}
      offset={[0, 0]}
      isOpen={isOpen}
      placement={isLargerThan800 ? "right-start" : "bottom-start"}
    >
      <MenuButton
        ref={refSubMenuButton}
        as={MenuItem}
        zIndex={999}
        _focus={{
          boxShadow: "none",
        }}
        _hover={{
          bg: "blue.50",
        }}
        _expanded={{
          bg: "gray.100",
          // color: "primary",
        }}
        fontSize={14}
      >
        <Box display="flex" justifyContent="space-between">
          {title}
          <ChevronRightIcon className="w-4" />
        </Box>
      </MenuButton>

      <MenuList
        minW={0}
        ref={refSubMenuList}
        zIndex={999}
        _hover={{ zIndex: 1000 }}
        rounded="none"
      >
        {childrenItems.map((item, i) => {
          if (typeof item["label" + sign] === "string") {
            return (
              <MenuItem
                key={i}
                onClick={() => redirect(item.url)}
                fontSize={14}
              >
                {item["label" + sign]}
              </MenuItem>
            );
          }
          return (
            <MenuItemSubMenu key={i}>{item["label" + sign]}</MenuItemSubMenu>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default InnerMenu;

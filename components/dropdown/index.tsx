import React, { useRef } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

import { MenuItemSubMenu, InnerMenu } from "./components";
import { useDropdown, useRedirect } from "hooks";

import { colors } from "utils/theme";

interface Props {
  leftIcon?: any;
  label?: string;
  options?: Array<any>;
  placement?: any;
  color?: string;
  isButton?: boolean;
  sign?: any;
}

function index(props: Props) {
  const {
    leftIcon,
    label = "",
    options = [],
    placement = "bottom-start",
    color = "",
    isButton = false,
    sign,
  } = props;

  const { redirect, lang, onChangeLang } = useRedirect();

  const refSubMenuButton = useRef<HTMLButtonElement | any>();
  const refSubMenuList = useRef<HTMLButtonElement | any>();

  const { isOpen, onClose, onOpen } = useDropdown({
    refSubMenuButton,
    refSubMenuList,
    isButton,
  });

  const buttonStyle = {
    border: isButton ? `1px solid ${color}` : "none",
    paddingLeft: isButton ? 8 : "none",
    paddingRight: isButton ? 8 : "none",
    fontWeight: isButton ? 700 : 500,
  };

  return (
    <Menu
      isOpen={isOpen}
      offset={isButton ? [0, 5] : [0, 0]}
      onClose={onClose}
      placement={placement}
      autoSelect={false}
      closeOnSelect={false}
    >
      <MenuButton
        ref={refSubMenuButton}
        onClick={onOpen}
        _focus={{
          boxShadow: "none",
        }}
        _hover={{
          bg: isButton && "rgba(200,200,200,0.4)",
          color: isButton ? color : colors.warning1,
        }}
        _expanded={{
          color: isButton ? color : colors.warning1,
        }}
        color={color}
        height={isButton ? 35 : 45}
        style={{ ...buttonStyle }}
      >
        <div className={`cursor-pointer flex items-center gap-1 text-[14px]`}>
          {leftIcon}
          {isButton ? lang.toUpperCase() : label}
          {isOpen ? (
            <ChevronUpIcon className="w-4" />
          ) : (
            <ChevronDownIcon className="w-4" />
          )}
        </div>
      </MenuButton>

      <MenuList rounded="none" ref={refSubMenuList}>
        {options.map((item, key) => {
          if (item.isDropdown) {
            return (
              <MenuItemSubMenu key={key} px={0}>
                <InnerMenu
                  title={item["label" + sign]}
                  childrenItems={item.options}
                  sign={sign}
                />
              </MenuItemSubMenu>
            );
          }

          return (
            <MenuItem
              key={key}
              onClick={() => {
                if (isButton) {
                  onChangeLang(item.value);
                  onClose();
                } else {
                  redirect(item.url);
                }
              }}
              fontSize={14}
            >
              {isButton ? item.label : item["label" + sign]}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

export default index;

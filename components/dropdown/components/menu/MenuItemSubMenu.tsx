import { MenuItem } from "@chakra-ui/react";

interface Props {
  children?: React.ReactNode;
  px?: number;
}

const MenuItemSubMenu = (props: Props) => {
  const { children, px } = props;

  return (
    <MenuItem
      boxShadow="0px 2px 0px 0px transparent"
      as="div"
      // _focus={{
      //   boxShadow: "0px 2px 0px 0px #47bae6",
      // }}
      px={px}
      fontSize={14}
      cursor="pointer"
    >
      {children}
    </MenuItem>
  );
};

export default MenuItemSubMenu;

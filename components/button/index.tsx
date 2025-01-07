import { Button } from "@chakra-ui/react";
import { colors } from "utils/theme";
interface Props {
  classname?: string
  type?: any;
  label?: any;
  variant?: string;
  rightIcon?: any;
  onClick?: any;
  style?: object;
}

function ButtonComponent(props: Props) {
  const {
    classname = "",
    type = "button",
    label,
    variant = "solid",
    rightIcon,
    onClick = () => {},
    style = {},
  } = props;

  const { primary } = colors;

  return (
    <Button
    className={classname}
      type={type}
      onClick={onClick}
      style={style}
      bg={variant === "solid" ? "primary" : "transparent"}
      color={variant === "solid" ? "#fff" : "primary"}
      rounded="none"
      _hover={{
        bg: variant === "solid" ? "#120020" : "indigo1",
      }}
      gap={2}
      border={variant === "outline" ? `1.2px solid ${primary}` : "none"}
    >
      {label}
      {rightIcon}
    </Button>
  );
}

export default ButtonComponent;

import React from "react";

interface TabSwitchProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const TabSwitch: React.FC<TabSwitchProps> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default TabSwitch;

import React from "react";
import { styled } from "styled-components";
import { motion } from "framer-motion";

const Notification = ({ message }) => {
  return (
    <NotificationWrapper
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1
      }}
    >
      <p className="message">{message}</p>
    </NotificationWrapper>
  );
};

const NotificationWrapper = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.main};
  color: white;
  width: 300px;
  position: fixed;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
  font-weight: 600;
  text-align: center;
  border-radius: 10px;
`;

export default Notification;

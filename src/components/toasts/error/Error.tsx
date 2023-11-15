import React from "react";
import { notification } from "antd";

type NotificationType = "error";
const config = {
  maxCount: 1,
};

const Error: React.FC<any> = ({ message, description }) => {
  const [api, contextHolder] = notification.useNotification(config);

  const openNotificationWithIcon = (type: NotificationType) => {
    api[type]({
      message: message,
      description: description,
    });
  };
  React.useEffect(() => {
    openNotificationWithIcon("error");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <>{contextHolder}</>;
};

export default Error;

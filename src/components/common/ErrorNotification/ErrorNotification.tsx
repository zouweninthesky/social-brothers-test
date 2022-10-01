import React, { FC, useState } from "react";
import { observer } from "mobx-react-lite";
import "./ErrorNotification.scss";

import Store from "../../../store";

interface ErrorNotificationInt {
  localText?: string;
}

const ErrorNotification: FC<ErrorNotificationInt> = observer(
  ({ localText = "Error has occured. Try again later." }) => {
    const { error } = Store;
    const [isShown, setIsShown] = useState(true);

    return isShown && error ? (
      <div className="error" onClick={() => setIsShown(false)}>
        {localText}
      </div>
    ) : (
      <></>
    );
  }
);

export default ErrorNotification;

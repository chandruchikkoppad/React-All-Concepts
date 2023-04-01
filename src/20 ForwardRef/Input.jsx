import React from "react";

const Input =React.forwardRef( (props,ref) => {
    return <div>
        <Input {...props} ref={ref} />
  </div>;
});

export default Input;

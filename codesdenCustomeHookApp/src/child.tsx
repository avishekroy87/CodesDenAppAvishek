import { forwardRef, useImperativeHandle, useState } from 'react';

const Child = forwardRef((props, ref) => {
  const [internalData] = useState("Secret Data");

  // prevent 'props' is declared but its value is never read
  void props;

  useImperativeHandle(ref, () => ({
    // Expose a function to the parent
    getInternalData: () => internalData
  }));

  return <div>I hold secret data</div>;
});

export default Child;
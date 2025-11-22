import React, { forwardRef, useImperativeHandle, useState } from 'react';

const Child = forwardRef((props, ref) => {
  const [internalData, setInternalData] = useState("Secret Data");

  useImperativeHandle(ref, () => ({
    // Expose a function to the parent
    getInternalData: () => internalData
  }));

  return <div>I hold secret data</div>;
});

export default Child;
import {useRef} from 'react';
import Child from './child';

const Parent = () => {
  const childRef = useRef<{ getInternalData?: () => string } | null>(null);

 const handleClick = () => {
    // Safely access child method using optional chaining
    const data = childRef.current?.getInternalData?.();
    if (data != null) {
      alert(data);
    } else {
      alert('No child data available');
    }
  };

  return (
    <div>
      <Child ref={childRef} />
      <button onClick={handleClick}>Get Child Data</button>
    </div>
  );
 
}
  



export default Parent
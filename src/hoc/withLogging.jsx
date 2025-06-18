import { useEffect } from 'react';

export function withLogging(WrappedComponent) {
  return function ComponentWithLogging(props) {
    useEffect(() => {
      console.log(`🛠 [MOUNT] Componente ${WrappedComponent.name} montado`);
    }, []);

    return <WrappedComponent {...props} />;
  };
}
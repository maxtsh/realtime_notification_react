import { lazy, Suspense, ComponentType } from "react";
import ErrorBoundary from "@/utils/Error";

function LazyLoading(
  Component: () => Promise<{ default: ComponentType<any> }>,
  { Fallback }: { Fallback: React.FC }
) {
  const LazyComponent = lazy(Component);

  return function Lazied(props: any) {
    return (
      <ErrorBoundary>
        <Suspense fallback={<Fallback />}>
          <LazyComponent {...props} />
        </Suspense>
      </ErrorBoundary>
    );
  };
}

export default LazyLoading;

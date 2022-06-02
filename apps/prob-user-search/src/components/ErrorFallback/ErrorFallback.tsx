interface ComponentProps {
  error: any;
  errorInfo: any;
}

function ErrorFallback(props: ComponentProps) {
  return (
    <div>
      <h2>Something went wrong.</h2>
      <details style={{ whiteSpace: 'pre-wrap' }}>
        {props.error && props.error.toString()}
        <br />
        {props.errorInfo.componentStack}
      </details>
    </div>
  );
}

export default ErrorFallback;

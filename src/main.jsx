import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', fontFamily: 'monospace', background: '#fee2e2', minHeight: '100vh' }}>
          <h1 style={{ color: '#b91c1c', fontSize: '20px', marginBottom: '12px' }}>
            ⚠️ App Crashed — Error Details:
          </h1>
          <pre style={{ whiteSpace: 'pre-wrap', color: '#7f1d1d', fontSize: '13px', background: '#fecaca', padding: '16px', borderRadius: '8px' }}>
            {this.state.error?.toString()}
            {'\n\n'}
            {this.state.error?.stack}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)


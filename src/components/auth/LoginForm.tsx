import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

interface LoginFormProps {
  children: React.ReactNode;
}

export const LoginForm: React.FC<LoginFormProps> = ({ children }) => {
  return (
    <Authenticator
      variation="modal"
      components={{
        Header() {
          return (
            <div className="text-center mb-4">
              <h1 className="text-2xl font-bold">Kiro CRM</h1>
              <p className="text-muted-foreground">Sign in to your account</p>
            </div>
          );
        },
      }}
    >
      {children}
    </Authenticator>
  );
};
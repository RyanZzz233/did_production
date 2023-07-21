import React from 'react'
import AuthProvider from '@/components/AuthProvider/AuthProvider'


const layout = ({children}) => {
  return (
    <AuthProvider>
      <h1 className={""}>
          {children}
      </h1>
    </AuthProvider>
  )
}

export default layout
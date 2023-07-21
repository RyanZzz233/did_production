import React from 'react'
import AuthProvider from '@/components/AuthProvider/AuthProvider'


const layout = ({children}:any) => {
  return (
    <AuthProvider>
      <h1 className={""}>
          {children}
      </h1>
    </AuthProvider>
  )
}

export default layout
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { PageTitle } from '@first-mono-repo/ui-header'
import { useState, useEffect } from 'react'
import { API_URL, ApiResponse } from '@first-mono-repo/backend-interface'

export function App() {

  const [apiResponse, setApiResponse] = useState<ApiResponse>({message: 'Loading...'})
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(setApiResponse)
  }, [])

  return (
    <>
      Hello World!
      <PageTitle />
      { apiResponse.message }
    </>
  )
}

export default App

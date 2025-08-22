import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/contexts/AuthContext'

function App() {
  const [count, setCount] = useState(0)
  const { user, signOut } = useAuth()

  const handleSignOut = async () => {
    try {
      await signOut()
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold">Kiro CRM</h1>
            {user && (
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">
                  Welcome, {user.username}
                </span>
                <Button variant="outline" onClick={handleSignOut}>
                  Sign Out
                </Button>
              </div>
            )}
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md max-w-md mx-auto border">
            <Button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </Button>
            <p className="mt-4 text-muted-foreground">
              Welcome to your CRM application!
            </p>
            <div className="mt-4 space-x-2">
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
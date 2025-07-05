"use client"

import { useState, useEffect } from "react"
import {
  type User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth"
import { auth } from "@/lib/firebase"

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const signUp = async (email: string, password: string, name: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)

      // Update the user's display name
      if (userCredential.user && name) {
        await updateProfile(userCredential.user, {
          displayName: name,
        })
      }

      return { user: userCredential.user, error: null }
    } catch (error: any) {
      return { user: null, error: error.message }
    }
  }

  const signIn = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      return { user: userCredential.user, error: null }
    } catch (error: any) {
      return { user: null, error: error.message }
    }
  }

  const logout = async () => {
    try {
      await signOut(auth)
      return { error: null }
    } catch (error: any) {
      return { error: error.message }
    }
  }

  return {
    user,
    loading,
    signUp,
    signIn,
    logout,
  }
}

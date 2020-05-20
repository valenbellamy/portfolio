import { useState, useEffect } from "react"

export default function useOnScreen(options) {
  const [ref, setRef] = useState(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Update our state when observer callback fires
      setVisible(entry.isIntersecting)
    }, options)

    if (!visible) {
      // to anim only once
      if (ref) {
        observer.observe(ref)
      }

      return () => {
        if (ref) {
          observer.unobserve(ref)
        }
      }
    }
  }, [ref, options]) // Empty array ensures that effect is only run on mount and unmount

  return [setRef, visible]
}

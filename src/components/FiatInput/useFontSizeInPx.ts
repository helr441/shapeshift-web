import { RefObject, useEffect, useState } from 'react'

export const useFontSizeInPx = (ref: RefObject<HTMLElement>) => {
  const [textSizeInPx, setTextSizeInPx] = useState<number | null>(null)

  // Get font size rendered by browser that corresponds to initial (possibly themed) value, like 'xl'
  useEffect(() => {
    if (!ref.current) {
      return
    }
    const fontSizeWithUnits = getComputedStyle(ref.current).getPropertyValue('font-size')
    const match = fontSizeWithUnits.match(/\d+/)
    setTextSizeInPx(parseInt(match![0]))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    textSizeInPx,
    setTextSizeInPx,
    getTextSizeForCss: (initialFontSizeWithUnits: string) => {
      if (textSizeInPx === null) {
        return initialFontSizeWithUnits
      }
      return `${textSizeInPx}px`
    }
  }
}

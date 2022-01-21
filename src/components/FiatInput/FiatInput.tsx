import { Input, InputProps } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'

import { computeFontSize } from './computeFontSize'

export const FiatInput = (props: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  // TODO allow initial font size to be specified with themable units like '5xl'
  const [textSizeInPx, setTextSizeInPx] = useState<number>(48)

  /* @helr441 note - React warns us about the absence of a dependency on textSize despite this
   * effect hook calling setTextSize, but because no one else calls setTextSize (ie. textSize never
   * changes outside of this effect hook), if textSize was specified as a dependency, this effect
   * hook would get invoked only on the first render and not for subsequent renders (like when a
   * new fiat value is displayed). Hence, do not specify a dependency array so that this effect
   * hook would get invoked for all renders, not just the first one.
   */
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!inputRef.current) {
      return
    }
    const candidateSize = computeFontSize(inputRef.current, textSizeInPx)
    if (!candidateSize) {
      return
    }
    setTextSizeInPx(candidateSize)
  })

  return (
    <Input
      ref={inputRef}
      variant='unstyled'
      size='xl'
      textAlign='center'
      fontSize={`${textSizeInPx}px`}
      mb={6}
      placeholder='$0.00'
      {...props}
    />
  )
}

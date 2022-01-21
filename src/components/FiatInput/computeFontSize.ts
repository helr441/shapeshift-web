/**
 * Calculates the font size for an HTML element (if the text it presently displays is clipped) to
 * be set to that would avoid the clipping.
 * @param input The HTML element to be examined for text clipping.
 * @param currentSize The current font size (in 'pt' units).
 * @returns `undefined` if no font size change is needed; otherwise, returns the font size that the
 * element should be set to that would avoid text from clipping (in 'pt' units).
 */
export const computeFontSize = (input: HTMLElement, currentSize: number): number | undefined => {
  const displayedWidth = input.scrollWidth
  const viewableWidth = input.offsetWidth
  if (displayedWidth > viewableWidth) {
    const size = viewableWidth / (displayedWidth / currentSize)
    const roundedSize = Math.floor(size)
    return roundedSize
  }
  return undefined
}

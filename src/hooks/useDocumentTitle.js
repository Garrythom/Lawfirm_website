import { useEffect } from 'react'

export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | Pacific Gate Law Firm` : 'Pacific Gate Law Firm'
  }, [title])
}

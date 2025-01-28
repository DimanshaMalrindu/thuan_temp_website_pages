'use client'
import React, { useState } from "react"

export default function Sample() {
  const [page, setPage] = useState<string>('')
  return (
    <div className="flex flex-row justify-around item-start">
      <div className="flex flex-col">
        <div onClick={() => setPage('Standard charging')}>Standard charging</div>
        <div onClick={() => setPage('Fast charging')}>Fast charging</div>
        <div onClick={() => setPage('Ultra-fast charging')}>Ultra-fast charging</div>
      </div>
      <div className="flex flex-col bg-gray-400 h-screen w-1/3">
        {page === 'Standard charging' ? <div>Standard charging</div> : ''}
        {page === 'Fast charging' ? <div>Fast charging</div> : ''}
        {page === 'Ultra-fast charging' ? <div>Ultra-fast charging</div> : ''}
      </div>
    </div>
  )
}

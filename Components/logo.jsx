import React from 'react'

const logo = ({color}) => {
  return (
    <svg
    class= {'w-8 ${color} text-teal-accent-400'}
    viewBox='0 0 24 24'
    strokeLinejoin="round"
    strokeWidth="2"
    strokeLinecap="round"
    fill="none"
    stroke="currentColor"
    strokeMiterlimit="10"
    >
      <rect x="3" y="1" width="7" height="12"></rect>
      <rect x="3" y="17" width="7" height="6"></rect>
      <rect x="14" y="1" width="7" height="6"></rect>
      <rect x="14" y="11" width="7" height="12"></rect>
    </svg>
  );
}

export default logo

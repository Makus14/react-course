import './TabButton.css'

export default function TabButton({ children, isSelected, ...prors }) {
  return (
    <li>
      <button 
        className={ isSelected ? "active" : undefined } 
        {...prors}
      >
        {children}
      </button>
    </li>
  )
}
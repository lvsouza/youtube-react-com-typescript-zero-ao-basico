interface IButtonLoginProps {
  onClick: () => void;
  type?: "button" | "submit" | "reset";
}
export const ButtonLogin: React.FC<IButtonLoginProps> = ({ type, onClick, children }) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  )
}

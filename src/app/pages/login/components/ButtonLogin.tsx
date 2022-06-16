interface IButtonLoginProps {
  onClick: () => void;
  type?: "button" | "submit" | "reset";

  children: React.ReactNode;
}
export const ButtonLogin: React.FC<IButtonLoginProps> = ({ type, onClick, children }) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  )
}

interface Props {
  isOpen: boolean;
  onClick: () => void;
}

const Burger = ({ isOpen, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className="space-y-2 flex flex-col items-end bg-primary-900 absolute right-0 top-0 p-6"
    >
      <div className="w-9 h-1.5 bg-primary-50"></div>
      <div className="w-8 h-1.5 bg-primary-50"></div>
      <div className="w-7 h-1.5 bg-primary-50"></div>
    </div>
  );
};

export default Burger;

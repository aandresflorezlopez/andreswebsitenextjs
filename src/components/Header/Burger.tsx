interface Props {
  variant: 'open' | 'close';
}

const Burger = ({ variant }: Props) => {
  return (
    <div className="space-y-2 flex flex-col items-end">
      <div className="w-9 h-1.5 bg-primary-50"></div>
      <div className="w-8 h-1.5 bg-primary-50"></div>
      <div className="w-7 h-1.5 bg-primary-50"></div>
    </div>
  );
};

export default Burger;

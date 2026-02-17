interface CloseButtonProps {
  onClick: () => void;
}

const CloseButton = ({ onClick }: CloseButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="group flex items-center justify-center relative cursor-pointer size-[24px] rounded-full"
    >
      <span
        className={`absolute block h-[2px] w-[21px] bg-(--text-links-hover) rounded-lg rotate-45 group-hover:rotate-0 duration-300`}
      ></span>
      <span
        className={`absolute block h-[2px] w-[21px] bg-(--text-links-hover) rounded-lg -rotate-45 group-hover:rotate-0 duration-300`}
      ></span>
    </button>
  );
};

export default CloseButton;

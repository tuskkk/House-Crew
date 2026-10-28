export const Avatar = ({ initials }: { initials: string }) => {
  return (
    <span className="flex size-8 items-center justify-center rounded-full border-2 border-white bg-accent text-xs font-bold text-white">
      {initials}
    </span>
  );
};

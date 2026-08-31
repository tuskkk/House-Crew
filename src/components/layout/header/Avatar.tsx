interface AvatarProps {
  username?: string;
  avatarUrl?: string;
}

export default function Avatar({ username = "Ola", avatarUrl }: AvatarProps) {
  return (
    <>
      {avatarUrl ? (
        <img
          src={avatarUrl}
          alt=""
          className="h-8 w-8 rounded-full object-cover"
        />
      ) : (
        <div
          aria-hidden="true"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-medium text-white"
        >
          {username.charAt(0).toUpperCase()}
        </div>
      )}
    </>
  );
}

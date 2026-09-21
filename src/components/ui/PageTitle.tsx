export interface PageTitleProps {
  name: string;
}

export function PageTitle({ name }: PageTitleProps) {
  return (
    <h1 className={"text-2xl font-semibold tracking-wider pb-6 md:pb-11"}>
      {name}
    </h1>
  );
}


type Props = {
  children: React.ReactNode;
}

export const FormContainer = ({children}: Props) => {

  return (
    <div className="container px-24 py-8 sm:px-6 lg:px-8 bg-white shadow-md rounded-lg border border-gray-200 max-w-[900px]">
      {children}
    </div>
  );
}

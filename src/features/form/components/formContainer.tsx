
type Props = {
  children: React.ReactNode;
}

export const FormContainer = ({children}: Props) => {

  return (
    <div className="border-2 rounded-lg border-black">
      {children}
    </div>
  );
}

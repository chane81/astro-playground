import tw, { styled } from "twin.macro";
import { useState } from "react";

interface MyBoxProps {
  title: string;
  children: React.ReactNode;
}

function MyBox({ title, children }: MyBoxProps) {
  const [count, setCount] = useState(0);

  return (
    <MyBoxBlock>
      <h1>{title}</h1>
      <button
        className="bg-sky-300 py-1 px-2 rounded-md"
        onClick={() => setCount(count + 1)}
      >
        Count: {count}
      </button>
      {children}
    </MyBoxBlock>
  );
}

const MyBoxBlock = styled.div`
  ${tw`border border-sky-500 p-4 rounded-lg`}
`;

export default MyBox;

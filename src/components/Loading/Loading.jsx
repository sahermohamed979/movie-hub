export default function Loading() {
  return (
    <div className="flex  justify-center items-center flex-row gap-2  h-screen">
      <div className="size-7 rounded-full bg-[#fff] animate-bounce"></div>
      <div className="size-7 rounded-full bg-[#fff] animate-bounce [animation-delay:.2s]"></div>
      <div className="size-7 rounded-full bg-[#fff] animate-bounce [animation-delay:.4s]"></div>
    </div>
  );
}

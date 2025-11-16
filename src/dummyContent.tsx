const dummyContent = [
  "This is a tall section of content. Keep scrolling...",
  "More content to fill up space and demonstrate the scrolling effect on the navigation menu.",
  "You've reached the end of the scrollable content.",
  "This is a tall section of content. Keep scrolling...",
];

export default function Content() {
  return (
    <main className="container mx-auto p-6 pt-[68px] min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md mb-6">
        <h1 className="text-4xl font-bold mb-4">
          Scroll Down to See the Effect
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          This is a React component. As you scroll down, the navigation bar at
          the top will change its appearance using React state and dynamic
          classes.
        </p>
      </div>
      {dummyContent.map((text, index) => (
        <Dummy key={index} text={text} index={index} />
      ))}
    </main>
  );
}

function Dummy({ text, index }: { text: string; index: number }) {
  return (
    <div className="bg-white odd:bg-gray-200 p-8 rounded-lg shadow-md mb-6 h-dvh">
      <h1 className="text-4xl font-bold mb-4">Page {index + 1}</h1>
      <p className="text-lg text-gray-700 leading-relaxed">{text}</p>
    </div>
  );
}

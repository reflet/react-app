// Tailwind CSS
// https://tailwindcss.com/docs/installation

function TailwindCss () {
  return (
    <div className="w-1/2 border border-gray-400 rounded-2xl p-2 m-2 flex justify-around items-center">
      <p className="m-0 text-gray-400">Tailwind CSS です</p>
      <button className="bg-gray-300 border-0 p-2 rounded-md hover:bg-gray-400 hover:text-white">ボタン</button>
    </div>
  );
}

export default TailwindCss;

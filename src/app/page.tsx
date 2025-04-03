export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Daily</h2>
      </div>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Weekly</h2>
      </div>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Todo</h2>
      </div>
    </div>
  );
}

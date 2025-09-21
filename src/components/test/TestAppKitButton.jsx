// Simple test component for AppKit button
export const TestAppKitButton = () => {
  const handleClick = () => {
    console.log('Test button clicked!');
  };

  return (
    <div className="p-4 border border-gray-300 rounded">
      <h3 className="text-white mb-2">AppKit Button Test</h3>
      <appkit-button />
      <button onClick={handleClick} className="ml-4 px-4 py-2 bg-blue-500 text-white rounded">
        Test Regular Button
      </button>
    </div>
  );
};
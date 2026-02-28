import { useNavigate } from "react-router-dom";

export function Resume() {
  const navigate = useNavigate();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/MiracleRamos_Resume.pdf";
    link.download = "MiracleRamos_Resume.pdf";
    link.click();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0F2656]">
      {/* Same nav as main site */}
      <nav className="sticky top-0 z-50 bg-white py-6 px-8 flex items-center justify-between border-b border-gray-200">
        <button onClick={() => navigate("/")}> 
          <h1 className="text-[#0F2656] text-2xl font-bold">Miracle Ramos</h1>
        </button>
        <div className="flex gap-8 items-center">
          <button
            onClick={() => navigate(-1)}
            className="text-lg text-[#0F2656] font-semibold hover:text-[#87D3F8] transition-colors"
          >
            ← Back
          </button>
          <button
            onClick={handleDownload}
            className="text-sm font-semibold px-6 py-2 rounded-full border border-[#0F2656] text-[#0F2656] hover:bg-[#0F2656] hover:text-white transition-colors duration-200"
          >
            Download ↓
          </button>
        </div>
      </nav>

      {/* PDF viewer */}
      <div className="flex-1 bg-[#0F2656] p-70">
        <iframe
          src="/MiracleRamos_Resume.pdf"
          className="w-full h-full rounded-lg"
          style={{ minHeight: "calc(100vh - 73px)" }}
          title="Resume"
        />
      </div>
    </div>
  );
}
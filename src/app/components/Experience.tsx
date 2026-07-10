// Experience.tsx
import huron from "../../assets/huron/huron.jpg";
import mudd from "../../assets/nuit/nuit.jpg";
import salesforce from "../../assets/salesforce/salesforcetower2.jpg";
import { useNavigate } from "react-router-dom";

export function Experience() {
  const navigate = useNavigate();

  const cards = [
    {
      image: salesforce,
      coverPhoto: "/salesforcetower2.jpg",
      href: "/experience/salesforce",
      title: "Salesforce",
      role: "Graduate Solution Engineer",
      enabled: false,
    },
    {
      image: mudd,
      coverPhoto: "/campus.png",
      href: "/experience/northwestern-it",
      title: "Northwestern IT",
      role: "Team Lead Technical Consultant",
      enabled: true,
    },
    {
      image: huron,
      coverPhoto: "/chicago.jpg",
      href: "/experience/huron",
      title: "Huron Consulting Group",
      role: "Digital Consulting Intern",
      enabled: true,
    },
  ];

  const preloadImage = (src: string) => {
    if (!src) return;
    const existing = document.querySelector(
      `link[rel="preload"][href="${src}"]`
    );
    if (existing) return;

    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = src;
    document.head.appendChild(link);
  };

  return (
    <section
      id="experience"
      className="bg-[#0F2656] py-16 px-8"
      style={{ scrollMarginTop: "81px" }}
    >
      <div className="max-w-5xl md:max-w-[1300px] mx-auto px-0 md:px-16">
        <h2
          className="text-white text-4xl font-bold text-center mb-11"
          style={{ letterSpacing: "0.04em" }}
        >
          Experience
        </h2>

        <div
          className={`grid gap-4 md:gap-8 items-stretch grid-cols-1 md:grid-cols-2 ${
            cards.length === 2 ? "md:max-w-2xl md:mx-auto" : "lg:grid-cols-3"
          }`}
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className="flex w-full"
              onMouseEnter={() => preloadImage(card.coverPhoto)}
              onTouchStart={() => preloadImage(card.coverPhoto)}
            >
              <div
                onClick={() => {
                  if (card.enabled) {
                    navigate(card.href);
                  }
                }}
                className={`relative overflow-hidden rounded-lg transition-all flex flex-col h-full w-full shadow-[0_12px_30px_rgba(0,0,0,0.25)] min-h-[400px] group ${
                  card.enabled
                    ? "cursor-pointer hover:-translate-y-1"
                    : "cursor-default"
                }`}
                style={{
                  backgroundColor: "#002147",
                  border: "2px solid #87D3F8",
                }}
              >
                <div className="absolute inset-0">
                  <img
                    src={card.image}
                    alt=""
                    {...{ fetchpriority: "high" }}
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      card.enabled ? "group-hover:scale-105" : ""
                    }`}
                  />

                  <div
                    className="absolute inset-0 transition-opacity duration-300"
                    style={{
                      backgroundColor: "rgba(15, 38, 86, 0.65)",
                    }}
                  />
                </div>

                <div className="relative z-10 p-6 pt-12 flex flex-col h-full items-center justify-between text-center">
                  <div className="flex flex-col gap-2 mt-auto mb-12">
                    <h3 className="text-white font-bold text-xl md:text-2xl tracking-wide">
                      {card.title}
                    </h3>

                    <span className="text-white font-semibold text-base md:text-lg block tracking-wide opacity-95">
                      {card.role}
                    </span>
                  </div>

                  <div className="mb-20">
                    <span
                      className={`text-xs md:text-sm font-semibold px-6 py-2 rounded-full border backdrop-blur-md transition-all duration-200 ${
                        card.enabled
                          ? "text-[#0F2656] bg-white border-white/25 hover:bg-[#0F2656] hover:text-white hover:border-[#87D3F8]"
                          : "text-white bg-[#0F2656]/60 border-[#87D3F8]"
                      }`}
                    >
                      {card.enabled ? "View My Impact" : "Coming Soon"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
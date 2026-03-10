import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import airbnbImg from "../../assets/stat301-2/nyc.jpeg";
import { ProjectDetail } from "./ProjectDetail";
import modelcomparison from "../../assets/stat301-2/model_rmse_comparison.png";
import priceDist from "../../assets/stat301-2/price_distribution.png";
import heatmap from "../../assets/stat301-2/room_type_borough_heatmap.png";
import predvsactual from "../../assets/stat301-2/predicted_vs_actual.png";

function TerminalBox() {
  const typedRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const typedInstance = useRef<Typed | null>(null);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && typedRef.current && !typedInstance.current) {
          typedInstance.current = new Typed(typedRef.current, {
            strings: [
              `<span style="opacity:0.4">// dataset overview</span><br/>` +
                `problem type: <span style="color:#87D3F8">regression</span><br/>` +
                `target variable: <span style="color:#87D3F8">price</span><br/>` +
                `learning method: <span style="color:#87D3F8">supervised</span><br/>` +
                `<span style="display:block;height:6px"></span>` +
                `<span style="opacity:0.4">// dataset statistics</span><br/>` +
                `dataset: <span style="color:#87D3F8">AB_NYC_2019</span><br/>` +
                `observations: <span style="color:#87D3F8">48,895</span><br/>` +
                `variables: <span style="color:#87D3F8">16</span><br/>` +
                `missingness: <span style="color:#87D3F8">2.57%</span><br/>` +
                `<span style="display:block;height:6px"></span>` +
                `<span style="opacity:0.4">// feature types</span><br/>` +
                `numeric features: <span style="color:#87D3F8">10</span><br/>` +
                `categorical features: <span style="color:#87D3F8">5</span><br/>` +
                `date features: <span style="color:#87D3F8">1</span>`,
            ],
            typeSpeed: 20,
            startDelay: 150,
            showCursor: false,
            cursorChar: "▋",
            loop: false,
            contentType: "html",
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      typedInstance.current?.destroy();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full rounded-2xl border border-white/10 shadow-[0_12px_30px_rgba(0,0,0,0.25)] px-3 py-4 sm:px-4 sm:py-5 md:px-5 md:py-5 font-mono text-[10px] sm:text-xs md:text-sm leading-5 sm:leading-6 h-[303px] sm:h-[220px] md:h-[360px] overflow-hidden terminal-box"
      style={{ backgroundColor: "#001233" }}
    >
      <div
        ref={typedRef}
        className="text-white/80 break-words whitespace-normal"
      />
      <style>{`
        .terminal-box br {
          display: block;
          content: "";
          margin-top: -10px;
        }

        @media (min-width: 768px) {
          .terminal-box br {
            margin-top: -13px;
          }
        }

        .terminal-box .typed-cursor {
          color: rgba(255,255,255,0.8);
        }
      `}</style>
    </div>
  );
}

type LightboxProps = {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
};

function PlotLightbox({ src, alt, isOpen, onClose }: LightboxProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center px-4 py-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <div
        className="relative w-full max-w-3xl flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white/80 hover:text-white text-3xl leading-none transition-colors"
          aria-label="Close expanded plot"
          type="button"
        >
          ×
        </button>

        <div className="w-full rounded-2xl bg-[#F2F3F4] p-3 sm:p-4 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
          <img
            src={src}
            alt={alt}
            className="w-full max-h-[80vh] object-contain rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}

type ClickablePlotProps = {
  src: string;
  alt: string;
  title: string;
  description: string;
  heightClassName?: string;
  fit?: "contain" | "cover";
};

function ClickablePlot({
  src,
  alt,
  title,
  description,
  heightClassName = "h-[280px] md:h-[210px]",
  fit = "cover",
}: ClickablePlotProps & { fit?: "contain" | "cover" }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-1">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="text-left group cursor-zoom-in"
          aria-label={`Expand ${title}`}
        >
          <img
            src={src}
            alt={alt}
            className={`w-full ${heightClassName} rounded-2xl border border-white/10 shadow-[0_12px_30px_rgba(0,0,0,0.25)] transition-transform duration-200 group-hover:scale-[1.01] ${
              fit === "cover" ? "object-cover" : "object-contain"
            }`}
            style={{
              objectPosition: "center center",
              backgroundColor: "#F2F3F4",
              padding: fit === "cover" ? "0px" : "6px",
            }}
          />
        </button>

        <div className="px-1 mt-2 flex flex-col gap-1">
          <p className="text-[#FFFFFF] text-sm sm:text-base tracking-wider text-center md:text-left">
            {title}
          </p>
          <p className="text-white/60 text-xs sm:text-sm italic text-center md:text-left leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      <PlotLightbox
        src={src}
        alt={alt}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}

function ProjectHighlights() {
  return (
    <div className="flex flex-col gap-6">
      {/* large image + workflow block */}
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="flex flex-col gap-1 w-full md:w-2/3">
        <ClickablePlot
  src={predvsactual}
  alt="Model predictions versus actual Airbnb prices"
  title="Model Predictions vs Actual Prices"
  description="Six regression models were trained and evaluated using cross-validation to determine which approach best predicted Airbnb prices. The model performs well for most listings but struggles to accurately predict very high-priced properties."
  heightClassName="h-[190px] md:h-[360px]"
  fit="contain"
/>
        </div>

        <div className="w-full md:flex-1 flex flex-col gap-2 min-w-0">
          <TerminalBox />
          <div className="px-1 flex flex-col gap-1">
            <p className="text-[#FFFFFF] text-sm sm:text-base tracking-wider text-center md:text-left">
              Machine Learning Pipeline
            </p>
            <p className="text-white/60 text-xs sm:text-sm italic text-center md:text-left leading-relaxed">
              The dataset was cleaned, engineered, and split into training and
              testing sets before evaluating six regression models.
            </p>
          </div>
        </div>
      </div>

      {/* 3-card grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ClickablePlot
          src={priceDist}
          alt="Price distribution of NYC Airbnb listings"
          title="Price Distribution"
          description="Airbnb prices in NYC are highly right-skewed, with most listings under $500 and a small number of extreme outliers."
          heightClassName="h-[220px] md:h-[210px]"
        />

        <ClickablePlot
          src={modelcomparison}
          alt="Model performance comparison by RMSE"
          title="Model Performance"
          description="RMSE scores across six models show that linear regression outperformed more complex algorithms."
          heightClassName="h-[220px] md:h-[210px]"
        />

        <ClickablePlot
          src={heatmap}
          alt="Geographic pricing heatmap by borough and room type"
          title="Geographic Pricing Patterns"
          description="A heatmap of median listing prices highlights how location and room type influence Airbnb pricing."
          heightClassName="h-[220px] md:h-[210px]"
        />
      </div>
    </div>
  );
}

export function AirbnbProjectDetail() {
  return (
    <ProjectDetail
      coverPhoto={airbnbImg}
      coverPosition="center 57%"
      title="NYC Airbnb Price Prediction"
      className="STAT 301-2: Data Science II"
      quarter="Winter 2025"
      overview="This project explores how machine learning can be used to predict Airbnb rental prices in New York City. Six regression models were trained and compared using cross-validation and feature engineering, including linear regression, elastic net, KNN, random forest, and boosted trees. Linear regression achieved the best RMSE of 188.7, while location and room type emerged as the strongest predictors of price. The project resulted in a reproducible, end-to-end machine learning pipeline in R with full documentation and hyperparameter tuning."
      githubUrl="https://github.com/miracleramos2025/nyc-airbnb-price-prediction.git"
      reportUrl="/Ramos_Miracle_final_report.html"
      customHighlights={<ProjectHighlights />}
      process={[
        {
          title: "Data Cleaning & Exploration",
          description:
            "Cleaned the NYC Airbnb dataset, handled missing review-related fields, converted variable types, and prepared the target variable for modeling.",
        },
        {
          title: "Feature Engineering",
          description:
            "Built multiple preprocessing recipes with categorical encoding, normalization, interaction terms, and polynomial features tailored to different model types.",
        },
        {
          title: "Model Training & Cross-Validation",
          description:
            "Trained and compared six regression models, including linear regression, elastic net, KNN, random forest, and boosted trees.",
        },
        {
          title: "Model Comparison & Selection",
          description:
            "Used cross-validation, resampling, and RMSE-based model comparison to evaluate performance and select the final model for test-set analysis.",
        },
      ]}
      images={[]}
      outcomes={[]}
      reflections={[]}
    />
  );
}
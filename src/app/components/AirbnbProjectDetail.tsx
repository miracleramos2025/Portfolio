import airbnbImg from "../../assets/stat301-2/nyc.jpeg";
import { ProjectDetail } from "./ProjectDetail";

export function AirbnbProjectDetail() {
  return (
    <ProjectDetail
      coverPhoto={airbnbImg}
      coverPosition="center 57%"
      title="NYC Airbnb Price Prediction"
      className="STAT 301-2: Data Science II"
      quarter="Winter 2025"
      overview="Built a supervised machine learning pipeline using tidymodels in R to predict NYC Airbnb rental prices. Compared six models including regularized linear models (lasso, elastic net) and tree-based methods (random forest, boosted trees). The lasso model achieved the best RMSE of 188.7 — outperforming more complex models and suggesting that Airbnb pricing is largely driven by structured factors like location and room type."
      githubUrl="https://github.com/miracleramos2025/final-project-2-site.git"
      tools={["R", "tidymodels", "ggplot2", "Random Forest", "Lasso", "Elastic Net", "Cross-Validation"]}
      process={[
        {
          title: "Data Cleaning & Exploration",
          description: "Explored the NYC Airbnb dataset, handled missing values, and performed exploratory data analysis to understand distributions and relationships between key features like neighborhood, room type, and price.",
        },
        {
          title: "Feature Engineering",
          description: "Created and transformed features to improve model performance, including encoding categorical variables, log-transforming skewed price distributions, and selecting the most predictive variables.",
        },
        {
          title: "Model Training & Cross-Validation",
          description: "Trained six models using tidymodels with 5-fold cross-validation. Tuned hyperparameters for regularization and tree depth to optimize each model's performance.",
        },
        {
          title: "Model Comparison & Selection",
          description: "Evaluated all models using RMSE as the primary metric. The lasso regression model achieved the lowest RMSE of 188.7, outperforming tree-based approaches and informing the final selection.",
        },
      ]}
      images={[
        {
          src: airbnbImg,
          caption: "Model comparison — RMSE across all six trained models",
        },
        {
          src: airbnbImg,
          caption: "Feature importance — top predictors of Airbnb pricing",
        },
        {
          src: airbnbImg,
          caption: "Predicted vs. actual prices on the test set",
        },
        {
          src: airbnbImg,
          caption: "Geographic distribution of listings by price tier",
        },
      ]}
      outcomes={[
        "Lasso regression achieved the best RMSE of 188.7, outperforming all five other models including random forest and boosted trees.",
        "Analysis confirmed that location and room type are the strongest predictors of NYC Airbnb pricing, suggesting linear relationships dominate over complex interactions.",
        "Delivered a reproducible, end-to-end machine learning pipeline in R with full documentation, cross-validation, and hyperparameter tuning.",
      ]}
      reflections={[
        {
          title: "Simpler Models Can Win",
          description: "Going in, I expected the tree-based models to dominate. Seeing lasso outperform them was a reminder that model complexity doesn't guarantee better results — understanding your data matters more.",
        },
        {
          title: "Feature Engineering Is Half the Work",
          description: "The quality of the features fed into a model shapes its ceiling. Spending time on thoughtful transformations and encodings had more impact than swapping between model types.",
        },
        {
          title: "Reproducibility as a Standard",
          description: "Building a clean, documented pipeline from the start made iteration and comparison far easier. I'll carry that habit forward into every data project.",
        },
      ]}
    />
  );
}
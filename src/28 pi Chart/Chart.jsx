import React from "react";
import { CChart } from "@coreui/react-chartjs";

const Chart = () => {
  return (
    <div>
      <CChart
        type="line"
        data={{
          labels: [
            "January",
            "febuary",
            "march",
            "april",
            "may",
            "june",
            "july",
            "august",
            "september",
            "october",
            "november", 
            "december",
          ],
          datasets: [
            {
              label: "GitHub Commits",
              backgroundColor: "blue",
              data: [40, 30, 80, 35, 60, 78, 60,10,25,36,87,60,52],
            },
          ],
              }}
              labels="months"
      />
    </div>
  );
};

export default Chart;

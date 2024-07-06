import React from "react";
import { motion } from "framer-motion";
import data from "./../../data.json";

const Chart = () => {
  const maxTicketCount = Math.max(...data.map((item) => item.ticketCount));

  return (
    <>
      <motion.div
        className="chart-main  mt-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {data.map((item) => {
          return (
            <motion.div
              className="items"
              key={item.id}
              style={{ background: item.colour }}
              initial={{ height: 0 }}
              animate={{
                height: `${(item.ticketCount / maxTicketCount) * 100}%`,
              }}
              exit={{ height: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="item-data">
                {item.name} {item.ticketCount}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      <div className="x-axis">Departments</div>
      <div className="y-axis">Ticket Count</div>
    </>
  );
};

export default Chart;

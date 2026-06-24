"use client";

import React, { useState } from "react";
import { Calculator, ShieldCheck } from "lucide-react";

export default function SipCalculator() {
  const [monthlySip, setMonthlySip] = useState(10000);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [years, setYears] = useState(15);

  // Compute SIP projections
  const months = years * 12;
  const totalInvested = monthlySip * months;
  const i = expectedReturn / 12 / 100;
  const totalValue = Math.round(
    monthlySip * ((Math.pow(1 + i, months) - 1) / i) * (1 + i)
  );
  const estReturns = totalValue - totalInvested;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  // Generate coordinates for growth path SVG (10 points over time)
  const svgWidth = 400;
  const svgHeight = 200;
  const points = [];
  for (let y = 0; y <= years; y++) {
    const mCount = y * 12;
    const val = mCount === 0 ? 0 : Math.round(monthlySip * ((Math.pow(1 + i, mCount) - 1) / i) * (1 + i));
    const inv = monthlySip * mCount;
    points.push({ year: y, total: val, invested: inv });
  }

  const maxVal = totalValue || 1;
  const pathPoints = points.map((p, index) => {
    const x = (index / years) * svgWidth;
    const y = svgHeight - (p.total / maxVal) * (svgHeight - 20) - 10;
    return `${x},${y}`;
  });

  const investedPathPoints = points.map((p, index) => {
    const x = (index / years) * svgWidth;
    const y = svgHeight - (p.invested / maxVal) * (svgHeight - 20) - 10;
    return `${x},${y}`;
  });

  const linePath = `M ${pathPoints.join(" L ")}`;
  const investedLinePath = `M ${investedPathPoints.join(" L ")}`;

  // SVG Pie chart calculation
  const radius = 50;
  const strokeWidth = 14;
  const circumference = 2 * Math.PI * radius;
  const returnPercentage = (estReturns / totalValue) * 100 || 0;
  const strokeDashoffset = circumference - (returnPercentage / 100) * circumference;

  return (
    <div className="relative min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-shreeji-primary/10 border border-shreeji-primary/20">
            <Calculator className="h-4 w-4 text-shreeji-accent" />
            <span className="text-xs font-semibold tracking-wider text-shreeji-accent uppercase">Calculator</span>
          </div>
          
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-shreeji-text tracking-tight">
            SIP Investment{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-shreeji-accent to-shreeji-gold">
              Growth Estimator
            </span>
          </h1>
          
          <p className="text-sm sm:text-base text-shreeji-text-secondary leading-relaxed">
            Estimate how your monthly contributions can accumulate over time through compounding.
          </p>
        </div>

        {/* Calculator layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Panel: Sliders */}
          <div className="lg:col-span-6 glass-card rounded-2xl p-6 md:p-8 flex flex-col justify-between space-y-8 shadow-xl">
            <div>
              <h2 className="font-display font-bold text-lg text-white mb-6">Investment Inputs</h2>
              
              <div className="space-y-6">
                {/* Monthly SIP input */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-shreeji-text-secondary font-medium">Monthly Investment:</span>
                    <span className="text-base font-bold text-white">{formatCurrency(monthlySip)}</span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="100000"
                    step="500"
                    value={monthlySip}
                    onChange={(e) => setMonthlySip(Number(e.target.value))}
                    className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-shreeji-accent"
                  />
                  <div className="flex justify-between text-[10px] text-shreeji-text-secondary">
                    <span>₹500</span>
                    <span>₹1,00,000</span>
                  </div>
                </div>

                {/* Expected Return input */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-shreeji-text-secondary font-medium">Expected Return (Annual %):</span>
                    <span className="text-base font-bold text-shreeji-accent">{expectedReturn}%</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="22"
                    step="0.5"
                    value={expectedReturn}
                    onChange={(e) => setExpectedReturn(Number(e.target.value))}
                    className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-shreeji-accent"
                  />
                  <div className="flex justify-between text-[10px] text-shreeji-text-secondary">
                    <span>5%</span>
                    <span>22%</span>
                  </div>
                </div>

                {/* Years input */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-shreeji-text-secondary font-medium">Investment Period:</span>
                    <span className="text-base font-bold text-shreeji-gold">{years} Years</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="35"
                    step="1"
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                    className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-shreeji-accent"
                  />
                  <div className="flex justify-between text-[10px] text-shreeji-text-secondary">
                    <span>1 Year</span>
                    <span>35 Years</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Micro disclaimer */}
            <div className="pt-6 border-t border-white/5 flex items-start space-x-2 text-xs text-shreeji-text-secondary/70">
              <ShieldCheck className="h-4 w-4 text-shreeji-accent shrink-0 mt-0.5" />
              <span>Calculations are indicative. Mutual funds are subject to market volatility. Real returns vary.</span>
            </div>
          </div>

          {/* Right Panel: Output & Charts */}
          <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
            
            {/* Wealth Breakdown Card */}
            <div className="glass-card rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-xl">
              <div>
                <h3 className="font-display font-bold text-base text-white mb-6">Wealth Projection</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-white/5 text-sm">
                    <span className="text-shreeji-text-secondary">Invested Capital:</span>
                    <span className="font-semibold text-white">{formatCurrency(totalInvested)}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-white/5 text-sm">
                    <span className="text-shreeji-text-secondary">Accrued Returns:</span>
                    <span className="font-semibold text-emerald-400">{formatCurrency(estReturns)}</span>
                  </div>
                  <div className="flex justify-between items-center text-base font-bold">
                    <span className="text-shreeji-text">Total Wealth:</span>
                    <span className="text-shreeji-accent font-display">{formatCurrency(totalValue)}</span>
                  </div>
                </div>
              </div>

              {/* Dynamic SVG Pie chart */}
              <div className="flex items-center space-x-6 mt-6 pt-6 border-t border-white/5">
                <div className="relative h-24 w-24 flex items-center justify-center shrink-0">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="48"
                      cy="48"
                      r={radius}
                      fill="transparent"
                      stroke="rgba(255,255,255,0.06)"
                      strokeWidth={strokeWidth}
                    />
                    <circle
                      cx="48"
                      cy="48"
                      r={radius}
                      fill="transparent"
                      stroke="#14B8A6"
                      strokeWidth={strokeWidth}
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset}
                      strokeLinecap="round"
                    />
                  </svg>
                  {/* Center Text percentage */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-[10px] text-shreeji-text-secondary uppercase">Return</span>
                    <span className="text-xs font-bold text-white">{Math.round(returnPercentage)}%</span>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="flex items-center space-x-2">
                    <div className="h-3 w-3 rounded-full bg-white/10" />
                    <span className="text-shreeji-text-secondary">Invested: {Math.round(100 - returnPercentage)}%</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-3 w-3 rounded-full bg-shreeji-accent" />
                    <span className="text-shreeji-text-secondary">Returns: {Math.round(returnPercentage)}%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Growth Curve Chart Card */}
            <div className="glass-card rounded-2xl p-6 flex flex-col justify-between shadow-xl">
              <div>
                <h3 className="font-display font-bold text-base text-white mb-4">Investment Growth Curve</h3>
                <span className="text-[10px] text-shreeji-text-secondary uppercase tracking-wider block mb-4">Projection Over {years} Years</span>
              </div>

              {/* Curve Chart */}
              <div className="relative w-full h-44 mt-2">
                <svg className="w-full h-full overflow-visible" viewBox={`0 0 ${svgWidth} ${svgHeight}`} preserveAspectRatio="none">
                  {/* Area under curves */}
                  <defs>
                    <linearGradient id="totalGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.0" />
                    </linearGradient>
                    <linearGradient id="invGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.05" />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  
                  {/* Filled curves */}
                  <path d={`${linePath} L ${svgWidth},${svgHeight} L 0,${svgHeight} Z`} fill="url(#totalGrad)" />
                  <path d={`${investedLinePath} L ${svgWidth},${svgHeight} L 0,${svgHeight} Z`} fill="url(#invGrad)" />

                  {/* Lines */}
                  <path d={investedLinePath} fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeDasharray="3" />
                  <path d={linePath} fill="none" stroke="#14B8A6" strokeWidth="2.5" />
                  
                  {/* End circles */}
                  {points.length > 0 && (
                    <>
                      <circle cx={svgWidth} cy={svgHeight - (totalValue / maxVal) * (svgHeight - 20) - 10} r="3.5" fill="#14B8A6" />
                      <circle cx={svgWidth} cy={svgHeight - (totalInvested / maxVal) * (svgHeight - 20) - 10} r="3" fill="#ffffff" />
                    </>
                  )}
                </svg>
              </div>

              {/* Legend indicators */}
              <div className="flex justify-between items-center text-[10px] text-shreeji-text-secondary mt-4 pt-4 border-t border-white/5">
                <div className="flex space-x-4">
                  <span className="flex items-center space-x-1">
                    <span className="w-2.5 h-[2px] bg-white/20 inline-block" />
                    <span>Invested Capital</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <span className="w-2.5 h-[2px] bg-shreeji-accent inline-block" />
                    <span>Estimated Wealth</span>
                  </span>
                </div>
                <span>Year {years}</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

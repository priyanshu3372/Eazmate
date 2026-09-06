import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingUp,
  Activity,
  Sparkles,
  GitBranch,
  Play,
  RotateCcw,
  CheckCircle2,
  Cpu,
  BarChart3,
  Newspaper,
  Database,
  Search,
  Zap,
  Globe,
  Check,
  ShieldCheck,
  ArrowRight,
  Sliders,
  Layers,
  Lock,
  Radio
} from 'lucide-react';

interface CryptoPreset {
  ticker: string;
  name: string;
  symbol: string;
  currentPrice: string;
  priceNum: number;
  change24h: string;
  changePositive: boolean;
  retracements: {
    week4: string;
    week12: string;
    week26: string;
  };
  m2Trend: string;
  m2Correlation: string;
  sentiment: {
    score: number; // 0-100
    label: 'Bullish' | 'Neutral' | 'Bearish';
    analyzedArticles: number;
  };
  newsHeadlines: Array<{
    title: string;
    source: string;
    sentiment: 'Bullish' | 'Neutral' | 'Bearish';
    time: string;
  }>;
  forecast: {
    week1: string;
    week2: string;
    week3: string;
    week4: string;
    certainty: number; // 0-10
    trendOutlook: string;
    summary: string;
    actionablePlan: string;
  };
}

const CRYPTO_DATA: Record<string, CryptoPreset> = {
  BTC: {
    ticker: 'BTC',
    name: 'Bitcoin',
    symbol: '₿',
    currentPrice: '$89,450.20',
    priceNum: 89450,
    change24h: '+3.42%',
    changePositive: true,
    retracements: {
      week4: '$86,210.00',
      week12: '$74,850.00',
      week26: '$68,400.00'
    },
    m2Trend: '+4.2% YoY Expansion',
    m2Correlation: 'Strong Positive (+0.84)',
    sentiment: {
      score: 84,
      label: 'Bullish',
      analyzedArticles: 18
    },
    newsHeadlines: [
      {
        title: 'Global Central Bank Liquidity Injection Spurs Digital Asset Inflows',
        source: 'Bloomberg Crypto',
        sentiment: 'Bullish',
        time: '2h ago'
      },
      {
        title: 'Spot ETF Weekly Net Inflows Cross $1.2B Threshold',
        source: 'CoinDesk Markets',
        sentiment: 'Bullish',
        time: '4h ago'
      },
      {
        title: 'Federal Reserve Monetary Base M2 Shows Continued Secular Growth',
        source: 'MacroPulse Research',
        sentiment: 'Bullish',
        time: '7h ago'
      }
    ],
    forecast: {
      week1: '$91,200',
      week2: '$93,800',
      week3: '$92,400',
      week4: '$96,500',
      certainty: 8.5,
      trendOutlook: 'Bullish Continuation with High Macro Confluence',
      summary: 'Bitcoin is demonstrating robust structural accumulation above its 4-week 50% retracement level ($86,210). Rising global M2 liquidity combined with consistent institutional ETF inflows provides high-conviction tailwinds.',
      actionablePlan: 'Strategic Dollar-Cost Accumulation. Maintain dynamic trailing stops below $84,500 with secondary upside targets at $98,000.'
    }
  },
  ETH: {
    ticker: 'ETH',
    name: 'Ethereum',
    symbol: 'Ξ',
    currentPrice: '$2,684.50',
    priceNum: 2684.5,
    change24h: '+2.15%',
    changePositive: true,
    retracements: {
      week4: '$2,540.00',
      week12: '$2,420.00',
      week26: '$2,790.00'
    },
    m2Trend: '+3.8% YoY Expansion',
    m2Correlation: 'Moderate Positive (+0.76)',
    sentiment: {
      score: 72,
      label: 'Bullish',
      analyzedArticles: 14
    },
    newsHeadlines: [
      {
        title: 'Layer-2 Total Value Locked Crosses Record $48B Milestone',
        source: 'The Block',
        sentiment: 'Bullish',
        time: '3h ago'
      },
      {
        title: 'Institutional Staking Yields Draw Multi-Fund Treasury Allocation',
        source: 'CoinTelegraph',
        sentiment: 'Bullish',
        time: '6h ago'
      },
      {
        title: 'Gas Optimization Upgrades Scheduled for Upcoming Mainnet Hardfork',
        source: 'Ethereum Dev Protocol',
        sentiment: 'Neutral',
        time: '9h ago'
      }
    ],
    forecast: {
      week1: '$2,740',
      week2: '$2,860',
      week3: '$2,810',
      week4: '$3,050',
      certainty: 7.9,
      trendOutlook: 'Accumulation Transitioning to Momentum Expansion',
      summary: 'ETH has firmly reclaimed the 12-week 50% retracement ($2,420). While facing secondary resistance at the 26-week level ($2,790), accelerating on-chain L2 throughput and reduced exchange balances support an upward push.',
      actionablePlan: 'Hold core long exposure. Add on dips into the $2,580–$2,620 band targeting $3,000 resistance.'
    }
  },
  SOL: {
    ticker: 'SOL',
    name: 'Solana',
    symbol: '◎',
    currentPrice: '$178.80',
    priceNum: 178.8,
    change24h: '+5.78%',
    changePositive: true,
    retracements: {
      week4: '$164.20',
      week12: '$142.50',
      week26: '$135.00'
    },
    m2Trend: '+4.2% YoY Expansion',
    m2Correlation: 'High Beta Momentum (+0.88)',
    sentiment: {
      score: 89,
      label: 'Bullish',
      analyzedArticles: 16
    },
    newsHeadlines: [
      {
        title: 'DEX Trading Volume on Solana Surpasses Rival Chains for Third Week',
        source: 'DeFiLlama News',
        sentiment: 'Bullish',
        time: '1h ago'
      },
      {
        title: 'Institutional Payment Rail Pilots Announce Native Settlement',
        source: 'Financial Times Tech',
        sentiment: 'Bullish',
        time: '5h ago'
      },
      {
        title: 'Firedancer Validator Client Reaches Next Production Benchmark',
        source: 'Solana Foundation',
        sentiment: 'Bullish',
        time: '8h ago'
      }
    ],
    forecast: {
      week1: '$188',
      week2: '$196',
      week3: '$192',
      week4: '$215',
      certainty: 8.8,
      trendOutlook: 'High-Velocity Bullish Breakout',
      summary: 'Solana trades comfortably above all primary 50% retracement bands with explosive on-chain volume and DEX leadership. High beta responsiveness to global liquidity makes SOL prime for continuation.',
      actionablePlan: 'Momentum breakout positioning. Trail stops at $168 with upside targets set across $200 and $220.'
    }
  },
  XRP: {
    ticker: 'XRP',
    name: 'Ripple',
    symbol: '✕',
    currentPrice: '$1.44',
    priceNum: 1.44,
    change24h: '+1.80%',
    changePositive: true,
    retracements: {
      week4: '$1.28',
      week12: '$0.94',
      week26: '$0.68'
    },
    m2Trend: '+3.9% YoY Expansion',
    m2Correlation: 'Moderate Positive (+0.71)',
    sentiment: {
      score: 75,
      label: 'Bullish',
      analyzedArticles: 12
    },
    newsHeadlines: [
      {
        title: 'Cross-Border Liquidity Hub Integrates Multi-Bank Currency Corridors',
        source: 'Fintech Weekly',
        sentiment: 'Bullish',
        time: '4h ago'
      },
      {
        title: 'Regulatory Settlement Finality Provides Institutional Clearance',
        source: 'Reuters Legal',
        sentiment: 'Bullish',
        time: '7h ago'
      },
      {
        title: 'Ledger Escrow Release Conforms to Scheduled Monthly Parameter',
        source: 'XRPL Monitor',
        sentiment: 'Neutral',
        time: '11h ago'
      }
    ],
    forecast: {
      week1: '$1.48',
      week2: '$1.56',
      week3: '$1.52',
      week4: '$1.68',
      certainty: 7.5,
      trendOutlook: 'Steady Structural Uptrend',
      summary: 'XRP maintains price action well above its 4-week retracement benchmark ($1.28). Regulatory stability and commercial banking integrations provide a durable foundation for extended accumulation.',
      actionablePlan: 'Gradual accumulation on test of $1.35 support. Profit-taking scale between $1.65 and $1.75.'
    }
  }
};

const AGENT_PIPELINE_STEPS = [
  {
    id: 'ticker_extractor',
    title: 'Ticker Extractor',
    sub: 'Semantic Entity Extraction',
    icon: Search,
    detail: 'Parses natural language query into target asset tickers and contextual parameters'
  },
  {
    id: 'retrievers',
    title: 'Dual Data Retrievers',
    sub: 'Price Feeds & Live News Stream',
    icon: Database,
    detail: 'Parallel ingestion of weekly OHLCV series, technical indicators, and real-time market headlines'
  },
  {
    id: 'analysts',
    title: 'Quantitative & News Analysts',
    sub: '50% Retracements, M2 & Sentiment',
    icon: BarChart3,
    detail: 'Evaluates 4/12/26-week retracement bands, correlates Federal Reserve M2 liquidity, and scores sentiment'
  },
  {
    id: 'reporter',
    title: 'Financial Reporter',
    sub: 'Synthesis & 4-Week Prediction',
    icon: Cpu,
    detail: 'Synthesizes technical outlook, certainty rating (0-10), projected trajectory, and tactical advisory'
  }
];

export const FinancialAgentShowcase: React.FC = () => {
  const [selectedTicker, setSelectedTicker] = useState<string>('BTC');
  const [activeTab, setActiveTab] = useState<'demo' | 'architecture' | 'enterprise'>('demo');
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simulationStep, setSimulationStep] = useState<number>(3); // 0, 1, 2, 3 (complete)
  const [customQuery, setCustomQuery] = useState<string>(
    'Predict the 4-week trend for BTC considering latest M2 money supply and ETF inflows.'
  );

  const activeData = CRYPTO_DATA[selectedTicker] || CRYPTO_DATA.BTC;

  // Run or re-run the simulation
  const handleRunAnalysis = (tickerKey?: string) => {
    const key = tickerKey || selectedTicker;
    if (tickerKey && tickerKey !== selectedTicker) {
      setSelectedTicker(tickerKey);
      setCustomQuery(`Evaluate technical 50% levels, M2 money supply, and news sentiment for ${key}.`);
    }

    setIsSimulating(true);
    setSimulationStep(0);

    // Step 0: Ticker extraction
    setTimeout(() => {
      setSimulationStep(1);
      // Step 1: Parallel retrieval
      setTimeout(() => {
        setSimulationStep(2);
        // Step 2: Price and sentiment analysis
        setTimeout(() => {
          setSimulationStep(3);
          setIsSimulating(false);
        }, 800);
      }, 700);
    }, 600);
  };

  return (
    <section id="financial-agent-showcase" className="relative py-24 bg-theme-bgAlt border-t border-theme-border overflow-hidden">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-emerald-500/10 via-purple-500/10 to-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-20 right-10 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
            <span>Eazmate Autonomous Product • Financial Intelligence</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-theme-text font-sans">
            Autonomous Financial Advice & <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 bg-clip-text text-transparent">
              Market Intelligence Agent
            </span>
          </h2>

          <p className="text-base sm:text-lg text-theme-textMuted font-medium leading-relaxed">
            Orchestrating technical indicators, multi-week 50% retracements, Federal Reserve M2 money supply, and real-time news sentiment into institutional-grade crypto intelligence reports.
          </p>

          {/* Product Highlights & Action Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              to="/get-quotation"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-md shadow-emerald-600/25 group"
            >
              <Zap className="w-3.5 h-3.5 text-emerald-200 fill-current" />
              <span>Deploy to Organization</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-theme-bg border border-theme-border text-theme-textMuted">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Multi-Agent LangGraph Engine</span>
              <span className="text-slate-400">•</span>
              <span>OpenBB Quantitative Models</span>
              <span className="text-slate-400">•</span>
              <span>Sub-Second Inference</span>
            </div>
          </div>
        </div>

        {/* TAB NAVIGATION */}
        <div className="flex justify-center mb-8">
          <div className="p-1 bg-theme-bg border border-theme-border rounded-2xl flex items-center gap-1 shadow-sm">
            <button
              onClick={() => setActiveTab('demo')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'demo'
                  ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/25'
                  : 'text-theme-textMuted hover:text-theme-text hover:bg-theme-bgAlt'
              }`}
            >
              <Activity className="w-4 h-4" />
              <span>Live Agent Sandbox</span>
            </button>

            <button
              onClick={() => setActiveTab('architecture')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'architecture'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/25'
                  : 'text-theme-textMuted hover:text-theme-text hover:bg-theme-bgAlt'
              }`}
            >
              <GitBranch className="w-4 h-4" />
              <span>LangGraph Architecture</span>
            </button>

            <button
              onClick={() => setActiveTab('enterprise')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'enterprise'
                  ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/25'
                  : 'text-theme-textMuted hover:text-theme-text hover:bg-theme-bgAlt'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Enterprise Guardrails</span>
            </button>
          </div>
        </div>

        {/* TAB 1: LIVE AGENT SANDBOX */}
        {activeTab === 'demo' && (
          <div className="space-y-8">
            {/* Ticker & Query Controls Bar */}
            <div className="bg-theme-bg border border-theme-border rounded-2xl p-4 sm:p-6 shadow-soft">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                
                {/* Ticker Quick Selectors */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-bold text-theme-textMuted uppercase tracking-wider mr-1">
                    Select Asset:
                  </span>
                  {Object.keys(CRYPTO_DATA).map((ticker) => {
                    const item = CRYPTO_DATA[ticker];
                    const isSelected = selectedTicker === ticker;
                    return (
                      <button
                        key={ticker}
                        onClick={() => handleRunAnalysis(ticker)}
                        className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all border ${
                          isSelected
                            ? 'bg-slate-900 dark:bg-emerald-950/60 border-emerald-500 text-emerald-400 shadow-md shadow-emerald-500/15'
                            : 'bg-theme-bgAlt border-theme-border text-theme-text hover:border-emerald-500/50'
                        }`}
                      >
                        <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] font-black">
                          {item.symbol}
                        </span>
                        <span>{item.ticker}</span>
                        <span className="text-[11px] text-theme-textMuted font-mono font-medium">
                          {item.currentPrice}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Simulated Query & Trigger */}
                <div className="flex items-center gap-2 flex-1 max-w-xl">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      value={customQuery}
                      onChange={(e) => setCustomQuery(e.target.value)}
                      placeholder="Ask the Financial Agent a query..."
                      className="w-full text-xs sm:text-sm bg-theme-bgAlt border border-theme-border rounded-xl px-3.5 py-2.5 text-theme-text placeholder-theme-textMuted focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                  <button
                    onClick={() => handleRunAnalysis()}
                    disabled={isSimulating}
                    className="bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 text-slate-950 font-black px-4 py-2.5 rounded-xl text-xs flex items-center gap-1.5 transition-all shadow-md shadow-emerald-500/20 whitespace-nowrap"
                  >
                    {isSimulating ? (
                      <>
                        <RotateCcw className="w-3.5 h-3.5 animate-spin" />
                        <span>Analyzing...</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Run Agent</span>
                      </>
                    )}
                  </button>
                </div>

              </div>

              {/* LIVE LANGGRAPH EXECUTION PIPELINE STEPPER */}
              <div className="mt-6 pt-5 border-t border-theme-border">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-emerald-500" />
                    <span className="text-xs font-bold text-theme-text">LangGraph Node Orchestration</span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-500 font-semibold flex items-center gap-1.5">
                    {isSimulating ? (
                      <>
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Processing state graph...</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                        <span>State Graph Synced</span>
                      </>
                    )}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {AGENT_PIPELINE_STEPS.map((step, idx) => {
                    const StepIcon = step.icon;
                    const isCurrent = isSimulating && simulationStep === idx;
                    const isDone = simulationStep > idx || (!isSimulating && simulationStep === 3);

                    return (
                      <div
                        key={step.id}
                        className={`p-3 rounded-xl border transition-all relative overflow-hidden ${
                          isCurrent
                            ? 'bg-emerald-500/10 border-emerald-500 text-theme-text shadow-sm shadow-emerald-500/10 ring-1 ring-emerald-500/50'
                            : isDone
                            ? 'bg-theme-bgAlt border-emerald-500/30 text-theme-text'
                            : 'bg-theme-bgAlt/50 border-theme-border text-theme-textMuted opacity-60'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center gap-2">
                            <div
                              className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-black ${
                                isDone
                                  ? 'bg-emerald-500 text-slate-950'
                                  : isCurrent
                                  ? 'bg-emerald-500 text-slate-950 animate-bounce'
                                  : 'bg-theme-cardBg text-theme-textMuted border border-theme-border'
                              }`}
                            >
                              {isDone ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : idx + 1}
                            </div>
                            <span className="text-xs font-bold">{step.title}</span>
                          </div>
                          <StepIcon className={`w-3.5 h-3.5 ${isCurrent ? 'text-emerald-500 animate-pulse' : 'text-theme-textMuted'}`} />
                        </div>
                        <p className="text-[11px] text-theme-textMuted line-clamp-1">{step.sub}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* DASHBOARD GRID: METRICS, SENTIMENT, PREDICTION */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* CARD 1: TECHNICAL LEVELS & M2 LIQUIDITY */}
              <div className="bg-theme-bg border border-theme-border rounded-2xl p-6 shadow-soft flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-theme-border mb-4">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-emerald-500" />
                      <h3 className="text-sm font-bold text-theme-text">Technical & Macro Model</h3>
                    </div>
                    <span className="text-xs font-mono font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                      OpenBB Engine
                    </span>
                  </div>

                  {/* Asset summary */}
                  <div className="mb-5 p-3.5 rounded-xl bg-theme-bgAlt border border-theme-border flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-semibold text-theme-textMuted">Spot Weekly Close</p>
                      <h4 className="text-xl font-black text-theme-text">{activeData.currentPrice}</h4>
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-lg">
                        <TrendingUp className="w-3 h-3" />
                        {activeData.change24h}
                      </span>
                    </div>
                  </div>

                  {/* 50% Retracement Formula Benchmarks */}
                  <div className="space-y-2.5 mb-5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-theme-textMuted font-medium">4-Week 50% Level:</span>
                      <span className="font-mono font-bold text-theme-text">{activeData.retracements.week4}</span>
                    </div>
                    <div className="w-full bg-theme-bgAlt rounded-full h-1.5 overflow-hidden">
                      <div className="bg-emerald-500 h-full rounded-full w-[88%]" />
                    </div>

                    <div className="flex items-center justify-between text-xs pt-1">
                      <span className="text-theme-textMuted font-medium">12-Week 50% Level:</span>
                      <span className="font-mono font-bold text-theme-text">{activeData.retracements.week12}</span>
                    </div>
                    <div className="w-full bg-theme-bgAlt rounded-full h-1.5 overflow-hidden">
                      <div className="bg-teal-500 h-full rounded-full w-[72%]" />
                    </div>

                    <div className="flex items-center justify-between text-xs pt-1">
                      <span className="text-theme-textMuted font-medium">26-Week 50% Level:</span>
                      <span className="font-mono font-bold text-theme-text">{activeData.retracements.week26}</span>
                    </div>
                    <div className="w-full bg-theme-bgAlt rounded-full h-1.5 overflow-hidden">
                      <div className="bg-cyan-500 h-full rounded-full w-[60%]" />
                    </div>
                  </div>

                  {/* Macro M2 Liquidity */}
                  <div className="p-3 rounded-xl bg-theme-bgAlt/70 border border-theme-border space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-theme-textMuted font-semibold flex items-center gap-1">
                        <Globe className="w-3 h-3 text-cyan-400" />
                        Federal Reserve M2 Supply:
                      </span>
                      <span className="font-bold text-cyan-500 dark:text-cyan-400 font-mono text-[11px]">
                        {activeData.m2Trend}
                      </span>
                    </div>
                    <p className="text-[11px] text-theme-textMuted">
                      Correlation Coefficient: <strong className="text-theme-text">{activeData.m2Correlation}</strong>
                    </p>
                  </div>
                </div>

                <p className="text-[11px] text-theme-textMuted pt-4 border-t border-theme-border mt-4">
                  Calculated using historical weekly high-low medians as parameterized in the LangGraph agent state.
                </p>
              </div>

              {/* CARD 2: NEWS RETRIEVER & SENTIMENT RADAR */}
              <div className="bg-theme-bg border border-theme-border rounded-2xl p-6 shadow-soft flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-theme-border mb-4">
                    <div className="flex items-center gap-2">
                      <Newspaper className="w-4 h-4 text-cyan-500" />
                      <h3 className="text-sm font-bold text-theme-text">News & Sentiment Radar</h3>
                    </div>
                    <span className="text-xs font-mono font-bold text-cyan-500 bg-cyan-500/10 px-2 py-0.5 rounded-md border border-cyan-500/20">
                      Live Sentiment Index
                    </span>
                  </div>

                  {/* Sentiment Score Gauge */}
                  <div className="mb-4 p-4 rounded-xl bg-theme-bgAlt border border-theme-border text-center relative overflow-hidden">
                    <div className="flex items-center justify-center gap-3 mb-1">
                      <span className="text-3xl font-black text-emerald-500 font-sans">
                        {activeData.sentiment.score}%
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-xs font-black uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        {activeData.sentiment.label}
                      </span>
                    </div>
                    <p className="text-[11px] text-theme-textMuted font-medium">
                      Aggregate sentiment across {activeData.sentiment.analyzedArticles} verified market headlines
                    </p>
                  </div>

                  {/* Scraped Headlines Feed */}
                  <div className="space-y-2.5">
                    <p className="text-xs font-bold text-theme-textMuted uppercase tracking-wider">
                      Recent Streamed Headlines:
                    </p>
                    {activeData.newsHeadlines.map((news, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-theme-bgAlt/80 border border-theme-border hover:border-cyan-500/40 transition-colors"
                      >
                        <p className="text-xs font-bold text-theme-text line-clamp-2 leading-snug mb-1">
                          {news.title}
                        </p>
                        <div className="flex items-center justify-between text-[10px] text-theme-textMuted">
                          <span>{news.source}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-emerald-500 font-bold">{news.sentiment}</span>
                            <span>•</span>
                            <span>{news.time}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-[11px] text-theme-textMuted pt-4 border-t border-theme-border mt-4">
                  Filtered for relevance to cryptocurrency tickers and analyzed through LLM structured sentiment prompts.
                </p>
              </div>

              {/* CARD 3: 4-WEEK PREDICTION & FINANCIAL REPORT */}
              <div className="bg-theme-bg border border-theme-border rounded-2xl p-6 shadow-soft flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-theme-border mb-4">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-purple-500" />
                      <h3 className="text-sm font-bold text-theme-text">Agent Forecast & Guidance</h3>
                    </div>
                    <span className="text-xs font-mono font-bold text-purple-500 bg-purple-500/10 px-2 py-0.5 rounded-md border border-purple-500/20">
                      Reasoning Model
                    </span>
                  </div>

                  {/* Certainty Meter */}
                  <div className="p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/20 mb-4 flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                        Prediction Certainty Score
                      </p>
                      <div className="flex items-baseline gap-1 mt-0.5">
                        <span className="text-2xl font-black text-purple-600 dark:text-purple-300">
                          {activeData.forecast.certainty}
                        </span>
                        <span className="text-xs font-bold text-purple-400">/ 10</span>
                      </div>
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-purple-500 text-white shadow-sm">
                      High Conviction
                    </span>
                  </div>

                  {/* Next 4 Weeks Projections */}
                  <div className="mb-4">
                    <p className="text-xs font-bold text-theme-textMuted uppercase tracking-wider mb-2">
                      Projected 4-Week Close Targets:
                    </p>
                    <div className="grid grid-cols-4 gap-2">
                      {[
                        { label: 'W+1', val: activeData.forecast.week1 },
                        { label: 'W+2', val: activeData.forecast.week2 },
                        { label: 'W+3', val: activeData.forecast.week3 },
                        { label: 'W+4', val: activeData.forecast.week4 }
                      ].map((item, i) => (
                        <div key={i} className="p-2 rounded-xl bg-theme-bgAlt border border-theme-border text-center">
                          <p className="text-[10px] text-theme-textMuted font-bold">{item.label}</p>
                          <p className="text-xs font-mono font-black text-emerald-500 mt-0.5">{item.val}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Executive Summary */}
                  <div className="space-y-2 mb-4">
                    <p className="text-xs font-bold text-theme-text">Executive Synthesis:</p>
                    <p className="text-xs text-theme-textMuted leading-relaxed bg-theme-bgAlt p-3 rounded-xl border border-theme-border">
                      {activeData.forecast.summary}
                    </p>
                  </div>

                  {/* Actionable Strategy */}
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                    <p className="text-[11px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 text-emerald-500" />
                      Actionable Advisory:
                    </p>
                    <p className="text-xs text-theme-text font-medium leading-relaxed">
                      {activeData.forecast.actionablePlan}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-theme-border mt-4 flex items-center justify-between">
                  <span className="text-[10px] text-theme-textMuted font-mono">
                    Model: llama-3.1-8b-instant
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-500 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Autonomous Verification Active</span>
                  </span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 2: LANGGRAPH ARCHITECTURE */}
        {activeTab === 'architecture' && (
          <div className="bg-theme-bg border border-theme-border rounded-2xl p-6 sm:p-8 shadow-soft">
            <div className="max-w-3xl mb-8">
              <h3 className="text-xl font-bold text-theme-text mb-2 flex items-center gap-2">
                <GitBranch className="w-5 h-5 text-purple-500" />
                LangGraph State Machine Architecture
              </h3>
              <p className="text-sm text-theme-textMuted leading-relaxed">
                The agent utilizes an asynchronous StateGraph orchestrating parallel data retrieval, quantitative formula evaluation, and multi-agent consensus reporting.
              </p>
            </div>

            {/* Visual Workflow Flowchart */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-950 border border-slate-800 text-slate-100 overflow-x-auto">
              <div className="min-w-[680px] flex flex-col items-center space-y-6">
                
                {/* Node: User Query */}
                <div className="px-6 py-3 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-black text-slate-200 shadow-md">
                  User Natural Language Query
                </div>

                <div className="w-0.5 h-6 bg-slate-700" />

                {/* Node: Ticker Extractor */}
                <div className="px-6 py-4 rounded-xl bg-purple-900/40 border border-purple-600/50 text-center max-w-sm w-full shadow-lg shadow-purple-950/40">
                  <div className="text-xs font-mono font-bold text-purple-400 uppercase">Step 1 • Ticker Extractor</div>
                  <div className="text-sm font-bold text-white mt-1">Structured Entity Extraction</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Extracts target Ticker enum and asset parameters from prompt</div>
                </div>

                <div className="w-0.5 h-6 bg-slate-700" />

                {/* Branch: Parallel Retrievers */}
                <div className="grid grid-cols-2 gap-8 w-full max-w-2xl">
                  
                  {/* Left Branch: Price Retriever */}
                  <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-600/50 text-center">
                    <div className="text-xs font-mono font-bold text-emerald-400 uppercase">Step 2A • Price Retriever</div>
                    <div className="text-sm font-bold text-white mt-1">OpenBB Quantitative Dataframe</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Weekly OHLCV historical closes & indicators</div>
                  </div>

                  {/* Right Branch: News Retriever */}
                  <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-600/50 text-center">
                    <div className="text-xs font-mono font-bold text-cyan-400 uppercase">Step 2B • News Retriever</div>
                    <div className="text-sm font-bold text-white mt-1">Live Global News Ingestion</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Real-time financial and crypto news stream</div>
                  </div>

                </div>

                <div className="grid grid-cols-2 gap-8 w-full max-w-2xl">
                  <div className="flex justify-center"><div className="w-0.5 h-6 bg-slate-700" /></div>
                  <div className="flex justify-center"><div className="w-0.5 h-6 bg-slate-700" /></div>
                </div>

                {/* Branch: Parallel Analysts */}
                <div className="grid grid-cols-2 gap-8 w-full max-w-2xl">
                  
                  {/* Left Branch: Price Analyst */}
                  <div className="p-4 rounded-xl bg-emerald-900/30 border border-emerald-700/40 text-center">
                    <div className="text-xs font-mono font-bold text-emerald-400 uppercase">Step 3A • Price Analyst</div>
                    <div className="text-sm font-bold text-white mt-1">50% Retracement & M2 Supply</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">4-wk, 12-wk, 26-wk levels + Federal Reserve M2</div>
                  </div>

                  {/* Right Branch: News Analyst */}
                  <div className="p-4 rounded-xl bg-cyan-900/30 border border-cyan-700/40 text-center">
                    <div className="text-xs font-mono font-bold text-cyan-400 uppercase">Step 3B • News Analyst</div>
                    <div className="text-sm font-bold text-white mt-1">Sentiment Scoring Engine</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Bullish/Bearish polarity & narrative context</div>
                  </div>

                </div>

                <div className="w-0.5 h-6 bg-slate-700" />

                {/* Node: Financial Reporter */}
                <div className="px-6 py-4 rounded-xl bg-amber-950/40 border border-amber-600/50 text-center max-w-sm w-full shadow-lg shadow-amber-950/40">
                  <div className="text-xs font-mono font-bold text-amber-400 uppercase">Step 4 • Financial Reporter</div>
                  <div className="text-sm font-bold text-white mt-1">Final Intelligence Report Synthesis</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Consolidates technical forecast, certainty score (0-10) & action plan</div>
                </div>

                <div className="w-0.5 h-6 bg-slate-700" />

                {/* Node: END */}
                <div className="px-6 py-2.5 rounded-full bg-emerald-600 text-slate-950 text-xs font-black shadow-md">
                  END (Consolidated Intelligence Stream & Executive Report)
                </div>

              </div>
            </div>

            {/* Architecture Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="p-4 rounded-xl bg-theme-bgAlt border border-theme-border">
                <h4 className="text-xs font-bold text-theme-text mb-1">StateGraph Modularity</h4>
                <p className="text-xs text-theme-textMuted">
                  Every step modifies a typed <code className="text-emerald-500">AppState</code> dictionary with immutable history tracking.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-theme-bgAlt border border-theme-border">
                <h4 className="text-xs font-bold text-theme-text mb-1">High-Speed LPU Acceleration</h4>
                <p className="text-xs text-theme-textMuted">
                  Sub-second completion utilizing high-throughput dedicated inference engines.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-theme-bgAlt border border-theme-border">
                <h4 className="text-xs font-bold text-theme-text mb-1">Enterprise Ready</h4>
                <p className="text-xs text-theme-textMuted">
                  Seamlessly integrates into internal executive dashboards, risk management tools, and Slack channels.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: ENTERPRISE GUARDRAILS */}
        {activeTab === 'enterprise' && (
          <div className="bg-theme-bg border border-theme-border rounded-2xl p-6 sm:p-8 shadow-soft">
            <div className="max-w-3xl mb-8">
              <h3 className="text-xl font-bold text-theme-text mb-1 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-cyan-500" />
                Institutional Risk Guardrails & Governance
              </h3>
              <p className="text-sm text-theme-textMuted">
                Engineered for financial institutions, trading desks, and asset management platforms requiring deterministic guardrails and zero hallucinations.
              </p>
            </div>

            {/* 4 Pillars of Risk Control */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-5 rounded-2xl bg-theme-bgAlt border border-theme-border flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                  <Sliders className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-theme-text mb-1">Deterministic Formula Enforcement</h4>
                  <p className="text-xs text-theme-textMuted leading-relaxed">
                    All support/resistance thresholds and 50% levels are computed through strict numerical matrices, preventing hallucinations or speculative projections.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-theme-bgAlt border border-theme-border flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-theme-text mb-1">Macro M2 Confluence Verifier</h4>
                  <p className="text-xs text-theme-textMuted leading-relaxed">
                    Short-term momentum alerts must be verified against broader central bank liquidity metrics to prevent false-breakout traps during liquidity squeezes.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-theme-bgAlt border border-theme-border flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center shrink-0">
                  <Radio className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-theme-text mb-1">Automated Dispatch & Alerts</h4>
                  <p className="text-xs text-theme-textMuted leading-relaxed">
                    Dispatches high-conviction reports instantly across internal Slack rooms, CRM triggers, and trading desk notification relays.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-theme-bgAlt border border-theme-border flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-theme-text mb-1">Zero-Data-Retention & Security</h4>
                  <p className="text-xs text-theme-textMuted leading-relaxed">
                    Operates in isolated runtime environments with zero user query logging, private key security, and SOC-2 compliant orchestration.
                  </p>
                </div>
              </div>
            </div>

            {/* Enterprise CTA Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/50 via-theme-bgAlt to-cyan-950/40 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="text-base font-bold text-theme-text">Want to integrate this agent into your workflow?</h4>
                <p className="text-xs text-theme-textMuted max-w-xl">
                  Connect Eazmate's Financial Intelligence Agent with your custom portfolio databases, proprietary indicators, and team channels.
                </p>
              </div>

              <Link
                to="/get-quotation"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-black bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all shadow-lg shadow-emerald-500/20 whitespace-nowrap"
              >
                <span>Request Custom Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}

        {/* BOTTOM FEATURE GRID */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-theme-bg border border-theme-border shadow-soft">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-3">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-theme-text mb-1">50% Retracement Rule</h4>
            <p className="text-xs text-theme-textMuted leading-relaxed">
              Calculates 4, 12, and 26-week median boundaries to detect institutional accumulation zones.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-theme-bg border border-theme-border shadow-soft">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center mb-3">
              <Globe className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-theme-text mb-1">M2 Money Supply Macro</h4>
            <p className="text-xs text-theme-textMuted leading-relaxed">
              Tracks Federal Reserve global liquidity shifts to validate long-term secular market trend strength.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-theme-bg border border-theme-border shadow-soft">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-3">
              <Newspaper className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-theme-text mb-1">Multi-Source Sentiment</h4>
            <p className="text-xs text-theme-textMuted leading-relaxed">
              Real-time news stream scraping with structured reasoning to score market narrative polarity.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-theme-bg border border-theme-border shadow-soft">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center mb-3">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-theme-text mb-1">Certainty Index (0-10)</h4>
            <p className="text-xs text-theme-textMuted leading-relaxed">
              Synthesizes quantitative metrics into calibrated conviction ratings with actionable trade parameters.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

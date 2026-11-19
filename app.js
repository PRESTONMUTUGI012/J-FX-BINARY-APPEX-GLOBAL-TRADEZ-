const DERIV_APP_ID = "34ZfveN7Be9dqW8mOCJAe";
const AFFILIATE_TOKEN = "3A2CFHPG722B";

const DEFAULT_MINUTE_TIMEFRAMES = ['1', '2', '3', '5', '10', '15', '30'];

const exhaustiveAssets = [
    { symbol: '1HZ100V', name: 'Volatility 100 (1s)', market: 'volatility_1s', pip: 2, base: 1428.64, tv: 'DERIV:1HZ100V' },
    { symbol: '1HZ10V', name: 'Volatility 10 (1s)', market: 'volatility_1s', pip: 2, base: 9452.18, tv: 'DERIV:1HZ10V' },
    { symbol: '1HZ25V', name: 'Volatility 25 (1s)', market: 'volatility_1s', pip: 2, base: 5320.45, tv: 'DERIV:1HZ25V' },
    { symbol: '1HZ50V', name: 'Volatility 50 (1s)', market: 'volatility_1s', pip: 2, base: 48912.34, tv: 'DERIV:1HZ50V' },
    { symbol: '1HZ75V', name: 'Volatility 75 (1s)', market: 'volatility_1s', pip: 2, base: 12450.80, tv: 'DERIV:1HZ75V' },
    { symbol: 'R_10', name: 'Volatility 10', market: 'volatility', pip: 3, base: 6321.450, tv: 'DERIV:R_10' },
    { symbol: 'R_25', name: 'Volatility 25', market: 'volatility', pip: 3, base: 3120.100, tv: 'DERIV:R_25' },
    { symbol: 'R_50', name: 'Volatility 50', market: 'volatility', pip: 3, base: 2450.750, tv: 'DERIV:R_50' },
    { symbol: 'R_75', name: 'Volatility 75', market: 'volatility', pip: 3, base: 8940.200, tv: 'DERIV:R_75' },
    { symbol: 'R_100', name: 'Volatility 100', market: 'volatility', pip: 3, base: 4120.900, tv: 'DERIV:R_100' },
    { symbol: 'BOOM500', name: 'Boom 500 Index', market: 'boom_crash', pip: 2, base: 4125.80, tv: 'DERIV:BOOM500' },
    { symbol: 'BOOM1000', name: 'Boom 1000 Index', market: 'boom_crash', pip: 2, base: 11450.20, tv: 'DERIV:BOOM1000' },
    { symbol: 'CRASH500', name: 'Crash 500 Index', market: 'boom_crash', pip: 2, base: 5820.10, tv: 'DERIV:CRASH500' },
    { symbol: 'CRASH1000', name: 'Crash 1000 Index', market: 'boom_crash', pip: 2, base: 7840.15, tv: 'DERIV:CRASH1000' },
    { symbol: 'JD10', name: 'Jump 10 Index', market: 'jump', pip: 2, base: 1240.50, tv: 'DERIV:JD10' },
    { symbol: 'JD25', name: 'Jump 25 Index', market: 'jump', pip: 2, base: 2150.80, tv: 'DERIV:JD25' },
    { symbol: 'JD50', name: 'Jump 50 Index', market: 'jump', pip: 2, base: 3420.10, tv: 'DERIV:JD50' },
    { symbol: 'JD75', name: 'Jump 75 Index', market: 'jump', pip: 2, base: 5120.40, tv: 'DERIV:JD75' },
    { symbol: 'JD100', name: 'Jump 100 Index', market: 'jump', pip: 2, base: 8940.20, tv: 'DERIV:JD100' },
    { symbol: 'NVDA', name: 'NVIDIA', market: 'stocks', pip: 2, base: 142.50, tv: 'NASDAQ:NVDA' },
    { symbol: 'TSLA', name: 'Tesla', market: 'stocks', pip: 2, base: 215.40, tv: 'NASDAQ:TSLA' },
    { symbol: 'AAPL', name: 'Apple', market: 'stocks', pip: 2, base: 228.60, tv: 'NASDAQ:AAPL' },
    { symbol: 'MSFT', name: 'Microsoft', market: 'stocks', pip: 2, base: 425.80, tv: 'NASDAQ:MSFT' },
    { symbol: 'AMZN', name: 'Amazon', market: 'stocks', pip: 2, base: 195.20, tv: 'NASDAQ:AMZN' },
    { symbol: 'GOOGL', name: 'Google', market: 'stocks', pip: 2, base: 178.40, tv: 'NASDAQ:GOOGL' },
    { symbol: 'META', name: 'Meta', market: 'stocks', pip: 2, base: 560.10, tv: 'NASDAQ:META' },
    { symbol: 'NFLX', name: 'Netflix', market: 'stocks', pip: 2, base: 742.30, tv: 'NASDAQ:NFLX' },
    { symbol: 'SPY', name: 'SPY ETF', market: 'stocks', pip: 2, base: 585.50, tv: 'AMEX:SPY' },
    { symbol: 'QQQ', name: 'QQQ ETF', market: 'stocks', pip: 2, base: 502.10, tv: 'NASDAQ:QQQ' },
    { symbol: 'frxEURUSD', name: 'EUR/USD', market: 'forex', pip: 5, base: 1.08450, tv: 'FX:EURUSD' },
    { symbol: 'frxGBPUSD', name: 'GBP/USD', market: 'forex', pip: 5, base: 1.27140, tv: 'FX:GBPUSD' },
    { symbol: 'frxUSDJPY', name: 'USD/JPY', market: 'forex', pip: 3, base: 153.420, tv: 'FX:USDJPY' },
    { symbol: 'frxAUDUSD', name: 'AUD/USD', market: 'forex', pip: 5, base: 0.65840, tv: 'FX:AUDUSD' },
    { symbol: 'frxUSDCAD', name: 'USD/CAD', market: 'forex', pip: 5, base: 1.38910, tv: 'FX:USDCAD' },
    { symbol: 'frxNZDUSD', name: 'NZD/USD', market: 'forex', pip: 5, base: 0.59840, tv: 'FX:NZDUSD' },
    { symbol: 'frxEURGBP', name: 'EUR/GBP', market: 'forex', pip: 5, base: 0.85310, tv: 'FX:EURGBP' },
    { symbol: 'frxUSDCHF', name: 'USD/CHF', market: 'forex', pip: 5, base: 0.88410, tv: 'FX:USDCHF' },
    { symbol: 'frxAUDJPY', name: 'AUD/JPY', market: 'forex', pip: 3, base: 101.200, tv: 'FX:AUDJPY' },
    { symbol: 'frxGBPJPY', name: 'GBP/JPY', market: 'forex', pip: 3, base: 194.800, tv: 'FX:GBPJPY' },
    { symbol: 'frxXAUUSD', name: 'Gold/USD', market: 'commodities', pip: 2, base: 2742.85, tv: 'OANDA:XAUUSD' },
    { symbol: 'frxXAGUSD', name: 'Silver/USD', market: 'commodities', pip: 3, base: 32.410, tv: 'OANDA:XAGUSD' },
    { symbol: 'frxWTIUSD', name: 'Crude Oil', market: 'commodities', pip: 2, base: 71.45, tv: 'TVC:USOIL' },
    { symbol: 'UK Brent', name: 'UK Brent', market: 'commodities', pip: 2, base: 75.80, tv: 'TVC:UKOIL' },
    { symbol: 'Copper', name: 'Copper', market: 'commodities', pip: 3, base: 4.150, tv: 'COMEX:HG1!' },
    { symbol: 'cryBTCUSD', name: 'BTC/USD', market: 'crypto', pip: 2, base: 89420.50, tv: 'BINANCE:BTCUSDT' },
    { symbol: 'cryETHUSD', name: 'ETH/USD', market: 'crypto', pip: 2, base: 3145.80, tv: 'BINANCE:ETHUSDT' },
    { symbol: 'cryLTCUSD', name: 'LTC/USD', market: 'crypto', pip: 2, base: 84.25, tv: 'BINANCE:LTCUSDT' }
];

const STRATEGY_TEMPLATES = [
    { type: 'DIFF', name: 'DIFFERS', hitBase: '~90%', payoutMult: 0.095, api: 'DIGITDIFF', ticks: 1, runs: 4, boatId: 9 },
    { type: 'OVER', name: 'OVER 2', hitBase: '~70%', payoutMult: 0.36, api: 'DIGITOVER', ticks: 3, runs: 3, boatId: 8, barrier: '2' },
    { type: 'UNDER', name: 'UNDER 7', hitBase: '~70%', payoutMult: 0.36, api: 'DIGITUNDER', ticks: 3, runs: 3, boatId: 8, barrier: '7' },
    { type: 'EVEN', name: 'EVEN SKEW', hitBase: '~50%', payoutMult: 0.90, api: 'DIGITEVEN', ticks: 5, runs: 3, boatId: 6 },
    { type: 'ODD', name: 'ODD SKEW', hitBase: '~50%', payoutMult: 0.90, api: 'DIGITODD', ticks: 5, runs: 3, boatId: 6 },
    { type: 'CALL', name: 'RISE / CALL', hitBase: '~50%+', payoutMult: 0.88, api: 'CALL', ticks: 5, runs: 2, boatId: 2 },
    { type: 'PUT', name: 'FALL / PUT', hitBase: '~50%+', payoutMult: 0.88, api: 'PUT', ticks: 5, runs: 2, boatId: 2 }
];

let currentCategory = 'all';
let currentSymbol = exhaustiveAssets[0].symbol;
let activeCandleTf = '5';
let autoShiftEnabled = true;
let shiftTimer = null;
let cooldownUntil = 0;
let marketDataStore = {};
let activeAccountMode = 'demo';
let simulatedBalance = 1000.00;
let sessionNetPnl = 0;
let sessionWins = 0;
let sessionLosses = 0;
let consecutiveLosses = 0;
let lastExecutionTimestamp = 0;
let activeAutomationMode = null;

exhaustiveAssets.forEach((a, idx) => {
    const tf = DEFAULT_MINUTE_TIMEFRAMES[idx % DEFAULT_MINUTE_TIMEFRAMES.length];
    const strat = STRATEGY_TEMPLATES[idx % STRATEGY_TEMPLATES.length];
    const digit = (idx * 3 + 2) % 10;

    const adxVal = Number((16 + ((idx * 4.7) % 24)).toFixed(1));
    const wickVal = Number((0.22 + ((idx * 0.06) % 0.36)).toFixed(2));
    const counts = new Array(10).fill(10);
    counts[digit] = 6;

    marketDataStore[a.symbol] = {
        name: a.name,
        pip: a.pip,
        price: a.base.toFixed(a.pip),
        recentDigits: [],
        digitCounts: counts,
        timeframe: tf,
        ticks: strat.ticks,
        runsTarget: strat.runs,
        runsCompleted: 0,
        feederDigit: digit,
        strategy: { ...strat },
        adx: adxVal,
        wickRatio: wickVal,
        lastTickDir: 'up'
    };
});

function evaluateConditionFilters(st) {
    const minAdx = parseFloat(document.getElementById('filter-min-adx')?.value) || 24;
    const maxWick = parseFloat(document.getElementById('filter-max-wick')?.value) || 0.45;
    const maxDigitPct = parseFloat(document.getElementById('filter-max-digit-pct')?.value) || 9;

    const totalDigits = st.digitCounts.reduce((a, b) => a + b, 0) || 1;
    const feederPct = Math.round((st.digitCounts[st.feederDigit] / totalDigits) * 100);

    const adxPass = st.adx >= minAdx;
    const wickPass = st.wickRatio <= maxWick;
    const digitPass = feederPct <= maxDigitPct;

    const reasons = [];
    if (!adxPass) reasons.push(`ADX ${st.adx} < ${minAdx}`);
    if (!wickPass) reasons.push(`Wick ${st.wickRatio} > ${maxWick}`);
    if (!digitPass) reasons.push(`Digit ${feederPct}% > ${maxDigitPct}%`);

    return {
        passed: adxPass && wickPass && digitPass,
        feederPct,
        reasonText: reasons.length === 0
            ? `PASS (ADX ${st.adx} ≥ ${minAdx}, Wick ${st.wickRatio} ≤ ${maxWick}, Digit ${feederPct}%)`
            : `SKIP (${reasons.join(' • ')})`
    };
}

function calculateExpectancyMath(st, stake) {
    const payoutMult = st.strategy.payoutMult;
    const winAmt = Number((stake * payoutMult).toFixed(2));
    const breakEvenPct = ((1 / (1 + payoutMult)) * 100).toFixed(1);
    const winsPerLoss = (1 / payoutMult).toFixed(1);
    const fullRunProfit = Number((winAmt * st.runsTarget).toFixed(2));
    const isSteepAsymmetry = payoutMult < 0.25;

    return {
        winAmt,
        breakEvenPct,
        winsPerLoss,
        fullRunProfit,
        isSteepAsymmetry
    };
}

function refreshAllFilterStatuses() {
    updateSignalUI(currentSymbol);
    renderScanner();
}

function logTransaction(msg, isHighlight = false) {
    const logContainer = document.getElementById('live-transaction-log');
    if (!logContainer) return;
    if (logContainer.querySelector('.italic')) logContainer.innerHTML = '';

    const time = new Date().toLocaleTimeString();
    const row = document.createElement('div');
    row.className = isHighlight
        ? 'p-1.5 rounded bg-emerald-950/80 border border-fxgreen text-fxgreen font-bold'
        : 'p-1 rounded bg-slate-950 border border-slate-800/80 text-slate-300';
    row.innerText = `[${time}] ${msg}`;
    logContainer.prepend(row);
    if (logContainer.children.length > 25) logContainer.lastChild.remove();
}

function dismissSplash() {
    const s = document.getElementById('splash-screen');
    if (s) { s.style.opacity = '0'; setTimeout(() => s.style.display = 'none', 300); }
}

function authDeriv() {
    if (window.derivApiInstance) {
        window.derivApiInstance.startOAuthLogin(AFFILIATE_TOKEN);
    }
}

function openDerivCashier(action) {
    const cashierUrl = action === 'withdraw'
        ? 'https://app.deriv.com/account/cashier/withdrawal'
        : 'https://app.deriv.com/account/cashier/deposit';
    window.open(cashierUrl, '_blank');
}

async function handleAccountSelect(accountId) {
    if (window.derivApiInstance && accountId) {
        const ok = await window.derivApiInstance.connectAuthenticatedWebSocket(accountId);
        if (ok) {
            const acc = window.derivApiInstance.accounts.find(a => a.account === accountId);
            const mode = acc && !acc.isVirtual ? 'real' : 'demo';
            activeAccountMode = mode;
            document.getElementById('btn-demo').className = mode === 'demo' ? "px-3 py-1 rounded-lg font-bold bg-emerald-600 text-white transition" : "px-3 py-1 rounded-lg font-semibold text-slate-400";
            document.getElementById('btn-real').className = mode === 'real' ? "px-3 py-1 rounded-lg font-bold bg-gold text-slate-950 transition" : "px-3 py-1 rounded-lg font-semibold text-slate-400";
            document.getElementById('account-id-label').innerText = mode === 'real' ? 'Real Balance' : 'Demo Balance';
            logTransaction(`Connected OTP WebSocket to account ${accountId}`, true);
        }
    }
}

async function setMode(mode) {
    activeAccountMode = mode;
    document.getElementById('btn-demo').className = mode === 'demo' ? "px-3 py-1 rounded-lg font-bold bg-emerald-600 text-white transition" : "px-3 py-1 rounded-lg font-semibold text-slate-400";
    document.getElementById('btn-real').className = mode === 'real' ? "px-3 py-1 rounded-lg font-bold bg-gold text-slate-950 transition" : "px-3 py-1 rounded-lg font-semibold text-slate-400";
    document.getElementById('account-id-label').innerText = mode === 'real' ? 'Real Balance' : 'Demo Balance';

    if (window.derivApiInstance) {
        const switched = await window.derivApiInstance.switchAccountMode(mode);
        if (switched) {
            const sel = document.getElementById('account-selector');
            if (sel) sel.value = switched.account;
            logTransaction(`Switched to ${mode.toUpperCase()} Account (${switched.account})`, true);
        }
    }
}

function switchCategory(cat) {
    currentCategory = cat;
    ['all', 'volatility_1s', 'volatility', 'boom_crash', 'jump', 'stocks', 'forex', 'commodities', 'crypto'].forEach(c => {
        const btn = document.getElementById(`cat-${c}`);
        if (btn) {
            btn.className = c === cat ? "bg-emerald-600 text-white font-bold py-1.5 px-1 rounded-lg transition" : "bg-slate-900 text-slate-300 py-1.5 px-1 rounded-lg transition border border-slate-800";
        }
    });
    renderScanner();
}

function changeChartTimeframe(tf, syncState = true) {
    activeCandleTf = String(tf);
    document.querySelectorAll('.tf-btn').forEach(btn => {
        btn.className = btn.dataset.tf === activeCandleTf
            ? "tf-btn px-2 py-1 rounded bg-emerald-600 text-white font-bold"
            : "tf-btn px-2 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300";
    });
    if (syncState && marketDataStore[currentSymbol]) {
        marketDataStore[currentSymbol].timeframe = activeCandleTf;
        updateSignalUI(currentSymbol);
    }
    initTradingView(currentSymbol, activeCandleTf);
}

function toggleChartFullscreen() {
    const w = document.getElementById('chart-card-wrapper');
    w.classList.toggle('fixed'); w.classList.toggle('inset-4'); w.classList.toggle('z-50');
}

function initTradingView(sym, tf = '5') {
    const c = document.getElementById('tradingview_advanced_chart');
    if (!c || typeof TradingView === 'undefined') return;
    c.innerHTML = '';
    const assetObj = exhaustiveAssets.find(a => a.symbol === sym);
    const tvSym = (assetObj && assetObj.tv && !assetObj.tv.startsWith('DERIV:')) ? assetObj.tv : "FX:EURUSD";

    new TradingView.widget({
        width: "100%", height: "100%", symbol: tvSym, interval: tf, timezone: "Africa/Nairobi",
        theme: "dark", style: "1", locale: "en", toolbar_bg: "#030712", container_id: "tradingview_advanced_chart"
    });
}

function computeFirmFeederDigit(st) {
    let minCount = Infinity;
    let bestDigit = st.feederDigit;
    st.digitCounts.forEach((cnt, d) => {
        if (cnt < minCount) {
            minCount = cnt;
            bestDigit = d;
        }
    });
    return bestDigit;
}

function buildCommandString(sym, st, filterRes) {
    const maxStreak = parseInt(document.getElementById('max-loss-streak')?.value, 10) || 2;
    return `FILTERED_SIGNAL(Asset=${sym}, TF=${st.timeframe}m, Ticks=${st.ticks}t, Strategy=${st.strategy.api}, Digit=${st.feederDigit}, Runs=${st.runsTarget}, Filter=${filterRes.passed ? 'PASS' : 'SKIP'}, MaxLossStreak=${maxStreak})`;
}

function updatePnlDisplay() {
    const badge = document.getElementById('pnl-summary-badge');
    const scoreEl = document.getElementById('metric-score');
    const streakEl = document.getElementById('noise-readout');
    const maxStreak = parseInt(document.getElementById('max-loss-streak')?.value, 10) || 2;

    if (badge) {
        const sign = sessionNetPnl >= 0 ? '+' : '';
        badge.innerText = `NET P&L: ${sign}$${sessionNetPnl.toFixed(2)}`;
        badge.className = sessionNetPnl >= 0
            ? "text-[10px] font-bold text-slate-950 bg-fxgreen px-2.5 py-1 rounded"
            : "text-[10px] font-bold text-white bg-rose-600 px-2.5 py-1 rounded";
    }
    if (scoreEl) {
        scoreEl.innerText = `${sessionWins}W / ${sessionLosses}L`;
    }
    if (streakEl) {
        streakEl.innerText = `${consecutiveLosses}/${maxStreak}`;
    }
}

function updateSignalUI(sym) {
    const st = marketDataStore[sym];
    if (!st) return;

    const stake = parseFloat(document.getElementById('manual-stake')?.value) || 1.00;
    const filterRes = evaluateConditionFilters(st);
    const expMath = calculateExpectancyMath(st, stake);
    const cmdStr = buildCommandString(sym, st, filterRes);

    if (typeof highlightActiveBoat === 'function') {
        highlightActiveBoat(st.strategy.boatId);
    }

    const filterBadge = document.getElementById('side-signal-live-badge');
    if (filterBadge) {
        filterBadge.innerText = filterRes.passed ? 'FILTER: PASS' : 'FILTER: SKIP';
        filterBadge.className = filterRes.passed
            ? 'text-[9px] font-black bg-fxgreen text-slate-950 px-2 py-0.5 rounded'
            : 'text-[9px] font-black bg-rose-600 text-white px-2 py-0.5 rounded';
    }

    document.getElementById('chart-title-label').innerText = `${st.name} (${sym}) • ${st.timeframe}m Candle + ${st.ticks}t`;
    document.getElementById('live-tick-symbol-tag').innerText = sym;
    document.getElementById('adaptive-shift-status').innerText = `Shifted -> ${st.name} | TF: ${st.timeframe}m | Ticks: ${st.ticks}t | Feeder: [${st.feederDigit}]`;

    document.getElementById('side-sig-asset').innerText = sym;
    document.getElementById('side-sig-contract').innerText = `${st.strategy.name} • ${st.strategy.hitBase}`;
    document.getElementById('side-sig-candle').innerText = `${st.timeframe}m Candle`;
    document.getElementById('side-sig-ticks').innerText = `${st.ticks} ${st.ticks === 1 ? 'Tick' : 'Ticks'}`;
    document.getElementById('side-sig-feeder').innerText = `[ ${st.feederDigit} ]`;
    document.getElementById('side-sig-runs').innerText = `${st.runsCompleted} / ${st.runsTarget} Runs`;
    document.getElementById('side-sig-boat').innerText = aiBoatsDirectory[st.strategy.boatId].name;
    document.getElementById('side-sig-command').innerText = cmdStr;

    const expBox = document.getElementById('expectancy-warning-box');
    const expBe = document.getElementById('exp-breakeven-rate');
    const expText = document.getElementById('exp-asymmetry-text');
    const expVerdict = document.getElementById('exp-filter-verdict');

    if (expBe && expText && expVerdict && expBox) {
        expBe.innerText = `BE: ${expMath.breakEvenPct}%`;
        expText.innerText = `Win +$${expMath.winAmt.toFixed(2)} (${(st.strategy.payoutMult * 100).toFixed(1)}%) vs Loss -$${stake.toFixed(2)}. Full ${st.runsTarget}-run max gain: +$${expMath.fullRunProfit.toFixed(2)} | 1 loss erases ~${expMath.winsPerLoss} wins.`;
        expVerdict.innerText = `Condition Gate: ${filterRes.reasonText}`;
        expVerdict.className = filterRes.passed ? 'text-[9px] font-bold text-fxgreen' : 'text-[9px] font-bold text-rose-400';

        expBox.className = !filterRes.passed
            ? 'bg-rose-950/70 border border-rose-500 rounded-xl p-2.5 space-y-1 text-[10px]'
            : (expMath.isSteepAsymmetry
                ? 'bg-amber-950/60 border border-amber-500/70 rounded-xl p-2.5 space-y-1 text-[10px]'
                : 'bg-emerald-950/50 border border-emerald-500/50 rounded-xl p-2.5 space-y-1 text-[10px]');
    }

    document.getElementById('man-asset').innerText = sym;
    document.getElementById('man-strat').innerText = `${st.strategy.name} [${st.feederDigit}]`;
    document.getElementById('man-trigger').innerText = `${st.timeframe}m • ${st.ticks}t • ${st.runsTarget} Runs`;

    document.getElementById('stable-entry-digit-display').innerText = `[ ${st.feederDigit} ]`;
    document.getElementById('momentum-readout').innerText = `${st.timeframe}m`;
    document.getElementById('streak-lock-badge').innerText = `RUNS: ${st.runsCompleted}/${st.runsTarget}`;

    document.getElementById('metric-adx').innerText = st.adx;
    document.getElementById('metric-vol').innerText = filterRes.passed ? 'Qualified' : 'Chop/Noise';
    document.getElementById('metric-wick').innerText = `${st.wickRatio} / ${(1 - st.wickRatio).toFixed(2)}`;

    updatePnlDisplay();
    renderDigitHeatmap(st);
}

function selectSymbol(sym, name, rotateStrategy = false) {
    currentSymbol = sym;
    const st = marketDataStore[sym];
    if (!st) return;

    st.runsCompleted = 0;
    if (rotateStrategy) {
        const nextIdx = (STRATEGY_TEMPLATES.findIndex(s => s.type === st.strategy.type) + 1) % STRATEGY_TEMPLATES.length;
        st.strategy = { ...STRATEGY_TEMPLATES[nextIdx] };
        st.runsTarget = st.strategy.runs;
        st.ticks = st.strategy.ticks;
        st.timeframe = DEFAULT_MINUTE_TIMEFRAMES[(nextIdx + 2) % DEFAULT_MINUTE_TIMEFRAMES.length];
        st.feederDigit = computeFirmFeederDigit(st);
    }

    activeCandleTf = st.timeframe;
    changeChartTimeframe(activeCandleTf, false);
    updateSignalUI(sym);

    const filterRes = evaluateConditionFilters(st);
    logTransaction(`Scanned -> ${name} (${sym}) | ${st.strategy.name} | Digit [${st.feederDigit}] | ${st.timeframe}m | ${st.ticks}t | ${filterRes.reasonText}`, filterRes.passed);

    if (window.derivApiInstance) {
        window.derivApiInstance.subscribeTicks(sym, handleTick);
    }
    renderScanner();
}

function pickBestCandidateAsset() {
    const pool = currentCategory === 'all' ? exhaustiveAssets : exhaustiveAssets.filter(a => a.market === currentCategory);
    const qualifiedPool = pool.filter(a => a.symbol !== currentSymbol && evaluateConditionFilters(marketDataStore[a.symbol]).passed);
    const searchPool = qualifiedPool.length > 0 ? qualifiedPool : pool.filter(a => a.symbol !== currentSymbol);

    if (searchPool.length === 0) return pool[0];
    searchPool.sort((a, b) => marketDataStore[b.symbol].adx - marketDataStore[a.symbol].adx);
    return searchPool[0];
}

function forceNextMarketShift() {
    const candidate = pickBestCandidateAsset();
    if (candidate) {
        selectSymbol(candidate.symbol, candidate.name, true);
    }
}

function toggleAutoShift() {
    autoShiftEnabled = !autoShiftEnabled;
    const btn = document.getElementById('btn-toggle-auto-shift');
    if (btn) {
        btn.innerText = autoShiftEnabled ? '⏸ Auto-Shift: ON' : '▶ Auto-Shift: OFF';
    }
    logTransaction(`Auto-Shift ${autoShiftEnabled ? 'Enabled' : 'Paused'}.`, true);
}

function startDynamicScannerLoop() {
    if (shiftTimer) clearInterval(shiftTimer);
    shiftTimer = setInterval(() => {
        if (autoShiftEnabled && !activeAutomationMode) {
            forceNextMarketShift();
        }
    }, 12000);
}

function renderDigitHeatmap(st) {
    const container = document.getElementById('digit-frequency-bar');
    if (!container) return;
    const total = st.digitCounts.reduce((a, b) => a + b, 0) || 1;
    container.innerHTML = st.digitCounts.map((cnt, d) => {
        const pct = Math.round((cnt / total) * 100);
        const isTarget = d === st.feederDigit;
        return `
            <div class="p-1 rounded border ${isTarget ? 'bg-emerald-950 border-fxgreen text-fxgreen font-black' : 'bg-slate-950 border-slate-800 text-slate-400'}">
                <div>D${d}</div>
                <div class="text-[9px]">${pct}%</div>
            </div>
        `;
    }).join('');
}

function renderScanner() {
    const list = document.getElementById('scanner-market-list');
    if (!list) return;
    list.innerHTML = '';

    const onlyQualified = document.getElementById('only-qualified-toggle')?.checked;
    let filtered = currentCategory === 'all' ? exhaustiveAssets : exhaustiveAssets.filter(a => a.market === currentCategory);

    if (onlyQualified) {
        const passedList = filtered.filter(a => evaluateConditionFilters(marketDataStore[a.symbol]).passed);
        if (passedList.length > 0) filtered = passedList;
    }

    const sorted = [...filtered].sort((a, b) => marketDataStore[b.symbol].adx - marketDataStore[a.symbol].adx);

    sorted.forEach(m => {
        const st = marketDataStore[m.symbol];
        const filterRes = evaluateConditionFilters(st);
        const isSel = m.symbol === currentSymbol;
        const tickColor = st.lastTickDir === 'up' ? 'tick-up' : 'tick-down';

        const div = document.createElement('div');
        div.onclick = () => selectSymbol(m.symbol, m.name, false);
        div.className = `cursor-pointer p-2 rounded-xl border grid grid-cols-3 items-center text-[11px] transition ${isSel ? 'bg-emerald-950/70 border-fxgreen shadow-[0_0_10px_rgba(0,255,136,0.3)]' : 'bg-slate-900 border-slate-800 hover:border-emerald-500/50 hover:bg-slate-850'}`;
        div.innerHTML = `
            <div><div class="font-bold text-white truncate">${m.name}</div><div class="text-[9px] text-cyan-400">${st.timeframe}m • ${st.ticks}t • ADX ${st.adx}</div></div>
            <div class="text-right"><div class="font-bold font-mono ${tickColor}" id="price-${m.symbol}">${st.price}</div><div class="text-[9px] text-gold truncate">${st.strategy.name}</div></div>
            <div class="text-right font-mono"><div class="${filterRes.passed ? 'text-fxgreen' : 'text-rose-400'} font-bold text-[10px]">${filterRes.passed ? 'PASS' : 'SKIP'}</div><div class="text-[9px] text-emerald-400">Digit [${st.feederDigit}]</div></div>
        `;
        list.appendChild(div);
    });
}

function haltWithGuardrail(reason) {
    activeAutomationMode = null;
    document.getElementById('tx-status-pill').innerText = `🛑 Guardrail Halt: ${reason}`;
    logTransaction(`GUARDRAIL HALT (${reason}) — courtesy of ELHADARTGLOBALFX`, true);
    if (typeof triggerProfitAlert === 'function') {
        triggerProfitAlert(reason, sessionNetPnl);
    }
}

function settleSimulatedOutcome(stake, strategy) {
    const winProb = strategy.type === 'DIFF' ? 0.90 : (strategy.type === 'OVER' || strategy.type === 'UNDER' ? 0.70 : 0.52);
    const isWin = Math.random() < winProb;

    if (isWin) {
        const profit = Number((stake * strategy.payoutMult).toFixed(2));
        sessionWins++;
        consecutiveLosses = 0;
        sessionNetPnl = Number((sessionNetPnl + profit).toFixed(2));
        simulatedBalance = Number((simulatedBalance + profit).toFixed(2));
        return { isWin: true, delta: profit };
    } else {
        const loss = Number(stake.toFixed(2));
        sessionLosses++;
        consecutiveLosses++;
        sessionNetPnl = Number((sessionNetPnl - loss).toFixed(2));
        simulatedBalance = Number(Math.max(0, simulatedBalance - loss).toFixed(2));
        return { isWin: false, delta: -loss };
    }
}

function handleTick(tick) {
    const sym = tick.symbol;
    const q = Number(tick.quote);
    if (isNaN(q)) return;

    const st = marketDataStore[sym];
    if (!st) return;

    const prevPrice = parseFloat(st.price);
    st.price = q.toFixed(tick.pip_size || st.pip || 2);
    st.lastTickDir = q >= prevPrice ? 'up' : 'down';

    const liveDigit = parseInt(st.price.slice(-1), 10);
    if (!isNaN(liveDigit)) {
        st.recentDigits.push(liveDigit);
        if (st.recentDigits.length > 100) st.recentDigits.shift();
        if (st.recentDigits.length >= 25) {
            st.digitCounts = new Array(10).fill(0);
            st.recentDigits.forEach(d => st.digitCounts[d]++);
        }
    }

    const priceEl = document.getElementById(`price-${sym}`);
    if (priceEl) {
        priceEl.innerText = st.price;
        priceEl.className = `font-bold font-mono ${st.lastTickDir === 'up' ? 'tick-up' : 'tick-down'}`;
    }

    if (sym === currentSymbol) {
        const bigQuoteEl = document.getElementById('live-big-quote');
        const bigDigitEl = document.getElementById('live-last-digit-badge');
        if (bigQuoteEl) {
            bigQuoteEl.innerText = st.price;
            bigQuoteEl.className = st.lastTickDir === 'up' ? 'text-fxgreen font-black' : 'text-rose-400 font-black';
        }
        if (bigDigitEl && !isNaN(liveDigit)) {
            bigDigitEl.innerText = liveDigit;
        }
        renderDigitHeatmap(st);

        const now = Date.now();
        const maxStreak = parseInt(document.getElementById('max-loss-streak')?.value, 10) || 2;
        const maxStopLoss = parseFloat(document.getElementById('session-stop-loss')?.value) || 5.00;
        const cooldownSec = parseInt(document.getElementById('loss-cooldown-sec')?.value, 10) || 4;

        if (activeAutomationMode && now >= cooldownUntil && (now - lastExecutionTimestamp > 1000)) {
            const filterCheck = evaluateConditionFilters(st);
            if (!filterCheck.passed) {
                logTransaction(`Skipped tick on ${sym} — Condition Filter failed: ${filterCheck.reasonText}`);
                lastExecutionTimestamp = now;
                return;
            }

            lastExecutionTimestamp = now;
            st.runsCompleted++;

            const stake = activeAutomationMode === 'BULK'
                ? (parseFloat(document.getElementById('bulk-stake').value) || 1.00)
                : (parseFloat(document.getElementById('manual-stake').value) || 1.00);

            const executorName = activeAutomationMode === 'BOAT'
                ? aiBoatsDirectory[currentActiveBoat].name
                : `${activeAutomationMode} GUARDED`;

            if (!window.derivApiInstance || !window.derivApiInstance.isAuthorized) {
                const outcome = settleSimulatedOutcome(stake, st.strategy);
                document.getElementById('account-balance').innerText = `$${simulatedBalance.toLocaleString(undefined, { minimumFractionDigits: 2 })}`;
                const tag = outcome.isWin ? `WIN +$${outcome.delta.toFixed(2)}` : `LOSS -$${Math.abs(outcome.delta).toFixed(2)}`;
                logTransaction(`Run ${st.runsCompleted}/${st.runsTarget} | ${executorName} | ${sym} ${st.strategy.name} [${st.feederDigit}] | ${tag}`, !outcome.isWin);

                if (!outcome.isWin) {
                    cooldownUntil = now + (cooldownSec * 1000);
                    if (consecutiveLosses >= maxStreak) {
                        haltWithGuardrail(`Max Loss Streak (${maxStreak}) Hit`);
                        updateSignalUI(sym);
                        return;
                    }
                    if (sessionNetPnl <= -Math.abs(maxStopLoss)) {
                        haltWithGuardrail(`Session Stop-Loss (-$${Math.abs(maxStopLoss).toFixed(2)}) Hit`);
                        updateSignalUI(sym);
                        return;
                    }
                }
            } else {
                window.derivApiInstance.buyContract({
                    symbol: sym,
                    contractType: st.strategy.api,
                    stake: stake,
                    duration: st.ticks,
                    durationUnit: 't',
                    barrier: st.strategy.barrier || (st.strategy.api.startsWith('DIGIT') ? String(st.feederDigit) : null)
                });
                logTransaction(`Run ${st.runsCompleted}/${st.runsTarget} | ${executorName} | Order sent on ${sym} (${st.ticks}t, flat $${stake.toFixed(2)})`);
            }

            updateSignalUI(sym);

            if (activeAutomationMode && st.runsCompleted >= st.runsTarget) {
                activeAutomationMode = null;
                st.runsCompleted = 0;
                document.getElementById('tx-status-pill').innerText = "Run Cap Reached • Auto-Stopped";
                logTransaction(`Run cap completed (${executorName}) — courtesy of ELHADARTGLOBALFX`, true);
                updateSignalUI(sym);
            }
        }
    }
}

function executeAutomatedManualTrade() {
    const st = marketDataStore[currentSymbol];
    const filterCheck = evaluateConditionFilters(st);
    if (!filterCheck.passed) {
        logTransaction(`Blocked Manual Run on ${currentSymbol}: ${filterCheck.reasonText}`, true);
        return;
    }
    st.runsCompleted = 0;
    consecutiveLosses = 0;
    cooldownUntil = 0;
    activeAutomationMode = 'MANUAL';
    document.getElementById('tx-status-pill').innerText = `🟢 Guarded Manual (${currentSymbol} • ${st.runsTarget} Runs)...`;
    logTransaction(`Started Guarded Manual Run on ${currentSymbol} | ${st.strategy.name} [${st.feederDigit}] | ${filterCheck.reasonText}`, true);
}

function executeAutomatedBulkTrade() {
    const count = parseInt(document.getElementById('bulk-count').value, 10) || 5;
    const topAssets = exhaustiveAssets
        .filter(a => evaluateConditionFilters(marketDataStore[a.symbol]).passed)
        .sort((a, b) => marketDataStore[b.symbol].adx - marketDataStore[a.symbol].adx)
        .slice(0, count);

    if (topAssets.length === 0) {
        logTransaction("Blocked Bulk Basket: No markets currently pass the strict condition filters.", true);
        return;
    }

    selectSymbol(topAssets[0].symbol, topAssets[0].name, false);
    marketDataStore[currentSymbol].runsCompleted = 0;
    consecutiveLosses = 0;
    cooldownUntil = 0;
    activeAutomationMode = 'BULK';
    document.getElementById('tx-status-pill').innerText = `🟢 Qualified Bulk (${topAssets.map(a => a.symbol).join(', ')})...`;
    logTransaction(`Armed Qualified Bulk Basket (${topAssets.length} markets): ${topAssets.map(a => a.symbol).join(', ')}`, true);
}

function startBoatAutomation(boatId) {
    const st = marketDataStore[currentSymbol];
    const filterCheck = evaluateConditionFilters(st);
    if (!filterCheck.passed) {
        logTransaction(`Blocked ${aiBoatsDirectory[boatId].name} on ${currentSymbol}: ${filterCheck.reasonText}`, true);
        return;
    }
    st.runsCompleted = 0;
    consecutiveLosses = 0;
    cooldownUntil = 0;
    activeAutomationMode = 'BOAT';
    document.getElementById('tx-status-pill').innerText = `🟢 ${aiBoatsDirectory[boatId].name} Guarded...`;
    logTransaction(`Running ${aiBoatsDirectory[boatId].name} on ${currentSymbol} | ${filterCheck.reasonText}`, true);
}

function stopAllAutomation() {
    activeAutomationMode = null;
    if (marketDataStore[currentSymbol]) {
        marketDataStore[currentSymbol].runsCompleted = 0;
        updateSignalUI(currentSymbol);
    }
    document.getElementById('tx-status-pill').innerText = "🛑 Stopped by User";
    logTransaction("All automated runs halted manually.", true);
}

function copySideSignalSettings() {
    const st = marketDataStore[currentSymbol];
    const stake = parseFloat(document.getElementById('manual-stake')?.value) || 1.00;
    const filterRes = evaluateConditionFilters(st);
    const expMath = calculateExpectancyMath(st, stake);
    const cmd = buildCommandString(currentSymbol, st, filterRes);
    const summary = `ELHADARTGLOBALFX CONDITION-FILTERED SIGNAL\nAsset: ${st.name} (${currentSymbol})\nStrategy: ${st.strategy.name} (${st.strategy.hitBase})\nBreak-Even Win Rate: ${expMath.breakEvenPct}% (1 loss erases ~${expMath.winsPerLoss} wins)\nCondition Gate: ${filterRes.reasonText}\nFeeder Digit: [${st.feederDigit}] | Minute TF: ${st.timeframe}m | Ticks: ${st.ticks} | Runs Cap: ${st.runsTarget}\nCommand: ${cmd}`;
    navigator.clipboard?.writeText(summary);
    alert(`📋 Copied Signal & Expectancy Brief:\n\n${summary}`);
}

function bootPlatform() {
    let totalSeconds = 90;
    const pBar = document.getElementById('splash-progress-bar');
    const cTxt = document.getElementById('splash-countdown-text');

    const countdownInterval = setInterval(() => {
        totalSeconds--;
        const mins = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
        const secs = String(totalSeconds % 60).padStart(2, '0');
        if (cTxt) cTxt.innerText = `Loading Bloodline: ${mins}:${secs} (Live Ticks Active)`;
        if (pBar) pBar.style.width = `${((90 - totalSeconds) / 90) * 100}%`;

        if (totalSeconds <= 0) {
            clearInterval(countdownInterval);
            dismissSplash();
        }
    }, 1000);

    document.getElementById('header-asset-count').innerText = `${exhaustiveAssets.length} Markets • Condition-Filtered + Expectancy Math`;
    selectSymbol('1HZ100V', 'Volatility 100 (1s)', false);
    renderScanner();
    startDynamicScannerLoop();

    if (typeof DerivAPIConnector !== 'undefined') {
        const api = new DerivAPIConnector(DERIV_APP_ID);
        window.derivApiInstance = api;
        api.onAccountsLoaded = (accounts, selectedId) => {
            const sel = document.getElementById('account-selector');
            if (sel && accounts.length > 0) {
                sel.innerHTML = accounts.map(a => `<option value="${a.account}" ${a.account === selectedId ? 'selected' : ''}>${a.account} (${a.isVirtual ? 'Demo' : 'Real'})</option>`).join('');
                sel.classList.remove('hidden');
            }
        };
        api.onBalanceUpdate = (b) => {
            document.getElementById('account-balance').innerText = `$${Number(b.balance).toLocaleString(undefined, { minimumFractionDigits: 2 })}`;
            const badge = document.getElementById('oauth-connection-badge');
            if (badge && b.loginid) {
                badge.innerText = `🟢 Connected (${b.loginid})`;
                badge.className = "text-[10px] font-mono font-bold text-fxgreen bg-emerald-950 px-2.5 py-1 rounded border border-fxgreen/40";
            }
        };
        api.onContractPurchased = (buyData) => {
            logTransaction(`Deriv Contract #${buyData.contract_id} Executed | Payout: $${buyData.payout}`);
        };
        api.connect(exhaustiveAssets).then(() => {
            api.subscribeTicks(currentSymbol, handleTick);
            api.subscribeMultipleTicks(exhaustiveAssets.map(a => a.symbol), handleTick);
        });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootPlatform);
} else {
    bootPlatform();
}

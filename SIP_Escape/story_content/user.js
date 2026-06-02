window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script19 = function()
{
  var player = GetPlayer();

// Get values
var abase = player.GetVar("ABase");
var qdelivery = player.GetVar("QDelivery");
var quota = player.GetVar("Quota");
var qbase = player.GetVar("QBase");
var qti = player.GetVar("QTI");
var sip = player.GetVar("SIP");

// Format function (adds $ + commas)
function formatCurrency(value) {
  if (value === null || value === undefined || value === "") return "";
  
  return "$" + Number(value).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
}

// Apply formatting
player.SetVar("ABaseFormatted", formatCurrency(abase));
player.SetVar("QDeliveryFormatted", formatCurrency(qdelivery));
player.SetVar("QuotaFormatted", formatCurrency(quota));
player.SetVar("QBaseFormatted", formatCurrency(qbase));
player.SetVar("QTIFormatted", formatCurrency(qti));
player.SetVar("SIPFormatted", formatCurrency(sip));
}

window.Script20 = function()
{
  document.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        document.activeElement.blur();
    }
});
}

window.Script21 = function()
{
  var player = GetPlayer();

// Get values
var abase = player.GetVar("ABase");
var qdelivery = player.GetVar("QDelivery");
var quota = player.GetVar("Quota");
var qbase = player.GetVar("QBase");
var qti = player.GetVar("QTI");
var sip = player.GetVar("SIP");

// Format function (adds $ + commas)
function formatCurrency(value) {
  if (value === null || value === undefined || value === "") return "";
  
  return "$" + Number(value).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
}

// Apply formatting
player.SetVar("ABaseFormatted", formatCurrency(abase));
player.SetVar("QDeliveryFormatted", formatCurrency(qdelivery));
player.SetVar("QuotaFormatted", formatCurrency(quota));
player.SetVar("QBaseFormatted", formatCurrency(qbase));
player.SetVar("QTIFormatted", formatCurrency(qti));
player.SetVar("SIPFormatted", formatCurrency(sip));
}

window.Script22 = function()
{
  var player = GetPlayer();

// Get value from Storyline
var tio = player.GetVar("TIO");

// Format with % (no decimals)
function formatPercent(value) {
  if (value === null || value === undefined || value === "") return "";
  
  return Math.round(value) + "%";
}

// Send back to Storyline
player.SetVar("TIOFormatted", formatPercent(tio));
}

window.Script23 = function()
{
  document.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        document.activeElement.blur();
    }
});
}

window.Script24 = function()
{
  document.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        document.activeElement.blur();
    }
});
}

window.Script25 = function()
{
  var player = GetPlayer();

// Get values
var abase = player.GetVar("ABase");
var qdelivery = player.GetVar("QDelivery");
var quota = player.GetVar("Quota");
var qbase = player.GetVar("QBase");
var qti = player.GetVar("QTI");
var sip = player.GetVar("SIP");

// Format function (adds $ + commas)
function formatCurrency(value) {
  if (value === null || value === undefined || value === "") return "";
  
  return "$" + Number(value).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
}

// Apply formatting
player.SetVar("ABaseFormatted", formatCurrency(abase));
player.SetVar("QDeliveryFormatted", formatCurrency(qdelivery));
player.SetVar("QuotaFormatted", formatCurrency(quota));
player.SetVar("QBaseFormatted", formatCurrency(qbase));
player.SetVar("QTIFormatted", formatCurrency(qti));
player.SetVar("SIPFormatted", formatCurrency(sip));
}

window.Script26 = function()
{
  var player = GetPlayer();

// Get Performance value (should be a decimal like 0.85)
var performance = player.GetVar("Performance");

// Format as clean percentage (no decimals)
function formatPercent(value) {
  if (value === null || value === undefined || value === "") return "";
  
  return Math.round(value * 100) + "%";
}

// Send formatted value back to Storyline
player.SetVar("PerformanceFormatted", formatPercent(performance));
}

window.Script27 = function()
{
  var player = GetPlayer();

// Get values
var abase = player.GetVar("ABase");
var qdelivery = player.GetVar("QDelivery");
var quota = player.GetVar("Quota");
var qbase = player.GetVar("QBase");
var qti = player.GetVar("QTI");
var sip = player.GetVar("SIP");

// Format function (adds $ + commas)
function formatCurrency(value) {
  if (value === null || value === undefined || value === "") return "";
  
  return "$" + Number(value).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
}

// Apply formatting
player.SetVar("ABaseFormatted", formatCurrency(abase));
player.SetVar("QDeliveryFormatted", formatCurrency(qdelivery));
player.SetVar("QuotaFormatted", formatCurrency(quota));
player.SetVar("QBaseFormatted", formatCurrency(qbase));
player.SetVar("QTIFormatted", formatCurrency(qti));
player.SetVar("SIPFormatted", formatCurrency(sip));
}

window.Script28 = function()
{
  var player = GetPlayer();

// Get Performance value (should be a decimal like 0.85)
var performance = player.GetVar("Performance");

// Format as clean percentage (no decimals)
function formatPercent(value) {
  if (value === null || value === undefined || value === "") return "";
  
  return Math.round(value * 100) + "%";
}

// Send formatted value back to Storyline
player.SetVar("PerformanceFormatted", formatPercent(performance));
}

window.Script29 = function()
{
  document.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        document.activeElement.blur();
    }
});
}

window.Script30 = function()
{
  var player = GetPlayer();

// Get value from Storyline
var qband = player.GetVar("QBand%1");

// Format with % (no decimals)
function formatPercent(value) {
  if (value === null || value === undefined || value === "") return "";
  
  return Math.round(value) + "%";
}

// Send back to Storyline
player.SetVar("QBandFormatted", formatPercent(qband));
}

window.Script31 = function()
{
  document.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        document.activeElement.blur();
    }
});
}

window.Script32 = function()
{
  var player = GetPlayer();

// Get values
var abase = player.GetVar("ABase");
var qdelivery = player.GetVar("QDelivery");
var quota = player.GetVar("Quota");
var qbase = player.GetVar("QBase");
var qti = player.GetVar("QTI");
var sip = player.GetVar("SIP");

// Format function (adds $ + commas)
function formatCurrency(value) {
  if (value === null || value === undefined || value === "") return "";
  
  return "$" + Number(value).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
}

// Apply formatting
player.SetVar("ABaseFormatted", formatCurrency(abase));
player.SetVar("QDeliveryFormatted", formatCurrency(qdelivery));
player.SetVar("QuotaFormatted", formatCurrency(quota));
player.SetVar("QBaseFormatted", formatCurrency(qbase));
player.SetVar("QTIFormatted", formatCurrency(qti));
player.SetVar("SIPFormatted", formatCurrency(sip));
}

window.Script33 = function()
{
  var player = GetPlayer();

// Get values
var abase = player.GetVar("ABase");
var qdelivery = player.GetVar("QDelivery");
var quota = player.GetVar("Quota");
var qbase = player.GetVar("QBase");
var qti = player.GetVar("QTI");
var sip = player.GetVar("SIP");

// Format function (adds $ + commas)
function formatCurrency(value) {
  if (value === null || value === undefined || value === "") return "";
  
  return "$" + Number(value).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
}

// Apply formatting
player.SetVar("ABaseFormatted", formatCurrency(abase));
player.SetVar("QDeliveryFormatted", formatCurrency(qdelivery));
player.SetVar("QuotaFormatted", formatCurrency(quota));
player.SetVar("QBaseFormatted", formatCurrency(qbase));
player.SetVar("QTIFormatted", formatCurrency(qti));
player.SetVar("SIPFormatted", formatCurrency(sip));
}

window.Script34 = function()
{
  (function () {
    function dropConfetti() {
        const duration = 2000;
        const animationEnd = Date.now() + duration;
        const colors = ["#001E60", "#993EF4", "#0053E2", "#4DBDF5", "#00D0CD"];

        function frame() {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return;
            }

            const particleCount = 50 * (timeLeft / duration);

            confetti({
                particleCount,
                startVelocity: 30,
                spread: 360,
                origin: { x: Math.random(), y: Math.random() - 0.2 },
                colors,
            });

            requestAnimationFrame(frame);
        }

        frame();
    }

    // Load the confetti library if it is not already available
    if (typeof window.confetti === "undefined") {
        const existingScript = document.querySelector('script[data-confetti-lib="true"]');

        if (existingScript) {
            existingScript.addEventListener("load", dropConfetti, { once: true });
            return;
        }

        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1";
        script.setAttribute("data-confetti-lib", "true");
        script.onload = dropConfetti;
        document.body.appendChild(script);
    } else {
        dropConfetti();
    }
})();
}

};

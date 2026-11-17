const pptxgen = require('pptxgenjs');

let pres = new pptxgen();

// Modern Widescreen 16:9 layout (13.333 inches x 7.5 inches)
pres.defineLayout({ name: 'WIDE_16_9', width: 13.333, height: 7.5 });
pres.layout = 'WIDE_16_9';

// Theme Colors
const NAVY = '0B4D9C';
const DARK_NAVY = '0A1128';
const LIGHT_BG = 'F8FAFC';
const WHITE = 'FFFFFF';
const TEXT_DARK = '1E293B';
const TEXT_MUTED = '64748B';
const GREEN = '10B981';
const BLUE_ACCENT = '0284C7';
const AMBER = 'F59E0B';
const PURPLE = '7C3AED';

// Safe Canvas Limits:
// Left: 0.8", Right: 12.53" (Total usable width: 11.73")
// Top: 0.4", Bottom: 6.9" (Total usable height: 6.5")

function addSlideHeader(slide, title, category = "SRU | OS PRODUCT 11") {
  // Top decorative color strip
  slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: '100%', h: 0.12, fill: { color: NAVY } });

  // Category Tag
  slide.addText(category.toUpperCase(), {
    x: 0.8, y: 0.35, w: 10.0, h: 0.25,
    fontSize: 10.5, fontFace: 'Arial', bold: true, color: BLUE_ACCENT
  });

  // Main Slide Title
  slide.addText(title, {
    x: 0.8, y: 0.62, w: 11.7, h: 0.55,
    fontSize: 22, fontFace: 'Arial', bold: true, color: NAVY
  });

  // Clean Separator Line
  slide.addShape(pres.ShapeType.line, {
    x: 0.8, y: 1.25, w: 11.73, h: 0,
    line: { color: 'CBD5E1', width: 1.2 }
  });
}

// ============================================================================
// SLIDE 1: Title Slide (Dark Theme)
// ============================================================================
let slide1 = pres.addSlide();
slide1.background = { color: DARK_NAVY };

// Top University Header
slide1.addShape(pres.ShapeType.roundRect, {
  x: 0.8, y: 0.7, w: 1.2, h: 0.48, rectRadius: 0.08, fill: { color: NAVY }
});
slide1.addText("SRU", {
  x: 0.8, y: 0.7, w: 1.2, h: 0.48,
  fontSize: 18, fontFace: 'Arial', bold: true, color: WHITE, align: 'center'
});
slide1.addText("DEPARTMENT OF COMPUTER SCIENCE & ENGINEERING", {
  x: 2.2, y: 0.8, w: 9.5, h: 0.3,
  fontSize: 11, fontFace: 'Arial', bold: true, color: '94A3B8'
});

// Main Title
slide1.addText("EV Charging Station\nAllocation System", {
  x: 0.8, y: 1.6, w: 11.7, h: 1.6,
  fontSize: 38, fontFace: 'Arial', bold: true, color: WHITE, lineSpacing: 44
});

// Subtitle
slide1.addText("Product 11: Semaphore-Based Software Products", {
  x: 0.8, y: 3.35, w: 11.7, h: 0.45,
  fontSize: 17, fontFace: 'Arial', bold: true, color: '38BDF8'
});

// Two Badges
slide1.addShape(pres.ShapeType.roundRect, {
  x: 0.8, y: 4.05, w: 3.8, h: 0.45, rectRadius: 0.08, fill: { color: '1E293B' }, line: { color: '334155', width: 1 }
});
slide1.addText("Main OS Concept: Counting Semaphore", {
  x: 0.8, y: 4.05, w: 3.8, h: 0.45,
  fontSize: 10.5, fontFace: 'Arial', color: 'E2E8F0', align: 'center'
});

slide1.addShape(pres.ShapeType.roundRect, {
  x: 4.8, y: 4.05, w: 3.8, h: 0.45, rectRadius: 0.08, fill: { color: '1E293B' }, line: { color: '334155', width: 1 }
});
slide1.addText("Feature: 4-Stage Charger Lifecycle", {
  x: 4.8, y: 4.05, w: 3.8, h: 0.45,
  fontSize: 10.5, fontFace: 'Arial', color: 'E2E8F0', align: 'center'
});

// Presenter Information Box
slide1.addShape(pres.ShapeType.roundRect, {
  x: 0.8, y: 4.95, w: 11.73, h: 1.7, rectRadius: 0.1, fill: { color: '111827' }, line: { color: '1E293B', width: 1 }
});
slide1.addText("Presented by: Purna Chandar Reddy | Course: Operating Systems Laboratory", {
  x: 1.1, y: 5.2, w: 11.1, h: 0.35,
  fontSize: 14, fontFace: 'Arial', bold: true, color: WHITE
});
slide1.addText("Focus: Concurrency Control, Counting Semaphore Synchronization & Resource Allocation", {
  x: 1.1, y: 5.65, w: 11.1, h: 0.35,
  fontSize: 12, fontFace: 'Arial', color: '94A3B8'
});
slide1.addText("SR University | B.Tech Computer Science & Engineering", {
  x: 1.1, y: 6.05, w: 11.1, h: 0.35,
  fontSize: 11, fontFace: 'Arial', color: '64748B'
});

// ============================================================================
// SLIDE 2: Problem Statement & Motivation
// ============================================================================
let slide2 = pres.addSlide();
slide2.background = { color: LIGHT_BG };
addSlideHeader(slide2, "1. Problem Statement & Motivation");

// Question Banner
slide2.addShape(pres.ShapeType.roundRect, {
  x: 0.8, y: 1.5, w: 11.73, h: 1.3, rectRadius: 0.1, fill: { color: 'EEF2FF' }, line: { color: 'C7D2FE', width: 1.2 }
});
slide2.addText("THE CORE QUESTION (FROM SPECIFICATION):", {
  x: 1.1, y: 1.68, w: 11.1, h: 0.25,
  fontSize: 10.5, fontFace: 'Arial', bold: true, color: NAVY
});
slide2.addText("\"More EVs request charging than the number of available charging points.\nHow can the software limit simultaneous charging?\"", {
  x: 1.1, y: 2.0, w: 11.1, h: 0.65,
  fontSize: 15.5, fontFace: 'Arial', bold: true, color: '1E293B', italic: true
});

// 3 Key Insight Cards
const s2Cards = [
  { title: "1. Hardware Limit", desc: "Charging stations have a finite number of physical charging bays (N = 3). Simultaneous connections beyond 3 cannot be physically served.", color: NAVY },
  { title: "2. Resource Contention", desc: "When 5 or more EVs request power at once, uncontrolled access causes race conditions and equipment failure.", color: AMBER },
  { title: "3. OS Synchronization", desc: "Software must serialize requests using an OS Counting Semaphore, granting slots atomically and safely queuing excess vehicles.", color: GREEN }
];

s2Cards.forEach((c, idx) => {
  const cardX = 0.8 + idx * 4.04;
  slide2.addShape(pres.ShapeType.roundRect, {
    x: cardX, y: 3.05, w: 3.65, h: 3.7, rectRadius: 0.1, fill: { color: WHITE }, line: { color: 'E2E8F0', width: 1 }
  });
  slide2.addShape(pres.ShapeType.rect, {
    x: cardX, y: 3.05, w: 3.65, h: 0.08, fill: { color: c.color }
  });
  slide2.addText(c.title, {
    x: cardX + 0.25, y: 3.3, w: 3.15, h: 0.4,
    fontSize: 15, fontFace: 'Arial', bold: true, color: NAVY
  });
  slide2.addText(c.desc, {
    x: cardX + 0.25, y: 3.85, w: 3.15, h: 2.7,
    fontSize: 12.5, fontFace: 'Arial', color: TEXT_DARK, lineSpacing: 18
  });
});

// ============================================================================
// SLIDE 3: Main OS Concept - Counting Semaphore
// ============================================================================
let slide3 = pres.addSlide();
slide3.background = { color: LIGHT_BG };
addSlideHeader(slide3, "2. Main OS Concept: Counting Semaphore");

// Left Card: What is it?
slide3.addShape(pres.ShapeType.roundRect, {
  x: 0.8, y: 1.5, w: 5.65, h: 5.3, rectRadius: 0.1, fill: { color: WHITE }, line: { color: 'E2E8F0', width: 1 }
});
slide3.addText("What is a Counting Semaphore?", {
  x: 1.1, y: 1.75, w: 5.05, h: 0.35,
  fontSize: 16, fontFace: 'Arial', bold: true, color: NAVY
});
const semBullets = [
  "A synchronization primitive initialized to integer N (here N = 3 chargers).",
  "Manages access to a finite pool of identical hardware resources.",
  "acquire() [P operation]: Decrements the counter. If counter == 0, the thread BLOCKS and sleeps in the wait queue.",
  "release() [V operation]: Increments the counter and WAKES UP one waiting thread in FIFO order.",
  "Atomicity: Guarantees thread-safe resource tracking without CPU spin-locking."
];
slide3.addText(semBullets.map(b => "• " + b).join("\n\n"), {
  x: 1.1, y: 2.25, w: 5.05, h: 4.3,
  fontSize: 12, fontFace: 'Arial', color: TEXT_DARK, lineSpacing: 17
});

// Right Card: Why Counting Semaphore over Mutex?
slide3.addShape(pres.ShapeType.roundRect, {
  x: 6.85, y: 1.5, w: 5.68, h: 5.3, rectRadius: 0.1, fill: { color: 'F0FDF4' }, line: { color: 'BBF7D0', width: 1.2 }
});
slide3.addText("Why Counting Semaphore vs Mutex?", {
  x: 7.15, y: 1.75, w: 5.05, h: 0.35,
  fontSize: 16, fontFace: 'Arial', bold: true, color: '166534'
});
const vsTable = [
  "Mutex (Binary Semaphore): Limits concurrency to exactly 1. If we used a Mutex, only 1 car could charge while 2 bays sat completely wasted!",
  "Counting Semaphore (N = 3): Allows exactly 3 cars to charge concurrently, maximizing resource efficiency while throttling car #4 and #5.",
  "Queue Management: Blocked threads consume zero CPU cycles while waiting.",
  "Result: 100% station utilization with zero race conditions."
];
slide3.addText(vsTable.map(b => "✔ " + b).join("\n\n"), {
  x: 7.15, y: 2.25, w: 5.05, h: 4.3,
  fontSize: 12, fontFace: 'Arial', color: '14532D', lineSpacing: 18
});

// ============================================================================
// SLIDE 4: Unique Implementation Feature - Charger Lifecycle
// ============================================================================
let slide4 = pres.addSlide();
slide4.background = { color: LIGHT_BG };
addSlideHeader(slide4, "3. Unique Implementation Feature: Charger Lifecycle");

slide4.addText("The software maps physical charger hardware states directly to OS thread lifecycle states:", {
  x: 0.8, y: 1.45, w: 11.73, h: 0.35,
  fontSize: 13.5, fontFace: 'Arial', color: TEXT_DARK
});

const lifecycleSteps = [
  { num: "STAGE 1", name: "Available", desc: "Charger is idle, plug docked.\n\nSemaphore permit is available (permit > 0). Ready for arriving vehicle.", color: GREEN },
  { num: "STAGE 2", name: "Charging", desc: "EV acquires permit.\n\nEntering Critical Section.\n\nPower flows; battery fills (0% -> 100%).", color: BLUE_ACCENT },
  { num: "STAGE 3", name: "Completed", desc: "Target 100% SoC reached.\n\nPower flow cuts off automatically.\n\nVehicle prepares to disconnect.", color: AMBER },
  { num: "STAGE 4", name: "Released", desc: "Cable unplugged.\n\nsem.release() called.\n\nPermit returned to pool; bay resets to Available.", color: PURPLE }
];

lifecycleSteps.forEach((s, idx) => {
  const stepX = 0.8 + idx * 3.01;
  slide4.addShape(pres.ShapeType.roundRect, {
    x: stepX, y: 1.95, w: 2.68, h: 4.8, rectRadius: 0.1, fill: { color: WHITE }, line: { color: 'E2E8F0', width: 1.2 }
  });
  slide4.addShape(pres.ShapeType.roundRect, {
    x: stepX + 0.25, y: 2.2, w: 2.18, h: 0.32, rectRadius: 0.06, fill: { color: s.color }
  });
  slide4.addText(s.num, {
    x: stepX + 0.25, y: 2.2, w: 2.18, h: 0.32,
    fontSize: 9.5, fontFace: 'Arial', bold: true, color: WHITE, align: 'center'
  });
  slide4.addText(s.name, {
    x: stepX + 0.15, y: 2.75, w: 2.38, h: 0.4,
    fontSize: 18, fontFace: 'Arial', bold: true, color: NAVY, align: 'center'
  });
  slide4.addText(s.desc, {
    x: stepX + 0.15, y: 3.3, w: 2.38, h: 3.2,
    fontSize: 12, fontFace: 'Arial', color: TEXT_DARK, align: 'center', lineSpacing: 18
  });
});

// ============================================================================
// SLIDE 5: Parallel Processing & Same-Resource Contention
// ============================================================================
let slide5 = pres.addSlide();
slide5.background = { color: LIGHT_BG };
addSlideHeader(slide5, "4. Parallel Processing & Same-Resource Contention");

// Scenario Box
slide5.addShape(pres.ShapeType.roundRect, {
  x: 0.8, y: 1.5, w: 11.73, h: 1.15, rectRadius: 0.1, fill: { color: 'F5F3FF' }, line: { color: 'DDD6FE', width: 1.2 }
});
slide5.addText("PARALLEL PROCESSING SCENARIO (EXAMINER QUESTION):", {
  x: 1.1, y: 1.68, w: 11.1, h: 0.25,
  fontSize: 10.5, fontFace: 'Arial', bold: true, color: PURPLE
});
slide5.addText("\"What happens when 2 cars arrive in parallel and request the EXACT SAME charging point (Bay 01)?\"", {
  x: 1.1, y: 1.98, w: 11.1, h: 0.5,
  fontSize: 15, fontFace: 'Arial', bold: true, color: '1E293B'
});

// Left Card: Mutual Exclusion
slide5.addShape(pres.ShapeType.roundRect, {
  x: 0.8, y: 2.85, w: 5.65, h: 3.95, rectRadius: 0.1, fill: { color: WHITE }, line: { color: 'E2E8F0', width: 1 }
});
slide5.addText("1. Mutual Exclusion (Mutex)", {
  x: 1.1, y: 3.1, w: 5.05, h: 0.35,
  fontSize: 15, fontFace: 'Arial', bold: true, color: NAVY
});
const pLeft = [
  "Concurrent Arrival: Car A (Tesla) and Car B (Nexon) arrive at the exact same millisecond.",
  "Non-Shareable Hardware: Only one car can physically plug into Bay 01. The Mutex lock grants Bay 01 to Car A.",
  "Thread Serialization: Car B encounters resource contention and transitions to the BLOCKED state without CPU busy-waiting."
];
slide5.addText(pLeft.map(b => "• " + b).join("\n\n"), {
  x: 1.1, y: 3.6, w: 5.05, h: 3.0,
  fontSize: 12, fontFace: 'Arial', color: TEXT_DARK, lineSpacing: 18
});

// Right Card: Conflict Resolution
slide5.addShape(pres.ShapeType.roundRect, {
  x: 6.85, y: 2.85, w: 5.68, h: 3.95, rectRadius: 0.1, fill: { color: WHITE }, line: { color: 'E2E8F0', width: 1 }
});
slide5.addText("2. Conflict Resolution Feature", {
  x: 7.15, y: 3.1, w: 5.05, h: 0.35,
  fontSize: 15, fontFace: 'Arial', bold: true, color: GREEN
});
const pRight = [
  "Visual Contention Alert: Dashboard displays '⚠️ Conflict: Car B is BLOCKED on Bay 01!'.",
  "Remove Button: Operator clicks 'Remove / Resolve Conflict'.",
  "Dynamic Rerouting: System unblocks Car B and dynamically reroutes it to free Bay 02, allowing both cars to charge simultaneously without conflict!"
];
slide5.addText(pRight.map(b => "• " + b).join("\n\n"), {
  x: 7.15, y: 3.6, w: 5.05, h: 3.0,
  fontSize: 12, fontFace: 'Arial', color: TEXT_DARK, lineSpacing: 18
});

// ============================================================================
// SLIDE 6: Backend Code Mapping (Exact 25 Lines)
// ============================================================================
let slide6 = pres.addSlide();
slide6.background = { color: LIGHT_BG };
addSlideHeader(slide6, "5. Backend Implementation (Exact 25 Lines)");

// Left: Code Box
slide6.addShape(pres.ShapeType.roundRect, {
  x: 0.8, y: 1.5, w: 5.65, h: 5.3, rectRadius: 0.1, fill: { color: '0A1128' }
});
const codeContent = 
`import threading
import time

computer_sem = threading.Semaphore(3)

def use_computer(student):
    print(student, "is requesting a computer")
    computer_sem.acquire()
    print(student, "got a computer")
    time.sleep(2)
    print(student, "finished using the computer")
    computer_sem.release()

students = ["S1", "S2", "S3", "S4", "S5"]
threads = []

for student in students:
    t = threading.Thread(target=use_computer, args=(student,))
    threads.append(t)
    t.start()

for t in threads:
    t.join()

print("All requests completed")`;

slide6.addText(codeContent, {
  x: 1.0, y: 1.65, w: 5.25, h: 5.0,
  fontSize: 9.5, fontFace: 'Courier New', color: '38BDF8', lineSpacing: 13
});

// Right: Viva Explanation
slide6.addShape(pres.ShapeType.roundRect, {
  x: 6.85, y: 1.5, w: 5.68, h: 5.3, rectRadius: 0.1, fill: { color: WHITE }, line: { color: 'E2E8F0', width: 1 }
});
slide6.addText("Line-by-Line OS Concept Mapping:", {
  x: 7.15, y: 1.75, w: 5.05, h: 0.35,
  fontSize: 15, fontFace: 'Arial', bold: true, color: NAVY
});
const codeLines = [
  "Line 4: Semaphore(3) initializes counting semaphore with 3 permits (3 chargers).",
  "Line 7: Request stage: thread announces resource request.",
  "Line 8: acquire() blocks if count == 0; decrements count.",
  "Line 9-10: Critical Section execution (Available -> Charging for 2s).",
  "Line 11-12: release() signals waiting threads (Completed -> Released).",
  "Line 17-20: 5 threads spawned concurrently (S1..S5).",
  "Line 22-24: join() ensures main thread waits for all children."
];
slide6.addText(codeLines.map(b => "✔ " + b).join("\n\n"), {
  x: 7.15, y: 2.2, w: 5.05, h: 4.4,
  fontSize: 11.5, fontFace: 'Arial', color: TEXT_DARK, lineSpacing: 16
});

// ============================================================================
// SLIDE 7: Summary & Live Demonstration
// ============================================================================
let slide7 = pres.addSlide();
slide7.background = { color: DARK_NAVY };

slide7.addText("Project Summary & Live Demonstration", {
  x: 0.8, y: 0.7, w: 11.73, h: 0.7,
  fontSize: 30, fontFace: 'Arial', bold: true, color: WHITE
});

// 3 Summary Cards
const s7Cards = [
  { title: "What We Solved", desc: "Throttled excess concurrent charging requests using an OS Counting Semaphore without busy-waiting or hardware damage.", color: BLUE_ACCENT },
  { title: "What We Built", desc: "Real-time interactive dashboard modeling the 4-stage charger lifecycle, waiting queue, and conflict resolution.", color: GREEN },
  { title: "How It Works 24/7", desc: "Deployed to GitHub Pages with global CDN availability for instant demonstration on any device.", color: PURPLE }
];

s7Cards.forEach((c, idx) => {
  const cardX = 0.8 + idx * 4.04;
  slide7.addShape(pres.ShapeType.roundRect, {
    x: cardX, y: 1.75, w: 3.65, h: 2.7, rectRadius: 0.1, fill: { color: '111827' }, line: { color: '1E293B', width: 1 }
  });
  slide7.addShape(pres.ShapeType.rect, {
    x: cardX, y: 1.75, w: 3.65, h: 0.08, fill: { color: c.color }
  });
  slide7.addText(c.title, {
    x: cardX + 0.25, y: 2.05, w: 3.15, h: 0.35,
    fontSize: 15, fontFace: 'Arial', bold: true, color: WHITE
  });
  slide7.addText(c.desc, {
    x: cardX + 0.25, y: 2.55, w: 3.15, h: 1.7,
    fontSize: 12.5, fontFace: 'Arial', color: '94A3B8', lineSpacing: 18
  });
});

// Live Link Banner
slide7.addShape(pres.ShapeType.roundRect, {
  x: 0.8, y: 4.8, w: 11.73, h: 1.9, rectRadius: 0.1, fill: { color: NAVY }, line: { color: '38BDF8', width: 1.2 }
});
slide7.addText("🌐 24/7 LIVE DASHBOARD URL FOR LAB DEMONSTRATION:", {
  x: 1.1, y: 5.1, w: 11.1, h: 0.3,
  fontSize: 12, fontFace: 'Arial', bold: true, color: '38BDF8'
});
slide7.addText("https://2503a52753-purna.github.io/OS-Product11-EV-Charging-System/", {
  x: 1.1, y: 5.5, w: 11.1, h: 0.45,
  fontSize: 17, fontFace: 'Arial', bold: true, color: WHITE
});
slide7.addText("Presented for Operating Systems Course Project Evaluation | SR University", {
  x: 1.1, y: 6.1, w: 11.1, h: 0.3,
  fontSize: 11, fontFace: 'Arial', color: '94A3B8'
});

// Write File
pres.writeFile({ fileName: "EV_Charging_Station_Presentation.pptx" }).then(() => {
  console.log("Successfully generated EV_Charging_Station_Presentation.pptx with perfect margins!");
}).catch(err => {
  console.error("Error creating PPTX:", err);
});

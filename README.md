# EV Charging Station Allocation System (Product 11)
> **SR University | Operating Systems Course Project**  
> **Product Cycle: Semaphore-Based Software Products**

🌐 **24/7 Live Working Dashboard**: [https://2503a52753-purna.github.io/OS-Product11-EV-Charging-System/](https://2503a52753-purna.github.io/OS-Product11-EV-Charging-System/)

---

## 📌 Project Overview

| Feature | Specification |
| :--- | :--- |
| **Software Product** | **EV Charging Station Allocation System** |
| **Main OS Concept** | **Counting Semaphore** (`threading.Semaphore(3)`) |
| **Main Problem Solved** | More EVs request charging than the number of available charging points. |
| **Unique Implementation Feature** | Charger Lifecycle: $\text{Available} \longrightarrow \text{Charging} \longrightarrow \text{Completed} \longrightarrow \text{Released}$ |

---

## ⚡ Core OS Concepts Demonstrated

1. **Counting Semaphore ($N = 3$)**:
   - Manages a pool of 3 identical charging bays without race conditions.
   - When permits $> 0$, incoming EV threads acquire the resource immediately.
   - When permits $= 0$, incoming EV threads block and wait in the OS Queue.

2. **Charger Lifecycle Tracking**:
   - `Available`: Charger is free and ready.
   - `Charging`: EV thread enters Critical Section; simulates charging ($0\% \rightarrow 100\%$).
   - `Completed`: Battery full; session finishes.
   - `Released`: Cable disconnected; resource returned to pool (`sem.release()`).

3. **Parallel Processing & Mutual Exclusion (Same-Resource Conflict)**:
   - When 2 cars request the **exact same charging point (e.g. Bay 01)** at the same instant:
     - Mutual Exclusion ensures only one car acquires the lock on Bay 01.
     - The competing car is placed in the **BLOCKED state** (no busy-waiting).
     - **Conflict Resolution**: Operator can click **"Remove / Resolve Conflict"** to dynamically reroute the waiting vehicle to an available bay.

---

## 💻 Backend Code (`backend.py`)

```python
import threading
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

print("All requests completed")
```

---

## 🚀 How to Run Locally

### 1. View Dashboard Locally
Simply open `index.html` in any modern web browser:
```text
Double-click index.html
```

### 2. Run Backend Script
```powershell
python backend.py
```

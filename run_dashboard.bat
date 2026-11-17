@echo off
title SRU Product 11 - EV Charging Station Allocation System
echo =====================================================================
echo   SRU - Product Cycle: Semaphore-Based Software Products
echo   Product 11: EV Charging Station Allocation System
echo   Main OS Concept: Counting Semaphore
echo   Charger Lifecycle: Available -^> Charging -^> Completed -^> Released
echo =====================================================================
echo.
echo [1/2] Opening the Frontend Dashboard in your browser...
start index.html
echo.
echo [2/2] Running backend.py...
"C:\Users\Purna Chandar Reddy\AppData\Roaming\uv\python\cpython-3.14.7-windows-x86_64-none\python.exe" backend.py
echo.
pause

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

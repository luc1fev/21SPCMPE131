import tkinter as tk

window = tk.Tk()
greeting = tk.Label(text="Hello, Tkinter")
greeting.pack()

class atm_machine(tk.Tk):
	def __init__(self):
		super.__init__()


if __name__ == '__main__':
	atm = atm_machine
	atm.mainloop()
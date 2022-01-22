import tkinter

def mouse_click(event):

    coords = root.winfo.pointerxy()
    print('coords: {}', format(coords))
    print('x: {}', format(coords[0]))
    print('y: {}', format(coords[1]))

root = tkinter.Tk()
root.bind('<Button>', mouse_click)
root.mainloop()

import queue
size = 3
q = queue.Queue(int(size))

def putQ(name):
	if q.qsize() < size:
		return q.put(str(name))
	else:
		return q.qsize()

def getQ(q):
	if q.qsize() == 0:
		return q.qsize()
	else:
		return q.get()


putQ('bag1')
putQ('bag2')
putQ('bag3')
putQ('bag4')

getQ()
getQ()
getQ()
getQ()
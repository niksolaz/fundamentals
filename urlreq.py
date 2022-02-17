import urllib.request

try:
    webpage = urllib.request.urlopen('http://www.google.com')
except:
    print("Couldnot access webpage!")
else:
    for line in webpage:
        print(line)
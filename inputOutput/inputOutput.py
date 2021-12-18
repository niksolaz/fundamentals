# infile = open('value.txt','rt')
# outfile = open('value-totales.txt', 'wt')
# print('Processing input')
# sum = 0
# for line in infile:
#     sum += int(line)
#     print(line.strip().rstrip(), file=outfile)
# print('\nTotal: ' + str(sum), file=outfile)
# outfile.close()
# print('Output complete')

print('Processing....')
f = open('index.html', 'w')
message = input('Insert text in html file that show your message: ')
f.write('<!DOCTYPE html>\n<html lang="en">\n\t<head>\n\t\t<meta charset="UTF-8">\n\t\t<meta http-equiv="X-UA-Compatible" content="IE=edge">\n\t\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\n\t\t<title>Document</title>\n\t</head>\n\t<body>\n\t\t<div>\n\t\t\t' + message + '\n\t\t</div>\n\t</body>\n</html>')
print('File create')
f.close()

print('Read file')
f = open('index.html', 'r')
print(f.read())
print('Complete')

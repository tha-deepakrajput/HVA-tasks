str = input('Enter the string : ')
n = int(input('Enter the number : '))

emtStr = ''
count = 0
for char in str : 
    if count == n : 
        emtStr += char.upper()
    else : 
        emtStr += char
    count += 1
print(emtStr)
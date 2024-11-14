str = input('Enter the string : ')
searchChar = input('Enter the character to search : ')

count = 0
for char in str : 
    if char == searchChar : 
        count += 1
        break

if count == 1 : 
    print('Yes')
else : 
    print('No')
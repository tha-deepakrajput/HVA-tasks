str = input()
char = input()

char_count = 0
i = 0 
while i < len(str) : 
    if str[i] == char : 
        char_count += 1
    i += 1
if char_count == 0 : 
    print('No')
else : 
    print(char_count)